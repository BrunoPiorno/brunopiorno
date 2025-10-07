const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const CONTACT_INFO = {
  whatsapp: '+54 9 2392460230', 
  email: 'bruno@globalalora.com',
  web: 'https://globalalora.com/'
};

const SYSTEM_PROMPT = `Eres Alora, asistente virtual de la agencia digital Alora.

TU MISIÓN: Responder consultas sobre nuestros servicios y conectar clientes con el equipo.

SERVICIOS DE ALORA:
• Desarrollo web (sitios corporativos, e-commerce, woocommerce, apps)
• Diseño UI/UX
• Mantenimiento web


REGLAS SIMPLES:
1. Sé breve (máximo 3-4 oraciones)
2. Siempre responde algo, nunca te quedes en silencio
3. NO des precios - cada proyecto es único
4. Cuando pregunten por precios o no sepas algo, da los datos de contacto

CÓMO DAR CONTACTO:
"Para un presupuesto personalizado, contactanos:
📱 WhatsApp: ${CONTACT_INFO.whatsapp}
📧 Email: ${CONTACT_INFO.email}
¿Qué tipo de proyecto tenés en mente?"

EJEMPLOS DE RESPUESTAS:

Usuario: "¿Cuánto cuesta una web?"
Tú: "El precio depende de tus necesidades. Para un presupuesto personalizado, contactanos:
📱 WhatsApp: ${CONTACT_INFO.whatsapp}
📧 Email: ${CONTACT_INFO.email}
¿Qué tipo de web necesitás?"

Usuario: "¿Hacen e-commerce?"
Tú: "Sí, desarrollamos e-commerce completos con pasarelas de pago y gestión de productos. ¿Qué tipo de tienda tenés en mente?"

Usuario: "¿Quién es el dueño?"
Tú: "Alora está dirigida por Bruno. Para conocer más sobre el equipo, escribile:
📱 WhatsApp: ${CONTACT_INFO.whatsapp}
📧 Email: ${CONTACT_INFO.email}"

Usuario: "¿Cuánto tarda un sitio?"
Tú: "Un sitio corporativo suele tomar 3-4 semanas y un e-commerce 6-8 semanas. Los tiempos dependen de la complejidad. ¿Qué necesitás desarrollar?"

IMPORTANTE: Si no entendés la pregunta o no sabés qué responder, igual da una respuesta amigable ofreciendo contacto. NUNCA digas que no pudiste procesar el mensaje.`;

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
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 250,
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

    // Agregar prompt del sistema solo en el primer mensaje
    if (history.length === 0) {
      lastMessage = `${SYSTEM_PROMPT}\n\nUsuario: ${lastMessage}`;
    }

    const chat = model.startChat({ 
      history,
      generationConfig: {
        temperature: 0.8,
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