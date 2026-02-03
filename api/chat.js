const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

REGLA #4 - DETECCIÓN DE INTENCIÓN:
Si el usuario menciona "presupuesto", "precio", "costo", "cotización" → NO ofiertas reunión directamente.
Primero haz preguntas sobre el proyecto, luego ofrece reunión.

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

Usuario: "Busco presupuesto para landing page"
Tú: "¿Qué tipo de proyecto tienes en mente? (Ej: landing page, e-commerce, app web, blog, etc.)"

Usuario: "Dame un rango de precios"
Tú: "Cada proyecto es único. Contactanos: 📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email}"

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

RULE #4 - INTENT DETECTION:
If user mentions "quote", "price", "cost", "estimate" → DON'T offer meeting directly.
First ask project questions, then offer meeting.

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

    if (!process.env.OPENAI_API_KEY) {
      console.error('Missing OPENAI_API_KEY environment variable');
      return writePlainTextResponse(fallbackPlainText);
    }

<<<<<<< Updated upstream
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-flash-latest',
      generationConfig: {
        temperature: 0.4,
        topP: 0.8,
        topK: 20,
        maxOutputTokens: 80,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_NONE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_NONE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_NONE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_NONE",
        },
      ]
    });

=======
>>>>>>> Stashed changes
    const conversationMessages = messages.filter(
      msg => msg.from === 'user' || msg.from === 'bot'
    );
    
    // Limitar historial a últimos 10 mensajes
    const recentMessages = conversationMessages.slice(-10);
    
    // Construir mensajes para OpenAI
    let openaiMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPTS[selectedLanguage]
      }
    ];
    
    // Agregar mensajes del usuario y bot
    for (let i = 0; i < recentMessages.length - 1; i++) {
      const msg = recentMessages[i];
      openaiMessages.push({
        role: msg.from === 'user' ? 'user' : 'assistant',
        content: msg.text
      });
    }
    
    // Agregar último mensaje del usuario
    const lastMessage = recentMessages[recentMessages.length - 1];
    openaiMessages.push({
      role: 'user',
      content: lastMessage.text
    });

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Más económico y rápido que gpt-4
      messages: openaiMessages,
      max_tokens: 80, // Respuestas cortas
      temperature: 0.3, // Más consistente
      top_p: 0.8,
      frequency_penalty: 0.1,
      presence_penalty: 0.1,
      stream: true
    });

    let hasContent = false;
    let fullResponse = '';

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || '';
      if (text) {
        hasContent = true;
        fullResponse += text;
        res.write(text);
      }
    }

    // Fallback si no hay respuesta
    if (!hasContent || fullResponse.trim().length < 10) {
      const fallback = selectedLanguage === 'en'
        ? `To help you better, contact us directly:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}\n\nHow can we help you?`
        : `Para ayudarte mejor, contactanos directamente:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}\n\n¿En qué podemos ayudarte?`;
      res.write(fallback);
    }

    res.end();

  } catch (error) {
    console.error('Error calling OpenAI:', error);
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
