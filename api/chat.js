'use strict';

const REQUEST_TIMEOUT_MS = 10_000;
const GROQ_ENDPOINT      = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL         = 'llama-3.3-70b-versatile';

const CONTACT = {
  whatsapp: '+541124629452',
  email:    'info@globalalora.com',
};

// ─── Structured logger ────────────────────────────────────────────────────────
const log = {
  info:  (event, ctx = {}) => console.log(JSON.stringify({ level: 'INFO',  event, ...ctx, ts: new Date().toISOString() })),
  warn:  (event, ctx = {}) => console.warn(JSON.stringify({ level: 'WARN',  event, ...ctx, ts: new Date().toISOString() })),
  error: (event, ctx = {}) => console.error(JSON.stringify({ level: 'ERROR', event, ...ctx, ts: new Date().toISOString() })),
};

// ─── Conversation health analysis ─────────────────────────────────────────────
function jaccardSimilarity(a, b) {
  const sa = new Set(a.split(/\s+/).filter(Boolean));
  const sb = new Set(b.split(/\s+/).filter(Boolean));
  const inter = new Set([...sa].filter(x => sb.has(x)));
  const union = new Set([...sa, ...sb]);
  return union.size ? inter.size / union.size : 0;
}

const FRUSTRATION_SIGNALS = {
  es: ['leiste', 'leíste', 'no me escuchas', 'no entiendes', 'automática', 'automatica', 'robot', 'pésimo', 'pesimo', 'inútil', 'inutil', 'ridículo', 'ridiculo', 'sin sentido', 'que clase', 'qué clase', 'no sirve', 'mal servicio'],
  en: ['did you read', 'are you a bot', "don't understand", 'not listening', 'useless', 'ridiculous', 'makes no sense', 'terrible service', 'stupid bot', 'not helpful'],
};

const EXIT_SIGNALS = {
  es: ['chau', 'adios', 'adiós', 'hasta luego', 'me voy', 'olvida', 'olvídalo', 'olvidalo', 'déjalo', 'dejalo', 'no gracias'],
  en: ['bye', 'goodbye', 'forget it', 'never mind', "i'm leaving", 'cya', 'no thanks', 'leave it'],
};

function analyzeConversation(messages, lang) {
  const userMsgs = messages.filter(m => m.from === 'user');
  const botMsgs  = messages.filter(m => m.from === 'bot');

  const lastUserText = (userMsgs.at(-1)?.text ?? '').toLowerCase();
  const lastBotText  = botMsgs.at(-1)?.text ?? null;
  const prevBotText  = botMsgs.at(-2)?.text ?? null;

  const frustSignals = FRUSTRATION_SIGNALS[lang] ?? FRUSTRATION_SIGNALS.es;
  const exitSignals  = EXIT_SIGNALS[lang]         ?? EXIT_SIGNALS.es;

  const isFrustrated = frustSignals.some(s => lastUserText.includes(s));
  const isExiting    = exitSignals.some(s => lastUserText.includes(s));

  // Loop: last two bot replies are too similar
  const hasLoop = !!(lastBotText && prevBotText &&
    jaccardSimilarity(lastBotText.toLowerCase(), prevBotText.toLowerCase()) > 0.55
  );

  const isAtRisk = isFrustrated || isExiting || hasLoop;

  return { isFrustrated, isExiting, hasLoop, isAtRisk, lastBotText, msgCount: messages.length };
}

