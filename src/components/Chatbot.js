import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
// import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = {
  whatsapp: '+541124629452',
  email: 'info@globalalora.com',
};

const CAREERS_EMAIL = 'info@globalalora.com';

const normalizeText = (text = '') =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^\w\s@.+-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const CAREER_KEYWORDS_RAW = [
  'cv',
  'curriculum',
  'currículo',
  'curriculo',
  'resumen',
  'resume',
  'quiero dejar mi cv',
  'quiero enviar mi cv',
  'quiero mandar mi cv',
  'trabajo',
  'trabajar',
  'postular',
  'aplicar',
  'empleo',
  'job',
  'jobs',
  'career',
  'careers',
  'hire',
  'hiring',
  'busqueda laboral',
  'búsqueda laboral',
  'enviar cv',
  'trabajar con ustedes',
  'colaborar con ustedes',
  'unirme al equipo',
  'quiero trabajar con alora',
  'portafolio',
  'portfolio',
  'freelance',
  'colaborar'
];

const RETAIL_KEYWORDS_RAW = [
  'pedido',
  'orden',
  'compra',
  'comprar',
  'producto',
  'productos',
  'envio',
  'envío',
  'entrega',
  'tienda',
  'proveedor',
  'pegatina',
  'pegatinas',
  'kia',
  'auto',
  'order',
  'purchase',
  'shipping',
  'delivery',
  'store',
  'package',
  'merch',
  'merchandise',
  'refund',
  'replacement',
  'return',
  'did not arrive',
  'wrong item',
  'equivocado',
  'no llego',
  'no llegó',
  'devolucion',
  'devolución'
];

const CAREER_KEYWORDS = CAREER_KEYWORDS_RAW.map(keyword => normalizeText(keyword));
const RETAIL_KEYWORDS = RETAIL_KEYWORDS_RAW.map(keyword => normalizeText(keyword));

const detectSpecialIntent = (text = '') => {
  const normalized = normalizeText(text);
  if (!normalized) return null;

  if (CAREER_KEYWORDS.some(keyword => normalized.includes(keyword))) {
    return 'career';
  }

  if (RETAIL_KEYWORDS.some(keyword => normalized.includes(keyword))) {
    return 'retail';
  }

  return null;
};

const MAX_CHAT_RETRIES = 2;

