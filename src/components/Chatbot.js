import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';
import { format, parseISO, addMinutes, isAfter, isBefore, startOfDay, addDays } from 'date-fns';

const Chatbot = () => {
  const { locale } = useLanguage();

  const messages_by_lang = {
    es: {
      welcome: '¡Hola! Soy el asistente virtual de Alora. ¿En qué puedo ayudarte hoy?',
      offer_contact: '¿Te gustaría que un asesor especializado te contacte para darte más detalles sobre tu proyecto?',
      ask_project_details: '¡Perfecto! Para poder darte una cotización precisa, necesito conocer algunos detalles de tu proyecto. ¿Qué tipo de proyecto tienes en mente? (Ej: landing page, e-commerce, app web, blog, etc.)',
      ask_project_type: '¿Qué tipo de proyecto tienes en mente? (Ej: landing page, e-commerce, app web, blog, etc.)',
      ask_project_features: '¿Qué funcionalidades específicas necesitas? (Ej: formulario de contacto, integración WhatsApp, carrito de compras, etc.)',
      ask_project_timeline: '¿Tienes algún plazo estimado para tener el proyecto listo?',
      suggest_meeting: 'Perfecto, entiendo mejor tu proyecto. ¿Te gustaría agendar una llamada de 20 minutos para detallar la propuesta y presupuesto?',
      ask_name: '¡Perfecto! Para que un asesor de Alora pueda contactarte, necesitamos unos datos. ¿Me podrías decir tu primer nombre?',
      ask_email: '¡Genial! ¿Me podrías proporcionar un correo al que te podamos contactar?',
      invalid_email: 'Parece que el correo no es válido. ¿Podrías verificarlo y enviarlo nuevamente?',
      ask_phone: '¡Perfecto! Y por último, ¿me podrías dejar tu número de teléfono (mejor si es por whatsapp)? (Prometemos no enviar NADA de SPAM).',
      ask_datetime: '¿Qué día y hora te vendría bien? (Ej: mañana 11am, viernes 3pm)',
      checking_availability: 'Un momento, estoy verificando disponibilidad...',
      finding_available_slot: 'Un momento, estoy buscando el próximo horario disponible...',
      meeting_confirmed: '¡Perfecto! Tu reunión está agendada. Te envié una invitación al calendario.',
      meeting_not_available: 'Ese horario no está disponible. ¿Te gustaría probar con otra fecha u hora?',
      ask_meeting_type: '¿Prefieres llamada por WhatsApp o videollamada por Meet?',
      found_available_slot: '¡Perfecto! Tengo un horario disponible. ¿Te funciona el [fecha] a las [hora]?',
      thank_you: '¡Gracias! Un asesor se pondrá en contacto contigo pronto. ¿Hay algo más en lo que pueda ayudarte?',
      continue_chat: 'Entiendo. ¿Hay algo más en lo que pueda ayudarte?',
      error: 'Lo siento, no puedo responder en este momento.'
    },
    en: {
      welcome: 'Hi! I\'m Alora\'s virtual assistant. How can I help you today?',
      offer_contact: 'Would you like a specialized advisor to contact you for more details about your project?',
      ask_project_details: 'Perfect! To give you an accurate quote, I need to know some details about your project. What type of project do you have in mind? (E.g: landing page, e-commerce, web app, blog, etc.)',
      ask_project_type: 'What type of project do you have in mind? (E.g: landing page, e-commerce, web app, blog, etc.)',
      ask_project_features: 'What specific features do you need? (E.g: contact form, WhatsApp integration, shopping cart, etc.)',
      ask_project_timeline: 'Do you have an estimated deadline for the project?',
      suggest_meeting: 'Perfect, I understand your project better. Would you like to schedule a 20-minute call to detail the proposal and pricing?',
      ask_name: 'Perfect! So that an Alora advisor can contact you, we need some information. Could you tell me your first name?',
      ask_email: 'Great! Could you provide an email where we can contact you?',
      invalid_email: 'It seems the email is not valid. Could you verify and send it again?',
      ask_phone: 'Perfect! And finally, could you leave your phone number (better if it\'s WhatsApp)? (We promise NO SPAM).',
      ask_datetime: 'What day and time works for you? (E.g: tomorrow 11am, friday 3pm)',
      checking_availability: 'One moment, I\'m checking availability...',
      finding_available_slot: 'One moment, I\'m looking for the next available time...',
      meeting_confirmed: 'Perfect! Your meeting is scheduled. I\'ve sent you a calendar invitation.',
      meeting_not_available: 'That time is not available. Would you like to try another date or time?',
      ask_meeting_type: 'Do you prefer a WhatsApp call or video call via Meet?',
      found_available_slot: 'Perfect! I have an available time. Does [date] at [time] work for you?',
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
  const [userData, setUserData] = useState({ name: '', email: '', phone: '', meetingType: '', preferredTime: '', proposedSlot: null, projectType: '', projectFeatures: '', projectTimeline: '' });
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

  // Función para parsear fecha/hora del usuario
  const parseDateTime = (text) => {
    const now = new Date();
    const textLower = text.toLowerCase();
    
    // Mapear palabras clave a fechas
    if (textLower.includes('mañana') || textLower.includes('tomorrow')) {
      return addDays(now, 1);
    }
    if (textLower.includes('hoy') || textLower.includes('today')) {
      return now;
    }
    if (textLower.includes('viernes') || textLower.includes('friday')) {
      return getNextDayOfWeek(now, 5); // Viernes = 5
    }
    if (textLower.includes('lunes') || textLower.includes('monday')) {
      return getNextDayOfWeek(now, 1); // Lunes = 1
    }
    if (textLower.includes('martes') || textLower.includes('tuesday')) {
      return getNextDayOfWeek(now, 2);
    }
    if (textLower.includes('miércoles') || textLower.includes('wednesday')) {
      return getNextDayOfWeek(now, 3);
    }
    if (textLower.includes('jueves') || textLower.includes('thursday')) {
      return getNextDayOfWeek(now, 4);
    }
    
    // Default: mañana
    return addDays(now, 1);
  };

  // Función para obtener el próximo día de la semana
  const getNextDayOfWeek = (date, dayOfWeek) => {
    const result = new Date(date);
    const currentDay = result.getDay();
    const daysUntilNext = dayOfWeek > currentDay ? dayOfWeek - currentDay : 7 - (currentDay - dayOfWeek);
    return addDays(result, daysUntilNext);
  };

  // Función para parsear hora del texto
  const parseTime = (text) => {
    const timeRegex = /(\d{1,2})\s*([ap]\.?m?|am|pm)?/i;
    const match = text.match(timeRegex);
    
    if (match) {
      let hours = parseInt(match[1]);
      const period = match[2]?.toLowerCase();
      
      if (period && period.includes('p') && hours < 12) {
        hours += 12;
      }
      if (period && period.includes('a') && hours === 12) {
        hours = 0;
      }
      
      return hours;
    }
    
    return null;
  };

  // Función para buscar automáticamente el próximo horario disponible
  const findNextAvailableSlot = async () => {
    try {
      setIsTyping(true);
      setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].finding_available_slot }]);
      
      // Llamar a la API para buscar el próximo slot disponible
      const response = await fetch('/api/calendar/find-next-slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          duration: 20,
          searchDays: 7, // Buscar en los próximos 7 días
          businessHours: {
            start: 9, // 9am
            end: 18 // 6pm
          }
        })
      });
      
      const result = await response.json();
      
      if (result.success && result.availableSlot) {
        const slotDate = new Date(result.availableSlot);
        const formattedDate = format(slotDate, 'PPP');
        const formattedTime = format(slotDate, 'p');
        
        // Guardar el slot encontrado para usarlo después
        setUserData(prev => ({ ...prev, proposedSlot: result.availableSlot }));
        
        setMessages(prev => [...prev, { 
          from: 'bot', 
          text: messages_by_lang[locale].found_available_slot
            .replace('[fecha]', formattedDate)
            .replace('[hora]', formattedTime)
        }]);
        
        setStep('confirm_auto_slot');
      } else {
        setMessages(prev => [...prev, { 
          from: 'bot', 
          text: 'No encontré horarios disponibles en los próximos días. ¿Te gustaría que te contacte por email para coordinar?' 
        }]);
        setStep('ask_email');
      }
      
    } catch (error) {
      console.error('Error finding available slot:', error);
      setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].error }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Función para verificar disponibilidad y crear reunión
  const checkAvailabilityAndCreateMeeting = async (preferredDate, preferredTime, meetingType) => {
    try {
      setIsTyping(true);
      setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].checking_availability }]);
      
      // Combinar fecha y hora
      const hours = parseTime(preferredTime) || 11; // Default 11am si no se especifica
      const meetingDate = new Date(preferredDate);
      meetingDate.setHours(hours, 0, 0, 0);
      
      // Llamar a la API del backend
      const response = await fetch('/api/calendar/check-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startTime: meetingDate.toISOString(),
          duration: 20, // 20 minutos
          meetingType,
          userData: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone
          }
        })
      });
      
      const result = await response.json();
      
      if (result.available) {
        // Crear la reunión
        const createResponse = await fetch('/api/calendar/create-meeting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            summary: `Reunión Alora - ${userData.name}`,
            description: `Reunión de 20 minutos para discutir el proyecto de ${userData.name}. Contacto: ${userData.email}, ${userData.phone}`,
            startTime: meetingDate.toISOString(),
            duration: 20,
            attendeeEmail: userData.email,
            meetingType
          })
        });
        
        const meetingResult = await createResponse.json();
        
        if (meetingResult.success) {
          setMessages(prev => [...prev, { 
            from: 'bot', 
            text: `${messages_by_lang[locale].meeting_confirmed}\n\n📅 ${format(meetingDate, 'PPP')} a las ${format(meetingDate, 'p')}\n🔗 ${meetingResult.meetingLink || 'Te envié la invitación por email'}`
          }]);
          
          // Trackear evento de conversión
          ReactGA.event({
            category: 'Chatbot',
            action: 'Reunión Agendada',
            label: `Reunión agendada para ${userData.email}`
          });
        }
      } else {
        // Ofrecer alternativas
        const alternatives = result.alternatives || [
          addMinutes(meetingDate, 30),
          addMinutes(meetingDate, 60),
          addDays(meetingDate, 1)
        ];
        
        const alternativesText = alternatives
          .slice(0, 3)
          .map(alt => format(alt, 'PPP p'))
          .join('\\n• ');
        
        setMessages(prev => [...prev, { 
          from: 'bot', 
          text: `${messages_by_lang[locale].meeting_not_available}\\n\\n¿Alguno de estos horarios te funciona?\\n• ${alternativesText}`
        }]);
        setStep('ask_datetime');
      }
      
    } catch (error) {
      console.error('Error checking availability:', error);
      setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].error }]);
    } finally {
      setIsTyping(false);
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

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userMessage = { from: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];
    
    if (step === 'chat') {
      // Primero enviamos el mensaje a la API
      setMessages(newMessages);
      setInputValue('');
      setIsTyping(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            messages: newMessages.slice(-10),
            language: locale
          }), 
        });

        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let botResponse = '';

        // Añadimos un mensaje de bot vacío que se irá llenando
        setMessages(prev => [...prev, { from: 'bot', text: '' }]);
        setIsTyping(false);

        // Leer el stream de datos
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          botResponse += chunk;
          
          setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            lastMessage.text = botResponse;
            return [...prev.slice(0, -1), lastMessage];
          });
        }

        // Si detectamos palabras clave de precio/presupuesto, primero hacemos preguntas del proyecto
        // Pero NO si es un mensaje de error/fallback (contiene "problema técnico" o "technical issue")
        const isErrorFallback = botResponse.toLowerCase().includes('problema técnico') || 
                                botResponse.toLowerCase().includes('technical issue');
        
        const wantsQuote = botResponse.toLowerCase().includes('precio') || 
                          botResponse.toLowerCase().includes('presupuesto') || 
                          botResponse.toLowerCase().includes('costo') ||
                          botResponse.toLowerCase().includes('price') ||
                          botResponse.toLowerCase().includes('quote');
        
