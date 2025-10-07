import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! Soy el asistente virtual de Alora. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

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
    if (inputValue.trim() === '') return;

    const userMessage = { from: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');

    // Añadimos un mensaje de bot vacío que se irá llenando
    setMessages(prev => [...prev, { from: 'bot', text: '' }]);

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
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        lastMessage.text = 'Lo siento, no puedo responder en este momento.';
        return [...prev.slice(0, -1), lastMessage];
      });
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
