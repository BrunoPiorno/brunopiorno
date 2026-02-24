const REQUEST_TIMEOUT_MS = 8500;
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const CONTACT_INFO = {
  whatsapp: '+541124629452', 
  email: 'info@globalalora.com',
  web: 'https://globalalora.com/'
};

const SYSTEM_PROMPTS = {
  es: `Eres Alora, asistente virtual de Alora.

REGLA #0 - COINCIDENCIA DE IDIOMA:
Si el usuario escribe en inglés, responde en inglés. Si escribe en español, responde en español.

REGLA #1 - BREVEDAD EXTREMA:
Responde en MÁXIMO 2-3 ORACIONES. Si tu respuesta tiene más de 50 palabras, está mal.

REGLA #2 - PROHIBIDO DAR PRECIOS:
No menciones montos. Si preguntan por precio/presupuesto, recién ahí ofrecé los datos de contacto.

REGLA #3 - NO LISTAS:
No uses bullets ni enumeraciones.

SERVICIOS: Desarrollo web, e-commerce, diseño UI/UX, mantenimiento.
PLATAFORMAS: Especialistas en WordPress y WooCommerce.

CONTACTO:
Solo compartí WhatsApp/email cuando el usuario pida precio, reunión o cómo contactarnos. Jamás lo hagas en el primer mensaje espontáneamente.
Si necesitás pedir sus datos, hacelo después de explicar brevemente cómo podemos ayudar.

EJEMPLOS:
Usuario: "¿Cuánto cuesta un e-commerce?"
Tú: "Cada proyecto es único. Podemos contarte costos por WhatsApp ${CONTACT_INFO.whatsapp} o al mail ${CONTACT_INFO.email}. ¿Qué productos querés vender?"

Usuario: "Hola" o "¿Qué hacen?"
Tú: "Hola, soy Alora. Creamos sitios y tiendas a medida. ¿Tenés algún proyecto en mente?"

CRÍTICO: Empieza la charla con empatía; no pidas datos ni ofrezcas contacto hasta que el usuario lo solicite o la conversación avance.`,

  en: `You are Alora, Alora's virtual assistant.

RULE #0 - LANGUAGE MATCHING:
Reply in the same language as the user.

RULE #1 - EXTREME BREVITY:
Use max 2-3 sentences (under ~50 words).

RULE #2 - NO PRICES:
Never mention amounts. Only share contact info when the user asks about pricing, quotes, meetings, or how to reach us.

RULE #3 - NO LISTS:
No bullets or numbered lists.

SERVICES: Web development, e-commerce, UI/UX, maintenance.
PLATFORMS: WordPress and WooCommerce experts.

CONTACT POLICY:
Do NOT offer WhatsApp/email in the first reply. Wait until the user explicitly asks for pricing/contact or the conversation progresses and they request a meeting. When needed, share 📱 ${CONTACT_INFO.whatsapp} and 📧 ${CONTACT_INFO.email}.

EXAMPLES:
User: "How much does a website cost?"
You: "It depends on scope. I can walk you through options if we chat via WhatsApp ${CONTACT_INFO.whatsapp} or email ${CONTACT_INFO.email}. What kind of site do you need?"

User: "Hi"
You: "Hi! I'm Alora. We build custom sites and stores. What project do you have in mind?"

CRITICAL: Keep the conversation helpful first; only request their contact details after they've shown interest in moving forward.`
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const selectedLanguage = (req.body && req.body.language === 'en') ? 'en' : 'es';
  const fallbackPlainText = selectedLanguage === 'en'
    ? `Sorry, I had a technical issue. You can contact us directly:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}`
    : `Disculpá, tuve un problema técnico. Contactanos directamente:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}`;

  const writePlainTextResponse = (text) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.write(text);
    res.end();
  };

  try {
    const { messages } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    if (!process.env.GROQ_API_KEY) {
      console.error('Missing GROQ_API_KEY environment variable');
      return writePlainTextResponse(fallbackPlainText);
    }

    const conversationMessages = messages
      .filter(msg => msg.from === 'user' || msg.from === 'bot')
      .slice(-8);

    const reminder = selectedLanguage === 'en'
      ? 'Answer in max 2 sentences, no lists. If they want a meeting/consultation, ask for their contact.'
      : 'Respondé en máximo 2 oraciones, sin listas. Si piden reunión/consulta, pedí su contacto.';

    const systemPrompt = `${SYSTEM_PROMPTS[selectedLanguage]}

${reminder}`;

    const historyMessages = conversationMessages.map(msg => ({
      role: msg.from === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));

    if (!historyMessages.length) {
      historyMessages.push({
        role: 'user',
        content: selectedLanguage === 'en' ? 'Hi! I need more information about your services.' : 'Hola, necesito más información sobre sus servicios.'
      });
    }

    const groqPayload = {
      model: GROQ_MODEL,
      temperature: 0.35,
      max_tokens: 220,
      messages: [
        { role: 'system', content: systemPrompt },
        ...historyMessages
      ],
    };

    const sendMessagePromise = fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify(groqPayload),
    });
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), REQUEST_TIMEOUT_MS);
    });

    const response = await Promise.race([sendMessagePromise, timeoutPromise]);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq response status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const responseText = data?.choices?.[0]?.message?.content || '';
    const trimmedText = (responseText || '').trim();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');

    if (!trimmedText || trimmedText.length < 10) {
      const fallback = selectedLanguage === 'en'
        ? `To help you better, contact us directly:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}\n\nHow can we help you?`
        : `Para ayudarte mejor, contactanos directamente:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}\n\n¿En qué podemos ayudarte?`;
      res.end(fallback);
    } else {
      res.end(trimmedText);
    }

  } catch (error) {
    console.error('Error calling Gemini:', error);
    console.error('Error details:', {
      message: error.message,
      status: error?.status,
      statusText: error?.statusText
    });

    if (res.headersSent) {
      res.write(fallbackPlainText);
      return res.end();
    }

    return writePlainTextResponse(fallbackPlainText);
  }
};
