import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = {
  whatsapp: '+541124629452',
  email: 'info@globalalora.com',
};

const MAX_CHAT_RETRIES = 2;

const formatConversationForEmail = (conversationArray = []) =>
  conversationArray
    .map(msg => `${msg.from === 'user' ? 'Cliente' : 'Bot'}: ${msg.text}`)
    .join('\n\n');

const Chatbot = () => {
  const { locale } = useLanguage();

  const messages_by_lang = {
    es: {
      welcome: '¡Hola! Soy el asistente virtual de Alora. ¿En qué puedo ayudarte hoy?',
      offer_contact: '¿Te gustaría que un asesor especializado te contacte para darte más detalles sobre tu proyecto?',
      ask_name: '¡Perfecto! Para que un asesor de Alora pueda contactarte, necesitamos unos datos. ¿Me podrías decir tu primer nombre?',
      ask_email: '¡Genial! ¿Me podrías proporcionar un correo al que te podamos contactar?',
      invalid_email: 'Parece que el correo no es válido. ¿Podrías verificarlo y enviarlo nuevamente?',
      ask_phone: '¡Perfecto! Y por último, ¿me podrías dejar tu número de teléfono (mejor si es por whatsapp)? (Prometemos no enviar NADA de SPAM).',
      thank_you: '¡Gracias! Un asesor se pondrá en contacto contigo pronto. ¿Hay algo más en lo que pueda ayudarte?',
      continue_chat: 'Entiendo. ¿Hay algo más en lo que pueda ayudarte?',
      error: 'Lo siento, no puedo responder en este momento.'
    },
    en: {
      welcome: 'Hi! I\'m Alora\'s virtual assistant. How can I help you today?',
      offer_contact: 'Would you like a specialized advisor to contact you for more details about your project?',
      ask_name: 'Perfect! So that an Alora advisor can contact you, we need some information. Could you tell me your first name?',
      ask_email: 'Great! Could you provide an email where we can contact you?',
      invalid_email: 'It seems the email is not valid. Could you verify and send it again?',
      ask_phone: 'Perfect! And finally, could you leave your phone number (better if it\'s WhatsApp)? (We promise NO SPAM).',
      thank_you: 'Thank you! An advisor will contact you soon. Is there anything else I can help you with?',
      continue_chat: 'I understand. Is there anything else I can help you with?',
      error: 'Sorry, I cannot respond at the moment.'
    }
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
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ from: 'bot', text: messages_by_lang[locale].welcome }]);
  }, [locale]);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Trackear cuando se abre el chatbot
    if (newState) {
      ReactGA.event({
        category: 'Chatbot',
        action: 'Chatbot Abierto',
        label: 'Usuario abrió el chatbot'
      });
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

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;
    if (step === 'chat' && isSending) return;

    const userMessage = { from: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];

    if (step === 'chat') {
      detectAndSendLead(inputValue, newMessages);
      setIsSending(true);
      setMessages(newMessages);
      setInputValue('');
      setIsTyping(true);

      try {
        const botResponse = await chatRequestWithRetry(newMessages, 0);
        setIsTyping(false);
        setMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
        handleContactOffer(botResponse, userMessage.text, newMessages.length);
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
    } else if (step === 'pre_contact') {
      // Si el usuario responde afirmativamente
      const affirmativeWords = locale === 'en' ?
        ['yes', 'yeah', 'sure', 'ok', 'okay', 'alright', 'fine'] :
        ['si', 'sí', 'ok', 'dale', 'bueno'];

      if (affirmativeWords.some(word => inputValue.toLowerCase().includes(word))) {
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_name }]);
        setStep('name');
      } else {
        // Si dice que no, volvemos al chat normal
        setStep('chat');
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].continue_chat }]);
      }
    } else if (step === 'name') {
      setUserData(prev => ({ ...prev, name: inputValue }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_email }]);
      setStep('email');
    } else if (step === 'email') {
      if (!validateEmail(inputValue)) {
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].invalid_email }]);
        return;
      }
      setUserData(prev => ({ ...prev, email: inputValue }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_phone }]);
      setStep('phone');
    } else if (step === 'phone') {
      const updatedUserData = { ...userData, phone: inputValue };
      setUserData(updatedUserData);

      const conversationHistory = formatConversationForEmail(newMessages);
      
      // Enviar email con EmailJS
      const templateParams = {
        lead_contact: `Nombre: ${updatedUserData.name}\nEmail: ${updatedUserData.email}\nTeléfono: ${updatedUserData.phone}`,
        lead_type: 'Formulario Completo',
        conversation: conversationHistory,
        user_message: inputValue,
        date: new Date().toLocaleString('es-AR')
      };
      
      emailjs.send(
        'service_6r3ee9k',
        'template_chatbot_lead',
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

      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].thank_you }]);
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
                  {msg.text}
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
