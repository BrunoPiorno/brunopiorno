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

  const countries = [
    { code: '+54', name: 'Argentina' },
    { code: '+1', name: 'Estados Unidos' },
    { code: '+1', name: 'Canadá' },
    { code: '+34', name: 'España' },
    { code: '+52', name: 'México' },
    { code: '+57', name: 'Colombia' },
    { code: '+56', name: 'Chile' },
    { code: '+55', name: 'Brasil' },
    { code: '+58', name: 'Venezuela' },
    { code: '+51', name: 'Perú' },
    { code: '+595', name: 'Paraguay' },
    { code: '+598', name: 'Uruguay' },
    { code: '+591', name: 'Bolivia' },
    { code: '+593', name: 'Ecuador' },
    { code: '+507', name: 'Panamá' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+503', name: 'El Salvador' },
    { code: '+502', name: 'Guatemala' },
    { code: '+504', name: 'Honduras' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+1', name: 'República Dominicana' },
    { code: '+1', name: 'Puerto Rico' },
    { code: '+53', name: 'Cuba' },
    { code: '+44', name: 'Reino Unido' },
    { code: '+33', name: 'Francia' },
    { code: '+49', name: 'Alemania' },
    { code: '+39', name: 'Italia' },
    { code: '+31', name: 'Países Bajos' },
    { code: '+41', name: 'Suiza' },
    { code: '+43', name: 'Austria' },
    { code: '+46', name: 'Suecia' },
    { code: '+47', name: 'Noruega' },
    { code: '+45', name: 'Dinamarca' },
    { code: '+358', name: 'Finlandia' },
    { code: '+351', name: 'Portugal' },
    { code: '+352', name: 'Luxemburgo' },
    { code: '+32', name: 'Bélgica' },
    { code: '+48', name: 'Polonia' },
    { code: '+420',name: 'República Checa' },
    { code: '+36', name: 'Hungría' },
    { code: '+40', name: 'Rumanía' },
    { code: '+30', name: 'Grecia' },
    { code: '+90', name: 'Turquía' },
    { code: '+972', name: 'Israel' },
    { code: '+971', name: 'Emiratos Árabes Unidos' },
    { code: '+966', name: 'Arabia Saudita' },
    { code: '+20', name: 'Egipto' },
    { code: '+27', name: 'Sudáfrica' },
    { code: '+234', name: 'Nigeria' },
    { code: '+254', name: 'Kenia' },
    { code: '+255', name: 'Tanzania' },
    { code: '+256', name: 'Uganda' },
    { code: '+258', name: 'Mozambique' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabue' },
    { code: '+267', name: 'Botsuana' },
    { code: '+268', name: 'Esuatini' },
    { code: '+233', name: 'Ghana' },
    { code: '+225', name: 'Costa de Marfil' },
    { code: '+224', name: 'Burkina Faso' },
    { code: '+223', name: 'Mali' },
    { code: '+222', name: 'Mauritania' },
    { code: '+221', name: 'Senegal' },
    { code: '+220', name: 'Gambia' },
    { code: '+216', name: 'Túnez' },
    { code: '+213', name: 'Argelia' },
    { code: '+212', name: 'Marruecos' },
    { code: '+98', name: 'Irán' },
    { code: '+93', name: 'Afganistán' },
    { code: '+92', name: 'Pakistán' },
    { code: '+91', name: 'India' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+880', name: 'Bangladés' },
    { code: '+855', name: 'Camboya' },
    { code: '+84', name: 'Vietnam' },
    { code: '+66', name: 'Tailandia' },
    { code: '+65', name: 'Singapur' },
    { code: '+62', name: 'Indonesia' },
    { code: '+60', name: 'Malasia' },
    { code: '+63', name: 'Filipinas' },
    { code: '+81', name: 'Japón' },
    { code: '+82', name: 'Corea del Sur' },
    { code: '+86', name: 'China' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+853', name: 'Macao' },
    { code: '+886', name: 'Taiwán' },
    { code: '+61', name: 'Australia' },
    { code: '+64', name: 'Nueva Zelanda' },
    { code: '+675', name: 'Papúa Nueva Guinea' },
    { code: '+679', name: 'Fiyi' },
    { code: '+682', name: 'Islas Cook' },
    { code: '+685', name: 'Samoa' },
    { code: '+686', name: 'Kiribati' },
    { code: '+687', name: 'Nueva Caledonia' },
    { code: '+688', name: 'Tuvalu' },
    { code: '+689', name: 'Polinesia Francesa' },
    { code: '+690', name: 'Tokelau' },
    { code: '+691', name: 'Estados Federados de Micronesia' },
    { code: '+692', name: 'Islas Marshall' },
    { code: '+850', name: 'Corea del Norte' },
    { code: '+856', name: 'Laos' },
    { code: '+960', name: 'Maldivas' },
    { code: '+961', name: 'Líbano' },
    { code: '+962', name: 'Jordania' },
    { code: '+963', name: 'Siria' },
    { code: '+964', name: 'Irak' },
    { code: '+965', name: 'Kuwait' },
    { code: '+967', name: 'Yemen' },
    { code: '+968', name: 'Omán' },
    { code: '+970', name: 'Palestina' },
    { code: '+973', name: 'Baréin' },
    { code: '+974', name: 'Catar' },
    { code: '+975', name: 'Bután' },
    { code: '+976', name: 'Mongolia' },
    { code: '+977', name: 'Nepal' },
    { code: '+992', name: 'Tayikistán' },
    { code: '+993', name: 'Turkmenistán' },
    { code: '+994', name: 'Azerbaiyán' },
    { code: '+995', name: 'Georgia' },
    { code: '+996', name: 'Kirguistán' },
    { code: '+998', name: 'Uzbekistán' },
  ];

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
                <span className="flag">{countries.find(c => c.code === countryCode)?.flag || '🇦🇷'}</span>
                <select 
                  value={countryCode} 
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countries.map((country, index) => (
                    <option key={`${country.code}-${index}`} value={country.code}>
                      {country.flag} {country.name} ({country.code})
                    </option>
                  ))}
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
