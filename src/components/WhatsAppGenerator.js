import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaLink, 
  FaCopy, 
  FaPhone, 
  FaRegSmile, 
  FaBold, 
  FaItalic, 
  FaStrikethrough, 
  FaCode,
  FaArrowRight
} from 'react-icons/fa';
import './WhatsAppGenerator.css';

const WhatsAppGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+54');
  const [message, setMessage] = useState('');
  const [customLink, setCustomLink] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [view, setView] = useState('mobile'); // 'mobile' or 'link'

  useEffect(() => {
    const cleanNumber = (countryCode + phoneNumber).replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    if (cleanNumber) {
      setGeneratedLink(`https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}`);
    } else {
      setGeneratedLink('');
    }
  }, [phoneNumber, countryCode, message]);

  const handleCopy = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const addFormatting = (type) => {
    let tag = '';
    switch(type) {
      case 'bold': tag = '*'; break;
      case 'italic': tag = '_'; break;
      case 'strike': tag = '~'; break;
      case 'code': tag = '```'; break;
      default: tag = '';
    }
    setMessage(prev => prev + tag + tag);
  };

  return (
    <div className="wa-generator-container">
      <div className="wa-generator-card">
        {/* Left Side: Form */}
        <div className="wa-generator-form">
          <h1 className="wa-title">
            Generá <span className="highlight">tu Link de WhatsApp</span>
          </h1>
          <p className="wa-subtitle">Escribe tu número de teléfono de WhatsApp</p>

          <div className="wa-input-row">
            <div className="wa-input-group country-code">
              <label>Código de marcación</label>
              <div className="wa-select-wrapper">
                <span className="flag">🇦🇷</span>
                <select 
                  value={countryCode} 
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+54">+54</option>
                  <option value="+1">+1</option>
                  <option value="+34">+34</option>
                  <option value="+52">+52</option>
                  <option value="+57">+57</option>
                  <option value="+56">+56</option>
                </select>
              </div>
            </div>
            <div className="wa-input-group phone-number">
              <label>Número de teléfono</label>
              <input 
                type="tel" 
                placeholder="Número de teléfono" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="wa-message-section">
            <label>Mensaje de WhatsApp</label>
            <div className="wa-editor">
              <div className="wa-editor-toolbar">
                <button onClick={() => addFormatting('bold')} title="Negrita"><FaBold /></button>
                <button onClick={() => addFormatting('italic')} title="Cursiva"><FaItalic /></button>
                <button onClick={() => addFormatting('strike')} title="Tachado"><FaStrikethrough /></button>
                <button onClick={() => addFormatting('code')} title="Código"><FaCode /></button>
              </div>
              <textarea 
                placeholder="Escribe un mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="wa-editor-footer">
                <button className="wa-emoji-btn">
                  Añadir Emoji <FaRegSmile />
                </button>
              </div>
            </div>
          </div>

          <div className="wa-custom-link">
            <label>Link Personalizado (opcional)</label>
            <p className="wa-hint">Los links personalizados te permiten añadir tu marca a tu link como w.app/TuEmpresa</p>
            <div className="wa-custom-input">
              <span className="wa-prefix">w.app/</span>
              <input 
                type="text" 
                placeholder="TuEmpresa"
                value={customLink}
                onChange={(e) => setCustomLink(e.target.value)}
              />
            </div>
          </div>

          <button className="wa-generate-btn primary" onClick={handleCopy}>
             <FaWhatsapp /> Generá Link de WhatsApp
          </button>
        </div>

        {/* Right Side: Preview */}
        <div className="wa-generator-preview">
          <div className="wa-preview-tabs">
            <button 
              className={view === 'mobile' ? 'active' : ''} 
              onClick={() => setView('mobile')}
            >
              <FaPhone className="icon-sm" /> Mensaje
            </button>
            <button 
              className={view === 'link' ? 'active' : ''} 
              onClick={() => setView('link')}
            >
              <FaLink className="icon-sm" /> Copiar Link
            </button>
          </div>

          <div className="wa-phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="wa-chat-header">
                  <div className="wa-chat-user">
                    <div className="wa-avatar">
                      <FaWhatsapp />
                    </div>
                    <div className="wa-user-info">
                      <span className="wa-user-name">{countryCode} {phoneNumber || '...'}</span>
                      <span className="wa-user-status">online</span>
                    </div>
                  </div>
                  <div className="wa-chat-actions">
                    <FaPhone />
                  </div>
                </div>
                
                <div className="wa-chat-body">
                  <div className="wa-chat-bg"></div>
                  {message && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="wa-message-bubble"
                    >
                      <p>{message}</p>
                      <span className="wa-message-time">
                        {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
                        <span className="wa-checks">✓✓</span>
                      </span>
                    </motion.div>
                  )}
                  {!message && (
                    <div className="wa-message-placeholder">
                      Escribe un mensaje...
                    </div>
                  )}
                </div>

                <div className="wa-chat-footer">
                  <div className="wa-footer-input">
                    <FaRegSmile />
                    <span>Escribe un mensaje</span>
                    <div className="wa-footer-actions">
                      <FaLink />
                      <div className="wa-send-btn">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="wa-generate-btn secondary" onClick={handleCopy}>
            {isCopied ? <><FaCopy /> ¡Copiado!</> : <><FaWhatsapp /> Generá Link de WhatsApp</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppGenerator;
