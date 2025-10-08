import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! Soy el asistente virtual de Alora. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

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
  const detectAndSendLead = (userMessage) => {
    // Detectar números de teléfono (formato argentino y general)
    const phoneRegex = /(\+?54\s?9?\s?)?(\d{2,4})[\s-]?(\d{6,8})|(\d{10,})/g;
    // Detectar emails
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    const phones = userMessage.match(phoneRegex);
    const emails = userMessage.match(emailRegex);
    
    if (phones || emails) {
      // Preparar el historial de conversación
      const conversationHistory = messages
        .map(msg => `${msg.from === 'user' ? 'Cliente' : 'Bot'}: ${msg.text}`)
        .join('\n\n');
      
      // Enviar email con EmailJS
      const templateParams = {
        lead_contact: phones ? phones.join(', ') : emails.join(', '),
        lead_type: phones ? 'Teléfono' : 'Email',
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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userMessage = { from: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    
    // Detectar y enviar lead si hay contacto
    detectAndSendLead(inputValue);
    
    // Trackear mensaje enviado
    ReactGA.event({
      category: 'Chatbot',
      action: 'Mensaje Enviado',
      label: inputValue.substring(0, 100) // Primeros 100 caracteres del mensaje
    });
    
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Enviamos solo los mensajes relevantes para no exceder el límite de tokens
        body: JSON.stringify({ messages: newMessages.slice(-10) }), 
      });

      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Añadimos un mensaje de bot vacío que se irá llenando
      setMessages(prev => [...prev, { from: 'bot', text: '' }]);
      setIsTyping(false);

      // Leer el stream de datos
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          // Concatenamos el nuevo trozo de texto al último mensaje del bot
          lastMessage.text += chunk;
          return [...prev.slice(0, -1), lastMessage];
        });
      }

    } catch (error) {
      console.error('Error al contactar la API del chat:', error);
      setIsTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: 'Lo siento, no puedo responder en este momento.' }]);
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
              <h3>Asistente Alora</h3>
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
                placeholder="Escribe tu mensaje..."
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
