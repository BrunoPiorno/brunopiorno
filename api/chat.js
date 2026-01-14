const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const CONTACT_INFO = {
  whatsapp: '+54 9 2392460230', 
  email: 'bruno@globalalora.com',
  email2: 'somosglobalalora@gmail.com',
  web: 'https://globalalora.com/'
};

// Función para detectar si el usuario proporcionó un número de teléfono
function detectPhone(text) {
  const phonePattern = /(\+?54\s?9?\s?)?(\d{2,4})[\s-]?\d{3,4}[\s-]?\d{4}/;
  return phonePattern.test(text);
}

// Función para detectar si el usuario proporcionó un email
function detectEmail(text) {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  return emailPattern.test(text);
}

// Función para detectar si el usuario proporcionó un nombre
function detectName(text) {
  // Considera que dio nombre si tiene 2+ palabras y no es solo números/símbolos
  const words = text.trim().split(/\s+/);
  return words.length >= 1 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}/.test(text);
}

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
    const { messages, userData = {} } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const conversationMessages = messages.filter(
      msg => msg.from === 'user' || msg.from === 'bot'
    );
    
    const recentMessages = conversationMessages.slice(-10);
    const lastUserMessage = recentMessages[recentMessages.length - 1].text;

    // Estado de recolección de datos
    let currentState = userData.collectionState || 'none'; // none, awaiting_phone, awaiting_email, awaiting_name, completed
    let collectedData = {
      phone: userData.phone || null,
      email: userData.email || null,
      name: userData.name || null
    };

    // Detectar si el usuario está pidiendo reunión/consulta/presupuesto
    const requestsContact = /\b(reunión|consulta|presupuesto|contacto|agendar|llamar|hablar|info|información|más información|me interesa|quiero)\b/i.test(lastUserMessage);
    const asksAboutPrice = /\b(cuánto|cuesta|precio|precios|rango|tarifa|valor|cotiza)\b/i.test(lastUserMessage);

    // Si pide contacto y no hemos empezado a recolectar datos
    if ((requestsContact || asksAboutPrice) && currentState === 'none') {
      currentState = 'awaiting_phone';
      
      const response = asksAboutPrice 
        ? "Para darte un presupuesto personalizado, necesito algunos datos. ¿Me pasás tu número de teléfono?"
        : "¡Perfecto! Para coordinar, necesito algunos datos. ¿Me pasás tu número de teléfono?";
      
      res.setHeader('Content-Type', 'application/json');
      return res.json({ 
        response,
        userData: {
          collectionState: currentState,
          ...collectedData
        }
      });
    }

    // Si estamos esperando el teléfono
    if (currentState === 'awaiting_phone') {
      if (detectPhone(lastUserMessage)) {
        collectedData.phone = lastUserMessage.trim();
        currentState = 'awaiting_email';
        
        res.setHeader('Content-Type', 'application/json');
        return res.json({ 
          response: "¡Genial! Ahora, ¿cuál es tu email?",
          userData: {
            collectionState: currentState,
            ...collectedData
          }
        });
      } else {
        res.setHeader('Content-Type', 'application/json');
        return res.json({ 
          response: "Por favor, ingresá un número de teléfono válido (ej: 11 2345 6789 o +54 9 11 2345 6789)",
          userData: {
            collectionState: currentState,
            ...collectedData
          }
        });
      }
    }

    // Si estamos esperando el email
    if (currentState === 'awaiting_email') {
      if (detectEmail(lastUserMessage)) {
        collectedData.email = lastUserMessage.trim();
        currentState = 'awaiting_name';
        
        res.setHeader('Content-Type', 'application/json');
        return res.json({ 
          response: "Perfecto. Por último, ¿cuál es tu nombre?",
          userData: {
            collectionState: currentState,
            ...collectedData
          }
        });
      } else {
        res.setHeader('Content-Type', 'application/json');
        return res.json({ 
          response: "Por favor, ingresá un email válido (ej: tunombre@ejemplo.com)",
          userData: {
            collectionState: currentState,
            ...collectedData
          }
        });
      }
    }

    // Si estamos esperando el nombre
    if (currentState === 'awaiting_name') {
      if (detectName(lastUserMessage)) {
        collectedData.name = lastUserMessage.trim();
        currentState = 'completed';
        
        // Aquí podrías guardar los datos en una base de datos o enviar un email
        console.log('Datos recolectados:', collectedData);
        
        res.setHeader('Content-Type', 'application/json');
        return res.json({ 
          response: `¡Listo, ${collectedData.name}! Te contactamos a la brevedad al ${collectedData.phone} o a ${collectedData.email}. ¿Hay algo más en lo que pueda ayudarte?`,
          userData: {
            collectionState: currentState,
            ...collectedData
          },
          leadData: collectedData // Esto se puede usar en el frontend para enviar a tu CRM
        });
      } else {
        res.setHeader('Content-Type', 'application/json');
        return res.json({ 
          response: "Por favor, ingresá tu nombre",
          userData: {
            collectionState: currentState,
            ...collectedData
          }
        });
      }
    }

    // Si ya completamos la recolección o es una conversación normal
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

    let lastMessage = lastUserMessage;

    if (history.length === 0) {
      lastMessage = `Eres Alora, asistente virtual de Alora.

REGLA #1 - BREVEDAD EXTREMA:
Responde en MÁXIMO 2-3 ORACIONES. Si tu respuesta tiene más de 50 palabras, ESTÁ MAL.

REGLA #2 - PROHIBIDO DAR PRECIOS:
NUNCA menciones: dólares, pesos, USD, $, rangos de precios, costos, tarifas, números relacionados a dinero.
Si preguntan por precios → Da contacto inmediatamente.

REGLA #3 - NO LISTAS:
NO uses bullets (•, *, -), NO enumeres, NO hagas listas largas.

SERVICIOS: Desarrollo web, e-commerce, diseño UI/UX, mantenimiento.

PLATAFORMAS: Somos especialistas en WordPress y WooCommerce. También nos adaptamos a otras plataformas según las necesidades del cliente.

EJEMPLOS DE RESPUESTAS:

Usuario: "¿Cuánto cuesta un e-commerce?"
Tú: "Depende de tus necesidades. Contactanos: 📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email}"

Usuario: "¿Hacen tiendas online?"
Tú: "Sí, somos especialistas en WooCommerce para tiendas online. ¿Qué productos querés vender?"

Usuario: "¿Con qué plataformas trabajan?"
Tú: "Somos especialistas en WordPress y WooCommerce, pero nos adaptamos a lo que necesites. ¿Qué tipo de proyecto tenés en mente?"

Usuario: "Dame un rango de precios"
Tú: "Cada proyecto es único. Contactanos: 📱 ${CONTACT_INFO.whatsapp} 📧 ${CONTACT_INFO.email}"

CRÍTICO: Si tu respuesta supera 50 palabras o menciona precios, DETENTE y da solo el contacto.

Usuario: ${lastMessage}`;
    } else {
      lastMessage = `[Responde en máximo 2-3 oraciones (50 palabras máx), sin listas ni bullets. NO menciones precios nunca. Si piden reunión/consulta: el sistema ya maneja la recolección de datos]

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

    if (!hasContent || fullResponse.trim().length < 10) {
      const fallback = `Para ayudarte mejor, contactanos:\n📱 ${CONTACT_INFO.whatsapp}\n📧 ${CONTACT_INFO.email}`;
      res.write(fallback);
    }

    res.end();

  } catch (error) {
    console.error('Error calling Gemini:', error);
    
    const fallbackMessage = `Disculpá, tuve un problema técnico. Contactanos:\n📱 ${CONTACT_INFO.whatsapp}\n📧 ${CONTACT_INFO.email}`;
    
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