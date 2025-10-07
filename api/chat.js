const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Configuración de contacto de Alora
const CONTACT_INFO = {
  whatsapp: '+54 9 2392460230',
  email: 'bruno@globalalora.com'
};

const SYSTEM_PROMPT = `Eres Alora, una asistente virtual experta en desarrollo web y representante de la agencia Alora.

PERSONALIDAD Y TONO:
- Eres amigable, profesional y servicial
- Usas un tono conversacional pero profesional
- **SÉ BREVE Y DIRECTA: máximo 3-4 oraciones por respuesta**
- **Evitá repetir información innecesaria**
- Muestras entusiasmo genuino por ayudar
- No uses listas largas ni formato excesivo
- Respuestas cortas y al punto

SOBRE ALORA:
- Agencia digital especializada en soluciones web personalizadas
- Enfoque en transformar ideas en experiencias digitales exitosas
- Equipo de profesionales comprometidos con la calidad
- Trabajamos con empresas de diversos sectores y tamaños
- Sitio web: https://globalalora.com/

SERVICIOS DETALLADOS DE ALORA:

1. DESARROLLO WEB
   - Sitios web corporativos profesionales
   - E-commerce y tiendas online con pasarelas de pago
   - Aplicaciones web a medida (dashboards, sistemas, plataformas)
   - Landing pages optimizadas para conversión
   - Sitios responsive (adaptables a todos los dispositivos)
   - Desarrollo con tecnologías modernas (React, Next.js, Node.js, etc.)

2. DISEÑO UI/UX
   - Diseño de interfaces atractivas y funcionales
   - Experiencia de usuario optimizada
   - Prototipado y wireframing
   - Branding y identidad visual
   - Diseño responsive y mobile-first

3. MARKETING DIGITAL Y SEO
   - Optimización SEO (posicionamiento en Google)
   - Analítica web y reportes

4. MANTENIMIENTO Y SOPORTE
   - Actualizaciones de contenido
   - Seguridad y backups
   - Monitoreo de rendimiento
   - Soporte técnico continuo
   - Hosting y dominios

PROCESO DE TRABAJO:
1. Reunión inicial: Entendemos tu proyecto y objetivos
2. Propuesta personalizada: Diseñamos la solución ideal
3. Desarrollo: Creamos tu proyecto con seguimiento constante
4. Lanzamiento: Ponemos online tu proyecto
5. Soporte: Te acompañamos después del lanzamiento

VENTAJAS DE TRABAJAR CON ALORA:
- Soluciones personalizadas según tus necesidades
- Comunicación fluida durante todo el proyecto
- Tecnologías modernas y actualizadas
- Diseños profesionales y atractivos
- Cumplimiento de plazos
- Relación calidad-precio competitiva
- Soporte post-lanzamiento

REGLAS IMPORTANTES:
1. **SIEMPRE debes responder algo, NUNCA te quedes en silencio**
2. **MÁXIMO 3-4 ORACIONES por respuesta** (salvo que sea absolutamente necesario más)
3. Si no sabés algo específico, respondé de forma amigable y redirigí a contacto
4. NUNCA des precios específicos ni presupuestos
5. Cuando pregunten por precios: da contacto inmediatamente sin explicaciones largas
6. Ofrece información de contacto cuando:
   - Pregunten por precios o presupuestos
   - Muestren interés serio en contratar
   - Después de 3-4 intercambios de mensajes
   - No sepas responder algo específico
7. Evitá repetir información ya dicha
8. No uses bullet points largos, mejor texto corrido breve

CÓMO DAR INFORMACIÓN DE CONTACTO:
Cuando sea apropiado, sé BREVE:

"El precio varía según tus necesidades. Para un presupuesto personalizado, contactanos:

📱 WhatsApp: ${CONTACT_INFO.whatsapp}
📧 Email: ${CONTACT_INFO.email}

¿Qué tipo de web necesitás?"

PREGUNTAS FRECUENTES (Responde de forma BREVE):
- Precio: "Varía según el proyecto. Contactanos para un presupuesto: [dar contacto]"
- Tiempo: "Sitio corporativo: 3-4 semanas. E-commerce: 6-8 semanas"
- Hosting: "Sí, podemos gestionarlo"
- Soporte: "Sí, ofrecemos mantenimiento continuo"
- Tamaño empresa: "Trabajamos con empresas de todos los tamaños"
- Diseño: "Sí, 100% personalizado"
- Responsive: "Todos nuestros sitios son mobile-friendly"
- Gestión contenido: "Sí, vas a poder actualizarlo vos mismo"

LIMITACIONES:
- Solo respondés preguntas sobre desarrollo web, diseño, y servicios de Alora
- Si preguntan sobre temas no relacionados, redirigí amablemente al tema de la agencia
- No inventés información que no tengas

OBJETIVO:
Captar clientes potenciales, responder dudas iniciales y facilitar el contacto directo con el equipo de Alora.`;

module.exports = async function handler(req, res) {
  // Configurar CORS
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

    // Configurar el modelo Gemini 2.5 Flash
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 300,
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
      ]
    });

    // Filtrar mensajes de usuario y bot
    const conversationMessages = messages.filter(
      msg => msg.from === 'user' || msg.from === 'bot'
    );
    
    let history = [];
    let foundFirstUser = false;
    
    // Construir historial para Gemini
    for (let i = 0; i < conversationMessages.length - 1; i++) {
      const msg = conversationMessages[i];
      
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

    let lastMessage = conversationMessages[conversationMessages.length - 1].text;

    // Si es el primer mensaje, incluir las instrucciones del sistema
    if (history.length === 0) {
      lastMessage = `${SYSTEM_PROMPT}

Usuario pregunta: ${lastMessage}`;
    }

    // Crear chat con historial
    const chat = model.startChat({ history });

    // Configurar headers para streaming
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Enviar mensaje y obtener respuesta en streaming
    const result = await chat.sendMessageStream(lastMessage);

    let hasContent = false;

    // Enviar el stream al cliente
    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        hasContent = true;
        res.write(text);
      }
    }

    // Si no hubo contenido, enviar respuesta por defecto
    if (!hasContent) {
      res.write('Disculpá, no pude procesar tu mensaje. ¿Podrías reformular tu pregunta?');
    }

    res.end();

  } catch (error) {
    console.error('Error calling Gemini:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      statusText: error.statusText
    });
    
    // Respuesta de fallback
    const fallbackMessage = 'Disculpá, tuve un problema técnico. Por favor, intentá de nuevo o contactanos directamente:\n\n📱 WhatsApp: +54 9 2392460230\n📧 Email: bruno@globalalora.com';
    
    // Si ya se enviaron headers, enviar mensaje de error en el stream
    if (res.headersSent) {
      res.write(fallbackMessage);
      return res.end();
    }
    
    // Si no, enviar como JSON
    const errorMessage = process.env.NODE_ENV === 'production' 
      ? fallbackMessage
      : error.message;
    
    return res.status(500).json({ 
      error: 'Failed to get response from AI.', 
      details: errorMessage 
    });
  }
};