// ─── Prompt builder ───────────────────────────────────────────────────────────
const BASE_PROMPT = {
  es: `Sos Alora, asistente virtual de Alora — estudio de desarrollo digital (web, e-commerce, apps).

REGLAS ABSOLUTAS:
1. IDIOMA: Respondé siempre en el idioma del usuario.
2. BREVEDAD: Máximo 2-3 oraciones. Más de 60 palabras = muy largo.
3. SIN PRECIOS: Nunca menciones montos. Si piden precio, derivá a WhatsApp o email.
4. SIN LISTAS: Sin bullets ni numeraciones.
5. NO REPETIR: Jamás repitas lo que ya dijiste antes. Cada respuesta debe aportar algo nuevo.
6. PREGUNTAR ANTES DE ASUMIR: Si un mensaje es ambiguo, preguntá qué necesitan — no asumas nada.
7. TONO HUMANO: Cálido, directo, curioso, útil. Nunca corporativo ni robótico.

SERVICIOS: Desarrollo web, e-commerce, diseño UI/UX, mantenimiento web.
PLATAFORMAS: WordPress y WooCommerce (especialistas).

CONTACTO (solo compartirlo cuando el usuario lo pide explícitamente o quiere agendar):
  📱 WhatsApp: ${CONTACT.whatsapp}
  📧 Email: ${CONTACT.email}

MANEJO DE CASOS DIFÍCILES:
- Mensaje con "pedido", "envío", "producto" u otro término de tienda → ANTES de decir que no vendemos, preguntá: "¿Estás buscando soporte de una tienda que desarrollamos, o tenés una consulta de desarrollo?" — puede ser cliente de uno de nuestros clientes.
- Usuario confundido → Preguntá con curiosidad genuina qué están buscando.
- Enojo o frustración → Primero reconocé la emoción brevemente ("Entiendo tu frustración"). Pedí disculpas si corresponde. Ofrecé una nueva vía de ayuda.
- Conversación estancada → Ofrecé conectar con una persona real por WhatsApp.`,

  en: `You are Alora, Alora's virtual assistant — a digital development studio (web, e-commerce, apps).

ABSOLUTE RULES:
1. LANGUAGE: Always reply in the user's language.
2. BREVITY: Max 2-3 sentences. Over 60 words = too long.
3. NO PRICES: Never mention amounts. If asked for pricing, point to contact info.
4. NO LISTS: No bullets or numbers.
5. NO REPETITION: Never repeat what you've already said. Every response must add new value.
6. ASK BEFORE ASSUMING: If a message is ambiguous, ask what they need — don't assume.
7. HUMAN TONE: Warm, direct, curious, helpful. Never corporate or robotic.

SERVICES: Web development, e-commerce, UI/UX design, web maintenance.
PLATFORMS: WordPress and WooCommerce specialists.

CONTACT (only share when user explicitly asks or wants to schedule):
  📱 WhatsApp: ${CONTACT.whatsapp}
  📧 Email: ${CONTACT.email}

HANDLING DIFFICULT CASES:
- "Order", "shipping", "product" or retail terms → BEFORE saying we don't sell products, ask: "Are you looking for support on a store we built, or do you have a development question?" — they may be a client's customer.
- Confused user → Ask with genuine curiosity what they're looking for.
- Anger or frustration → Briefly acknowledge the emotion ("I understand your frustration"). Apologize if warranted. Offer a new way to help.
- Stalled conversation → Offer to connect with a real person via WhatsApp.`,
};

