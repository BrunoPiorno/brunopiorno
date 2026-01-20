const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const CONTACT_INFO = {
  whatsapp: '+541124629452', 
  email: 'info@globalalora.com',
  web: 'https://globalalora.com/'
};

const SYSTEM_PROMPT = `Eres Alora, asistente virtual de Alora.

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

CRÍTICO: Si tu respuesta supera 50 palabras o menciona precios, DETENTE y da solo el contacto.`;

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

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
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

    const conversationMessages = messages.filter(
      msg => msg.from === 'user' || msg.from === 'bot'
    );
    
    // Limitar historial a últimos 10 mensajes para no sobrecargar
    const recentMessages = conversationMessages.slice(-10);
    
    let history = [];
    let foundFirstUser = false;
    
    for (let i = 0; i < recentMessages.length - 1; i++) {
      const msg = recentMessages[i];
      
      if (msg.from === 'user') {
        foundFirstUser = true;
      }
      
      if (foundFirstUser) {
        history.push({
          role: msg.from === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }

    let lastMessage = recentMessages[recentMessages.length - 1].text;

    // Agregar contexto solo en el primer mensaje
    if (history.length === 0) {
      lastMessage = `Eres Alora, asistente de la agencia Alora. Servicios: desarrollo web, e-commerce, diseño.

REGLAS CRÍTICAS:
- Máximo 2 oraciones
- NO uses listas ni bullets
- NO menciones precios
- Si preguntan precios: da contacto (📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email})
- Si quieren agendar reunión/consulta: PIDE su número o email, NO des el tuyo

Usuario: ${lastMessage}`;
    } else {
      // En mensajes siguientes, solo recordar brevedad
      lastMessage = `[Responde en máximo 2 oraciones, sin listas. Si piden reunión/consulta: PIDE su contacto]

Usuario: ${lastMessage}`;
    }

    const chat = model.startChat({ 
      history,
      generationConfig: {
        temperature: 0.5,
      }
    });

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const result = await chat.sendMessageStream(lastMessage);

    let hasContent = false;
    let fullResponse = '';

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        hasContent = true;
        fullResponse += text;
        res.write(text);
      }
    }

    // Fallback si no hay respuesta
    if (!hasContent || fullResponse.trim().length < 10) {
      const fallback = `Para ayudarte mejor, contactanos directamente:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}\n\n¿En qué podemos ayudarte?`;
      res.write(fallback);
    }

    res.end();

  } catch (error) {
    console.error('Error calling Gemini:', error);
    console.error('Error details:', {
      message: error.message,
      status: error?.status,
      statusText: error?.statusText
    });
    
    const fallbackMessage = `Disculpá, tuve un problema técnico. Contactanos directamente:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp}\n📧 Email: ${CONTACT_INFO.email}`;
    
    if (res.headersSent) {
      res.write(fallbackMessage);
      return res.end();
    }
    
    return res.status(500).json({ 
      error: 'Failed to get response from AI.', 
      details: process.env.NODE_ENV === 'production' ? 'Error del servidor' : error.message 
    });
  }
};