// Convertir URLs en enlaces clickeables
const renderMessageWithLinks = (text) => {
  if (!text) return text;
  
  const urlRegex = /https?:\/\/[^\s]+/g;
  const matches = text.match(urlRegex);
  
  if (!matches || matches.length === 0) return text;
  
  const parts = [];
  let lastIndex = 0;
  
  // Encontrar todas las URLs y su posición
  let match;
  while ((match = urlRegex.exec(text)) !== null) {
    // Texto antes de la URL
    if (match.index > lastIndex) {
      parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
    }
    
    // El link
    parts.push(
      <a 
        key={`link-${match.index}`}
        href={match[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="chatbot-link"
      >
        {match[0]}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Texto después de la última URL
  if (lastIndex < text.length) {
    parts.push(<span key={`text-end`}>{text.slice(lastIndex)}</span>);
  }
  
  return <>{parts}</>;
};

const formatConversationForEmail = (conversationArray = []) =>
  conversationArray
    .map(msg => `${msg.from === 'user' ? 'Cliente' : 'Bot'}: ${msg.text}`)
    .join('\n\n');

const Chatbot = () => {
  const { locale } = useLanguage();

  const messages_by_lang = {
    es: {
      welcome: '¡Hola! Soy el asistente virtual de Alora. Somos un estudio de desarrollo digital. ¿En qué puedo ayudarte hoy?',
      offer_contact: '¿Te gustaría que un asesor especializado te contacte para darte más detalles sobre tu proyecto?',
      ask_name: '¡Perfecto! Para que un asesor de Alora pueda contactarte, necesitamos unos datos. ¿Me podrías decir tu primer nombre?',
      ask_email: '¡Genial! ¿Me podrías proporcionar un correo al que te podamos contactar?',
      invalid_email: 'Parece que el correo no es válido. ¿Podrías verificarlo y enviarlo nuevamente?',
      ask_phone: '¡Perfecto! Y por último, ¿me podrías dejar tu número de teléfono (mejor si es por whatsapp)? (Prometemos no enviar NADA de SPAM).',
      thank_you: '¡Gracias! Un asesor se pondrá en contacto contigo pronto. ¿Hay algo más en lo que pueda ayudarte?',
      continue_chat: 'Entiendo. ¿Hay algo más en lo que pueda ayudarte?',
      not_retail:
        'Somos Alora, un estudio de desarrollo digital. No vendemos productos físicos ni gestionamos pedidos. Te sugerimos contactar al comercio donde realizaste la compra. ¿Podemos ayudarte con algo relacionado a desarrollo o estrategia digital?',
      career_reply:
        `¡Gracias por tu interés en Alora! Gestionamos las postulaciones por email. Enviá tu CV o portfolio a ${CAREERS_EMAIL} con el asunto "Quiero colaborar con Alora" y te responderemos cuando lo revisemos.`,
      error: 'Lo siento, no puedo responder en este momento.'
    },
    en: {
      welcome: 'Hi! I\'m Alora\'s virtual assistant. We\'re a digital product development studio. How can I help you today?',
      offer_contact: 'Would you like a specialized advisor to contact you for more details about your project?',
      ask_name: 'Perfect! So that an Alora advisor can contact you, we need some information. Could you tell me your first name?',
      ask_email: 'Great! Could you provide an email where we can contact you?',
      invalid_email: 'It seems the email is not valid. Could you verify and send it again?',
      ask_phone: 'Perfect! And finally, could you leave your phone number (better if it\'s WhatsApp)? (We promise NO SPAM).',
      thank_you: 'Thank you! An advisor will contact you soon. Is there anything else I can help you with?',
      continue_chat: 'I understand. Is there anything else I can help you with?',
      not_retail:
        'We\'re Alora, a digital product development studio. We don\'t sell physical products or manage retail orders. Please reach out to the store or marketplace where you purchased the item. Can I help you with anything related to digital projects instead?',
      career_reply:
        `Thanks for your interest in Alora! We review applications via email. Please send your CV or portfolio to ${CAREERS_EMAIL} with the subject "Join Alora" and we\'ll get back to you soon.`,
      error: 'Sorry, I cannot respond at the moment.'
    }
  };

  const AFFIRMATIVE_WORDS = {
    es: ['si', 'sí', 'dale', 'ok', 'okay', 'claro'],
    en: ['yes', 'yeah', 'sure', 'ok', 'okay', 'alright']
  };

  const NEGATIVE_WORDS = {
    es: ['no', 'nop', 'despues', 'después', 'mas tarde', 'más tarde', 'no gracias', 'no gracias estoy bien'],
    en: ['no', 'not really', 'maybe later', 'later', 'not now', 'no thanks', 'im good']
  };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState('chat');
  const [hasOfferedContact, setHasOfferedContact] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [affirmativeStreak, setAffirmativeStreak] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ from: 'bot', text: messages_by_lang[locale].welcome }]);
  }, [locale]);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Trackear cuando se abre el chatbot
    if (newState) {
      // ReactGA.event({
      //   category: 'Chatbot',
      //   action: 'Chatbot Abierto',
      //   label: 'Usuario abrió el chatbot'
      // });
    }
  };

  // Detectar y enviar leads por email
  const detectAndSendLead = (userMessage, conversationSnapshot = messages) => {
    // Detectar números de teléfono (formato argentino y general)
    const phoneRegex = /(\+?54\s?9?\s?)?(\d{2,4})[\s-]?(\d{6,8})|(\d{10,})/g;
    // Detectar emails
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    const phones = userMessage.match(phoneRegex);
    const emails = userMessage.match(emailRegex);
    
    if (phones || emails) {
      const conversationHistory = formatConversationForEmail(conversationSnapshot);
      
      // Enviar email con EmailJS
      const templateParams = {
        lead_contact: [
          phones ? `Teléfono(s): ${phones.join(', ')}` : null,
          emails ? `Email(s): ${emails.join(', ')}` : null
        ].filter(Boolean).join('\n'),
        lead_type: phones && emails ? 'Teléfono y Email' : (phones ? 'Teléfono' : 'Email'),
        conversation: conversationHistory,
        user_message: userMessage,
        date: new Date().toLocaleString('es-AR')
      };
      
      emailjs.send(
        'service_6r3ee9k',
        'template_chatbot_lead', // Necesitarás crear este template
        templateParams,
        'CwpWaIXVC5Pdb4Kae'
      ).then(
        (response) => {
          console.log('Lead enviado exitosamente', response.status);
        },
        (error) => {
          console.error('Error al enviar lead:', error);
        }
      );
    }
  };

  // Scroll automático al final cuando hay nuevos mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Abrir automáticamente después de 3 segundos
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const runChatConversation = async (newMessagesSnapshot, userText) => {
    detectAndSendLead(userText, newMessagesSnapshot);
    setIsSending(true);
    setMessages(newMessagesSnapshot);
    setInputValue('');
    setIsTyping(true);

    try {
      const botResponse = await chatRequestWithRetry(newMessagesSnapshot, 0);
      setIsTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
      handleContactOffer(botResponse, userText, newMessagesSnapshot.length);
    } catch (error) {
      console.error('Error al contactar la API del chat:', error);
      const fallback = locale === 'en'
        ? `Sorry, I had a technical issue. You can reach us via WhatsApp ${CONTACT_INFO.whatsapp} or email ${CONTACT_INFO.email}.`
        : `Tuvimos un problema técnico. Podés escribirnos por WhatsApp ${CONTACT_INFO.whatsapp} o al correo ${CONTACT_INFO.email}.`;
      setMessages(prev => [...prev, { from: 'bot', text: fallback }]);
      setIsTyping(false);
    } finally {
      setIsSending(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;
    if ((step === 'chat' || step === 'pre_contact') && isSending) return;

    const userMessage = { from: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];
    const normalizedInput = normalizeText(inputValue);
    const specialIntent = detectSpecialIntent(normalizedInput);
    const localeAffirmatives = AFFIRMATIVE_WORDS[locale];
    const localeNegatives = NEGATIVE_WORDS[locale];
    const isPureAffirmative = localeAffirmatives.includes(normalizedInput);

    if (specialIntent && (step === 'chat' || step === 'pre_contact')) {
      const responseKey = specialIntent === 'career' ? 'career_reply' : 'not_retail';
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale][responseKey] }]);
      setInputValue('');
      setAffirmativeStreak(0);
      setStep('chat');
      if (specialIntent === 'career') {
        setHasOfferedContact(true);
      }
      return;
    }

    if (step === 'chat') {
      if (isPureAffirmative) {
        const streak = affirmativeStreak + 1;
        setAffirmativeStreak(streak);

        if (streak >= 2) {
          setHasOfferedContact(true);
          setStep('pre_contact');
          setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].offer_contact }]);
          setInputValue('');
          return;
        }
      } else {
        setAffirmativeStreak(0);
      }
      await runChatConversation(newMessages, userMessage.text);
    } else if (step === 'pre_contact') {
      // Si el usuario responde afirmativamente
      const negativeWords = localeNegatives;

      if (localeAffirmatives.some(word => normalizedInput.includes(word))) {
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_name }]);
        setStep('name');
      } else if (negativeWords.some(word => normalizedInput.includes(word))) {
        // Si dice que no, volvemos al chat normal
        setStep('chat');
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].continue_chat }]);
        setAffirmativeStreak(0);
      } else {
        // Si responde con más contexto, seguimos la conversación normal
        setStep('chat');
        await runChatConversation(newMessages, userMessage.text);
      }
    } else if (step === 'name') {
      setAffirmativeStreak(0);
      setUserData(prev => ({ ...prev, name: inputValue }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_email }]);
      setStep('email');
    } else if (step === 'email') {
      const trimmedEmail = inputValue.trim();
      if (!validateEmail(trimmedEmail)) {
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].invalid_email }]);
        return;
      }
      setAffirmativeStreak(0);
      setUserData(prev => ({ ...prev, email: trimmedEmail }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_phone }]);
      setStep('phone');
    } else if (step === 'phone') {
      setAffirmativeStreak(0);
      const updatedUserData = { ...userData, phone: inputValue };
      setUserData(updatedUserData);

      const conversationHistory = formatConversationForEmail(newMessages);

      // Enviar lead a Clay (via proxy server-side para evitar CORS)
      fetch('/api/clay-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: updatedUserData.name,
          email: updatedUserData.email,
          telefono: updatedUserData.phone,
          pais: '',
          consulta: conversationHistory,
          fecha_ingreso: new Date().toISOString(),
          fuente: 'chatbot',
        }),
      }).catch(() => {});

      // Enviar lead a Make para crear borrador en Gmail
      fetch('https://hook.us2.make.com/j5ybsgnp5mapyotxu57fsxcfufce8ktc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: updatedUserData.name,
          email: updatedUserData.email,
          telefono: updatedUserData.phone,
          pais: '',
          consulta: conversationHistory,
          fuente: 'chatbot',
        }),
      }).catch(() => {});

      const scheduleUrl = locale === 'en'
        ? 'https://www.globalalora.com/en/discovery-call'
        : 'https://www.globalalora.com/es/llamada-de-relevamiento';
      
      const thankYouMessage = locale === 'en'
        ? `Thanks ${updatedUserData.name || ''}! An advisor will contact you soon. If you'd like to speed things up, you can schedule a discovery call here: ${scheduleUrl}\n\nIs there anything else I can help you with?`
        : `¡Gracias ${updatedUserData.name || ''}! Un asesor se pondrá en contacto contigo pronto. Si querés agilizar el proceso, podés agendar una llamada de relevamiento aquí: ${scheduleUrl}\n\n¿Hay algo más en lo que pueda ayudarte?`;
      
      setMessages([...newMessages, { from: 'bot', text: thankYouMessage }]);
      setStep('chat');
    }
    setInputValue('');
  };

  const handleContactOffer = (botResponse, userMessageText, conversationLength) => {
    const responseLower = botResponse.toLowerCase();
    const userTextLower = (userMessageText || '').toLowerCase();
    const isErrorFallback = responseLower.includes('problema técnico') || responseLower.includes('technical issue');

    if (isErrorFallback || hasOfferedContact) return;

    const quoteKeywords = ['precio', 'presupuesto', 'costo', 'price', 'quote', 'budget'];
    const meetingKeywords = ['contacto', 'contact', 'reunión', 'reunion', 'meeting', 'llamar', 'llamada', 'call', 'whatsapp'];
    const wantsQuote = quoteKeywords.some(word => userTextLower.includes(word));
    const wantsMeeting = meetingKeywords.some(word => userTextLower.includes(word));

    if (wantsQuote || wantsMeeting) {
      setHasOfferedContact(true);
      setStep('name');
      setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].ask_name }]);
    } else if (conversationLength >= 4) {
      setHasOfferedContact(true);
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].offer_contact }]);
        setStep('pre_contact');
      }, 1000);
    }
  };

  const chatRequestWithRetry = async (payload, attempt = 0) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: payload.slice(-10),
          language: locale,
        }),
      });

      if (!response.ok) {
        throw new Error(`Respuesta inválida: ${response.status}`);
      }

      const botResponse = await response.text();
      if (!botResponse || !botResponse.trim()) {
        throw new Error('Respuesta vacía del bot');
      }

      return botResponse.trim();
    } catch (error) {
      if (attempt < MAX_CHAT_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
        return chatRequestWithRetry(payload, attempt + 1);
      }
      throw error;
    }
  };

  return (
    <>
      <motion.div 
        className="chatbot-fab" 
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-robot"></i>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <h3>{locale === 'en' ? 'Alora Assistant' : 'Asistente Alora'}</h3>
              <button onClick={toggleChat}>&times;</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.from}`}>
                  {msg.from === 'bot' ? renderMessageWithLinks(msg.text) : msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="message bot typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form className="chatbot-input" onSubmit={handleSendMessage}>
              <input 
                type="text" 
                placeholder={locale === 'en' ? 'Type your message...' : 'Escribe tu mensaje...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