function buildPrompt(lang, state) {
  const { isFrustrated, isExiting, hasLoop, lastBotText } = state;
  let prompt = BASE_PROMPT[lang] ?? BASE_PROMPT.es;

  if (hasLoop) {
    prompt += lang === 'en'
      ? '\n\n⚠️ ANTI-LOOP (CRITICAL): Your last two replies were nearly identical. Give a completely different response now. Do NOT echo or paraphrase the previous message in any form.'
      : '\n\n⚠️ ANTI-LOOP (CRÍTICO): Tus últimas dos respuestas fueron casi iguales. Dá una respuesta completamente diferente ahora. NO repitas ni parafrasees el mensaje anterior.';
  }

  if (isFrustrated) {
    prompt += lang === 'en'
      ? '\n\n🔴 FRUSTRATED USER: Acknowledge their frustration first (1 short, genuine sentence). Do NOT repeat previous responses. Ask a real clarifying question. Offer human help if needed.'
      : '\n\n🔴 USUARIO FRUSTRADO: Reconocé su frustración primero (1 oración corta y genuina). NO repitas respuestas anteriores. Hacé una pregunta de aclaración real. Ofrecé ayuda humana si es necesario.';
  }

  if (isExiting) {
    prompt += lang === 'en'
      ? '\n\n🔴 USER IS LEAVING: Warm recovery — briefly acknowledge any frustration, offer one genuine path forward (WhatsApp or a quick callback). Not desperate, not pushy.'
      : '\n\n🔴 USUARIO SE VA: Recuperación cálida — reconocé brevemente cualquier frustración y ofrecé un camino genuino (WhatsApp o un callback rápido). Sin desesperación ni insistencia.';
  }

  if (lastBotText) {
    const preview = lastBotText.slice(0, 100).replace(/"/g, "'");
    prompt += lang === 'en'
      ? `\n\n📝 YOUR LAST RESPONSE STARTED WITH: "${preview}…" — Do NOT repeat or paraphrase this.`
      : `\n\n📝 TU ÚLTIMA RESPUESTA EMPEZÓ CON: "${preview}…" — NO repitas ni parafrasees esto.`;
  }

  return prompt;
}

// ─── Fallback responses ────────────────────────────────────────────────────────
const FALLBACK = {
  es: `Disculpá, tuve un problema técnico. Podés contactarnos directamente:\n\n📱 WhatsApp: ${CONTACT.whatsapp}\n📧 Email: ${CONTACT.email}`,
  en: `Sorry, I ran into a technical issue. You can reach us directly:\n\n📱 WhatsApp: ${CONTACT.whatsapp}\n📧 Email: ${CONTACT.email}`,
};

// ─── Handler ──────────────────────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  const lang         = req.body?.language === 'en' ? 'en' : 'es';
  const fallbackText = FALLBACK[lang];

  const writePlain = (text) => {
    if (res.headersSent) return;
    res.status(200)
       .setHeader('Content-Type', 'text/plain; charset=utf-8')
       .end(text);
  };

  try {
    const { messages, conversationId } = req.body ?? {};

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    if (!process.env.GROQ_API_KEY) {
      log.error('MISSING_API_KEY', { conversationId });
      return writePlain(fallbackText);
    }

    // Analyze conversation health
    const state = analyzeConversation(messages, lang);

    log.info('CHAT_REQUEST', {
      conversationId,
      lang,
      msgCount:    state.msgCount,
      isFrustrated: state.isFrustrated,
      isExiting:   state.isExiting,
      hasLoop:     state.hasLoop,
      isAtRisk:    state.isAtRisk,
    });

    if (state.isFrustrated) {
      log.warn('FRUSTRATED_USER', {
        conversationId,
        lastUserMsg: messages.filter(m => m.from === 'user').at(-1)?.text?.slice(0, 80),
      });
    }
    if (state.hasLoop) {
      log.warn('LOOP_DETECTED', { conversationId, lastBotText: state.lastBotText?.slice(0, 80) });
    }
    if (state.isExiting) {
      log.warn('USER_EXITING', { conversationId });
    }

    const systemPrompt = buildPrompt(lang, state);
    // Higher temperature when recovering: more creative, less deterministic
    const temperature  = state.isFrustrated || state.isExiting ? 0.78 : 0.55;

    const history = messages
      .filter(m => m.from === 'user' || m.from === 'bot')
      .slice(-10)
      .map(m => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }));

    if (!history.length) {
      history.push({
        role:    'user',
        content: lang === 'en' ? 'Hi, I need some information.' : 'Hola, necesito información.',
      });
    }

    const groqRes = await Promise.race([
      fetch(GROQ_ENDPOINT, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model:       GROQ_MODEL,
          temperature,
          max_tokens:  200,
          messages:    [{ role: 'system', content: systemPrompt }, ...history],
        }),
      }),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), REQUEST_TIMEOUT_MS)),
    ]);

    if (!groqRes.ok) {
      const errBody = await groqRes.text();
      throw new Error(`Groq ${groqRes.status}: ${errBody}`);
    }

    const data = await groqRes.json();
    const text = (data?.choices?.[0]?.message?.content ?? '').trim();

    if (!text || text.length < 5) {
      log.warn('EMPTY_RESPONSE', { conversationId });
      return writePlain(fallbackText);
    }

    log.info('CHAT_RESPONSE', {
      conversationId,
      len:         text.length,
      temperature,
      isAtRisk:    state.isAtRisk,
    });

    res.status(200)
       .setHeader('Content-Type', 'text/plain; charset=utf-8')
       .setHeader('Cache-Control', 'no-cache')
       .end(text);

  } catch (err) {
    log.error('CHAT_ERROR', { message: err.message, stack: err.stack?.slice(0, 200) });
    return writePlain(fallbackText);
  }
};
