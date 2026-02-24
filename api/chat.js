const REQUEST_TIMEOUT_MS = 8500;
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.1-8b-instant';

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
Responde en MÁXIMO 2-3 ORACIONES. Si tu respuesta tiene más de 50 palabras, ESTÁ MAL.

REGLA #2 - PROHIBIDO DAR PRECIOS:
NUNCA menciones: dólares, pesos, USD, $, rangos de precios, costos, tarifas, números relacionados a dinero.
Si preguntan por precios → Da contacto inmediatamente.

REGLA #3 - NO LISTAS:
NO uses bullets (•, *, -), NO enumeres, NO hagas listas largas.

SERVICIOS: Desarrollo web, e-commerce, diseño UI/UX, mantenimiento.

PLATAFORMAS: Somos especialistas en WordPress y WooCommerce. También nos adaptamos a otras plataformas según las necesidades del cliente.

CÓMO DAR CONTACTO:
"Para un presupuesto personalizado, contactanos:
📱 WhatsApp: ${CONTACT_INFO.whatsapp}
📧 Email: ${CONTACT_INFO.email}
¿Qué tipo de proyecto tenés en mente?"

EJEMPLOS DE RESPUESTAS:

Usuario: "¿Cuánto cuesta un e-commerce?"
Tú: "Depende de tus necesidades. Contactanos: 📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email}"

Usuario: "¿Hacen tiendas online?"
Tú: "Sí, somos especialistas en WooCommerce para tiendas online. ¿Qué productos querés vender?"

Usuario: "¿Con qué plataformas trabajan?"
Tú: "Somos especialistas en WordPress y WooCommerce, pero nos adaptamos a lo que necesites. ¿Qué tipo de proyecto tenés en mente?"

Usuario: "Dame un rango de precios"
Tú: "Cada proyecto es único. Contactanos: 📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email}"

Usuario: "¿Cuánto cuesta hosting/dominio/plataforma?"
Tú: "Varía según el proyecto. Contactanos: 📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email}"

Usuario: "¿Cómo me contacto?" o "¿Cómo los contacto?"
Tú: "Escribinos por WhatsApp al ${CONTACT_INFO.whatsapp} o por email a ${CONTACT_INFO.email}"

Usuario: "Quiero agendar una reunión" o "Quiero una consulta"
Tú: "¡Perfecto! Dejame tu número de teléfono o email y te contactamos en el día para coordinar la reunión."

Usuario: "Quiero más información" o "Me interesa"
Tú: "¡Genial! Dejame tu número o email y te enviamos toda la info que necesites."

CRÍTICO: Si tu respuesta supera 50 palabras o menciona precios, DETENTE y da solo el contacto.`,

  en: `You are Alora, Alora's virtual assistant.

RULE #0 - LANGUAGE MATCHING:
If the user writes in English, respond in English. If they write in Spanish, respond in Spanish.

RULE #1 - EXTREME BREVITY:
Respond in MAXIMUM 2-3 SENTENCES. If your response has more than 50 words, IT'S WRONG.

RULE #2 - NO PRICES:
NEVER mention: dollars, USD, $, price ranges, costs, rates, money-related numbers.
If they ask for prices → Give contact immediately.

RULE #3 - NO LISTS:
DO NOT use bullets (•, *, -), DO NOT enumerate, DO NOT make long lists.

SERVICES: Web development, e-commerce, UI/UX design, maintenance.

PLATFORMS: We specialize in WordPress and WooCommerce. We also adapt to other platforms based on client needs.

HOW TO GIVE CONTACT:
"For a personalized quote, contact us:
📱 WhatsApp: ${CONTACT_INFO.whatsapp}
📧 Email: ${CONTACT_INFO.email}
What kind of project do you have in mind?"

CRITICAL: If your response exceeds 50 words or mentions prices, STOP and only give contact info.`
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