if (!isErrorFallback && wantsQuote && !hasOfferedContact) {
          setHasOfferedContact(true);
          // Primero hacer preguntas del proyecto
          setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].ask_project_details }]);
          setStep('project_info');
        } else if (!isErrorFallback && messages.length >= 4 && !hasOfferedContact) {
          setHasOfferedContact(true);
          setTimeout(() => {
            setMessages(prev => [...prev, { 
              from: 'bot', 
              text: messages_by_lang[locale].offer_contact
            }]);
            setStep('pre_contact');
          }, 1000);
        }

      } catch (error) {
        console.error('Error al contactar la API del chat:', error);
        setIsTyping(false);
        setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].error }]);
      }
    } else if (step === 'project_info') {
      // Primera pregunta: tipo de proyecto
      setUserData(prev => ({ ...prev, projectType: inputValue }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_project_features }]);
      setStep('project_features');
    } else if (step === 'project_features') {
      // Segunda pregunta: funcionalidades
      setUserData(prev => ({ ...prev, projectFeatures: inputValue }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_project_timeline }]);
      setStep('project_timeline');
    } else if (step === 'project_timeline') {
      // Tercera pregunta: timeline
      setUserData(prev => ({ ...prev, projectTimeline: inputValue }));
      
      // Ahora sí ofrecer la reunión con contexto del proyecto
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: messages_by_lang[locale].suggest_meeting }]);
        setStep('suggest_meeting');
      }, 1000);
    } else if (step === 'suggest_meeting') {
      // Si el usuario responde afirmativamente a agendar reunión
      const affirmativeWords = locale === 'en' ?
        ['yes', 'yeah', 'sure', 'ok', 'okay', 'alright', 'fine', 'agree', 'want', 'like', 'sounds good', 'great', 'perfect', 'definitely', 'absolutely', 'of course'] :
        ['si', 'sí', 'ok', 'dale', 'bueno', 'quiero', 'me gustaría', 'de acuerdo', 'perfecto', 'genial', 'claro', 'por supuesto', 'definitivamente', 'absolutamente', 'suena bien', 'excelente'];

      const negativeWords = locale === 'en' ?
        ['no', 'not', 'nah', 'dont', "don't", 'cannot', "can't", 'unable', 'busy', 'later', 'another time'] :
        ['no', 'nop', 'no gracias', 'no puedo', 'estoy ocupado', 'después', 'otra vez', 'no me interesa', 'más tarde', 'no quiero'];

      const timeSpecificWords = locale === 'en' ?
        ['tomorrow', 'today', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'am', 'pm', 'oclock', "o'clock", 'morning', 'afternoon', 'evening'] :
        ['mañana', 'hoy', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'am', 'pm', 'de la mañana', 'de la tarde', 'de la noche'];

      const userText = inputValue.toLowerCase().trim();
      
      if (affirmativeWords.some(word => userText.includes(word)) && !timeSpecificWords.some(word => userText.includes(word))) {
        // Si responde afirmativamente SIN especificar tiempo → búsqueda automática
        findNextAvailableSlot();
      } else if (timeSpecificWords.some(word => userText.includes(word))) {
        // Si menciona tiempo específico → flujo manual
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_name }]);
        setUserData(prev => ({ ...prev, preferredTime: inputValue }));
        setStep('name');
      } else if (negativeWords.some(word => userText.includes(word))) {
        // Si responde negativamente → ofrecer contacto tradicional
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].offer_contact }]);
        setStep('pre_contact');
      } else {
        // Respuesta ambigua → pedir clarificación
        const clarificationMessage = locale === 'en' ?
          'I\'m not sure if you want to schedule automatically or prefer a specific time. Do you want me to find the next available time, or do you have a specific day/time in mind?' :
          'No entiendo si quieres agendar automáticamente o prefieres un horario específico. ¿Quieres que busque el próximo horario disponible o tienes algún día y hora en mente?';
        
        setMessages([...newMessages, { from: 'bot', text: clarificationMessage }]);
        setStep('clarify_meeting');
      }
    } else if (step === 'clarify_meeting') {
      // Manejar respuesta de clarificación
      const userText = inputValue.toLowerCase().trim();
      
      const autoWords = locale === 'en' ?
        ['automatic', 'automaticamente', 'find', 'search', 'next', 'available', 'you choose', 'whatever works', 'any time'] :
        ['automático', 'automáticamente', 'busca', 'busca tú', 'siguiente', 'disponible', 'tú elige', 'lo que funcione', 'cualquier hora'];
      
      const specificWords = locale === 'en' ?
        ['specific', 'particular', 'i want', 'i prefer', 'i have', 'i need', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'tomorrow', 'today'] :
        ['específico', 'particular', 'quiero', 'prefiero', 'tengo', 'necesito', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'mañana', 'hoy'];
      
      if (autoWords.some(word => userText.includes(word))) {
        // Quiere búsqueda automática
        findNextAvailableSlot();
      } else if (specificWords.some(word => userText.includes(word))) {
        // Quiere especificar tiempo
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_name }]);
        setUserData(prev => ({ ...prev, preferredTime: inputValue }));
        setStep('name');
      } else {
        // Sigue ambiguo, ofrecer opciones directas
        const optionsMessage = locale === 'en' ?
          'Please choose:\\n1. Type "auto" for me to find the next available time\\n2. Type a specific day and time (like "tomorrow 3pm")\\n3. Type "no" if you prefer traditional contact' :
          'Por favor elegí:\\n1. Escribí "auto" para que busque el próximo horario disponible\\n2. Escribí un día y hora específicos (como "mañana 3pm")\\n3. Escribí "no" si preferís contacto tradicional';
        
        setMessages([...newMessages, { from: 'bot', text: optionsMessage }]);
      }
    } else if (step === 'confirm_auto_slot') {
      // Confirmación del horario automático
      const affirmativeWords = locale === 'en' ?
        ['yes', 'yeah', 'sure', 'ok', 'okay', 'alright', 'fine', 'perfect', 'great', 'sounds good', 'excellent', 'awesome', 'works', 'good', 'yep', 'yup'] :
        ['si', 'sí', 'ok', 'dale', 'bueno', 'perfecto', 'genial', 'me funciona', 'excelente', 'awesome', 'funciona', 'bien', 'dale', 'claro', 'por supuesto'];

      const negativeWords = locale === 'en' ?
        ['no', 'not', 'nah', 'doesnt', "doesn't", 'doesnt work', "doesn't work", 'bad', 'cannot', "can't", 'different', 'another', 'change'] :
        ['no', 'nop', 'no funciona', 'no puedo', 'malo', 'cambiar', 'otro', 'diferente', 'no me sirve', 'no puedo'];

      const userText = inputValue.toLowerCase().trim();
      
      if (affirmativeWords.some(word => userText.includes(word))) {
        // Si confirma, pedir email para agendar
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_email }]);
        setStep('email_for_auto_slot');
      } else if (negativeWords.some(word => userText.includes(word))) {
        // Si no le funciona, ofrecer alternativas o pedir que especifique
        setMessages([...newMessages, { 
          from: 'bot', 
          text: locale === 'en' ?
            'No problem! Would you like me to find another time, or do you have a specific day/time in mind?' :
            '¡Sin problema! ¿Quieres que busque otro horario o tienes algún día y hora específicos en mente?'
        }]);
        setStep('ask_datetime');
      } else {
        // Respuesta ambigua
        const clarificationMessage = locale === 'en' ?
          'Please confirm:\n1. "yes" - book this time\n2. "no" - find another time\n3. Type a specific time you prefer' :
          'Por favor confirmá:\n1. "sí" - reservar este horario\n2. "no" - buscar otro horario\n3. Escribí un horario específico que prefieras';
        
        setMessages([...newMessages, { from: 'bot', text: clarificationMessage }]);
      }
    } else if (step === 'email_for_auto_slot') {
      // Validar email para el slot automático
      if (!validateEmail(inputValue)) {
        setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].invalid_email }]);
        return;
      }
      
      setUserData(prev => ({ ...prev, email: inputValue }));
      
      // Crear la reunión con el slot propuesto
      const slotDate = new Date(userData.proposedSlot);
      await checkAvailabilityAndCreateMeeting(slotDate, '', 'whatsapp');
      setStep('chat');
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
      setUserData(prev => ({ ...prev, phone: inputValue }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_meeting_type }]);
      setStep('meeting_type');
    } else if (step === 'meeting_type') {
      const meetingType = inputValue.toLowerCase();
      let type = '';
      
      if (meetingType.includes('whatsapp') || meetingType.includes('teléfono') || meetingType.includes('phone')) {
        type = 'whatsapp';
      } else if (meetingType.includes('meet') || meetingType.includes('video') || meetingType.includes('zoom')) {
        type = 'video';
      } else {
        type = 'whatsapp'; // Default
      }
      
      setUserData(prev => ({ ...prev, meetingType: type }));
      setMessages([...newMessages, { from: 'bot', text: messages_by_lang[locale].ask_datetime }]);
      setStep('ask_datetime');
    } else if (step === 'ask_datetime') {
      // Parsear fecha y hora del usuario
      const preferredDate = parseDateTime(inputValue);
      const preferredTime = inputValue;
      
      // Preparar templateParams para EmailJS
      const templateParams = {
        lead_name: userData.name || 'Sin nombre',
        lead_email: userData.email || 'Sin email',
        lead_phone: userData.phone || 'Sin teléfono',
        project_type: userData.projectType || 'Sin especificar',
        project_features: userData.projectFeatures || 'Sin especificar',
        project_timeline: userData.projectTimeline || 'Sin especificar',
        preferred_time: preferredTime,
        meeting_type: userData.meetingType || 'No especificado',
        conversation: messages.map(msg => `${msg.from}: ${msg.text}`).join('\n\n')
      };
      
      emailjs.send(
        'service_6r3ee9k',
        'template_obd8zn6', // Template existente
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
setUserData(prev => ({ ...prev, preferredTime: inputValue }));
      
      // Verificar disponibilidad y crear reunión
      await checkAvailabilityAndCreateMeeting(preferredDate, preferredTime, userData.meetingType);
      setStep('chat');
    }
    setInputValue('');
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
