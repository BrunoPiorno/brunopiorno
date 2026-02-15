import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { t, locale } = useLanguage();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      country: '',
      phone: '',
      message: '',
      privacy_accepted: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState('');

  // Textos en español e inglés directamente (sin dependencias de traducción)
  const translations = {
    es: {
      name: 'Nombre',
      email: 'Email',
      country: 'País',
      phone: 'Teléfono o WhatsApp',
      message: 'Consulta',
      submit: '¡Quiero que me contacten!',
      sending: 'Enviando...',
      optional: '(Opcional)',
      privacyText: 'Acepto recibir información comercial y notificaciones, y he leído la',
      privacyPolicy: 'Política de Privacidad',
      successTitle: '¡Gracias!',
      successMessage: 'Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto pronto.',
      errorTitle: 'Error al enviar',
      errorMessage: 'Error al enviar el formulario. Por favor, intenta nuevamente.',
      disclaimer: 'Responderemos tu consulta en un máximo de 24 horas.',
      validation: {
        required: 'Este campo es requerido',
        invalidEmail: 'Por favor ingresa un email válido',
        minLength: 'El nombre debe tener al menos 2 caracteres',
        minMessage: 'La consulta debe tener al menos 10 caracteres',
        maxMessage: 'La consulta no puede exceder 2000 caracteres',
        privacyRequired: 'Debes aceptar la política de privacidad',
        invalidPhone: 'Por favor ingresa un teléfono válido'
      },
      placeholders: {
        name: 'Juan Pérez',
        email: 'tu@email.com',
        country: '- Selecciona tu país -',
        phone: '+54 9 11 1234-5678',
        message: 'Cuéntanos tu consulta o proyecto...'
      },
      charCountLabel: 'caracteres'
    },
    en: {
      name: 'Name',
      email: 'Email',
      country: 'Country',
      phone: 'Phone or WhatsApp',
      message: 'Message',
      submit: 'Contact me!',
      sending: 'Sending...',
      optional: '(Optional)',
      privacyText: 'I accept to receive commercial information and notifications, and I have read the',
      privacyPolicy: 'Privacy Policy',
      successTitle: 'Thank you!',
      successMessage: 'Your request has been sent successfully. We will contact you soon.',
      errorTitle: 'Error sending',
      errorMessage: 'Error sending the form. Please try again.',
      disclaimer: 'We will respond to your inquiry within 24 hours.',
      validation: {
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email',
        minLength: 'The name must have at least 2 characters',
        minMessage: 'The message must have at least 10 characters',
        maxMessage: 'The message cannot exceed 2000 characters',
        privacyRequired: 'You must accept the privacy policy',
        invalidPhone: 'Please enter a valid phone'
      },
      placeholders: {
        name: 'John Smith',
        email: 'you@example.com',
        country: '- Select your country -',
        phone: '+1 415 555 0000',
        message: 'Tell us about your project...'
      },
      charCountLabel: 'characters'
    }
  };

  // Selecciona el idioma (usa fallback a español si no existe)
  const lang = translations[locale] || translations.es;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails('');

    try {
      const formPayload = new URLSearchParams({
        'fields[name]': data.name,
        'fields[email]': data.email,
        'fields[country]': data.country || '',
        'fields[phone]': data.phone || '',
        'fields[consulta]': data.message,
        'ml-submit': '1'
      });

      const endpoint = locale === 'en'
        ? 'https://assets.mailerlite.com/jsonp/2070356/forms/178060668159657324/subscribe'
        : 'https://assets.mailerlite.com/jsonp/2070356/forms/177855257628378295/subscribe';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formPayload.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        
        setTimeout(() => {
          navigate(`/${locale}/thank-you`);
        }, 1500);
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
      setErrorDetails(error.message || lang.errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="contact-form" 
        noValidate
        aria-label={locale === 'en' ? 'Contact form' : 'Formulario de contacto'}
      >
        {/* Mensaje de éxito */}
        {submitStatus === 'success' && (
          <div className="form-success-message" role="alert">
            <span className="success-icon">✓</span>
            <div>
              <p className="success-title">{lang.successTitle}</p>
              <p className="success-text">{lang.successMessage}</p>
            </div>
          </div>
        )}

        {/* Mensaje de error */}
        {submitStatus === 'error' && (
          <div className="form-error-message" role="alert">
            <span className="error-icon">⚠</span>
            <div>
              <p className="error-title">{lang.errorTitle}</p>
              <p className="error-text">{errorDetails}</p>
            </div>
          </div>
        )}

        {/* PRIMERA FILA: NOMBRE Y EMAIL */}
        <div className="form-row">
          {/* NOMBRE */}
          <div className="form-group">
            <label htmlFor="name">
              {lang.name}
              <span className="required" aria-label="Campo requerido">*</span>
            </label>
            <input 
              type="text" 
              id="name" 
              placeholder={lang.placeholders.name}
              {...register('name', { 
                required: lang.validation.required,
                minLength: {
                  value: 2,
                  message: lang.validation.minLength
                }
              })}
              disabled={isSubmitting}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <span className="error-message" role="alert">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label htmlFor="email">
              {lang.email}
              <span className="required" aria-label="Campo requerido">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder={lang.placeholders.email}
              {...register('email', { 
                required: lang.validation.required,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: lang.validation.invalidEmail
                }
              })}
              disabled={isSubmitting}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <span className="error-message" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* SEGUNDA FILA: PAÍS Y TELÉFONO */}
        <div className="form-row">
          {/* PAÍS */}
          <div className="form-group">
            <label htmlFor="country">
              {lang.country}
              <span className="required" aria-label="Campo requerido">*</span>
            </label>
            <select 
              id="country" 
              {...register('country', { 
                required: lang.validation.required
              })}
              disabled={isSubmitting}
              aria-invalid={errors.country ? 'true' : 'false'}
            >
              <option value="">{lang.placeholders.country}</option>
              <optgroup label="Latinoamérica">
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Ecuador">Ecuador</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Honduras">Honduras</option>
                <option value="Mexico">México</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Panama">Panamá</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Perú</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </optgroup>
              <optgroup label="Otros">
                <option value="España">España</option>
                <option value="Portugal">Portugal</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Canada">Canadá</option>
                <option value="Otro">Otro</option>
              </optgroup>
            </select>
            {errors.country && (
              <span className="error-message" role="alert">
                {errors.country.message}
              </span>
            )}
          </div>

          {/* TELÉFONO */}
          <div className="form-group">
            <label htmlFor="phone">
              {lang.phone}
              <span className="required" aria-label="Campo requerido">*</span>
            </label>
            <input 
              type="tel" 
              id="phone" 
              placeholder={lang.placeholders.phone}
              {...register('phone', { 
                required: lang.validation.required,
                pattern: {
                  value: /^[\d\s\-\+\(\)]*$/,
                  message: lang.validation.invalidPhone
                }
              })}
              disabled={isSubmitting}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && (
              <span className="error-message" role="alert">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* MENSAJE / CONSULTA */}
        <div className="form-group">
          <label htmlFor="message">
            {lang.message}
            <span className="required" aria-label="Campo requerido">*</span>
          </label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder={lang.placeholders.message}
            {...register('message', { 
              required: lang.validation.required,
              minLength: {
                value: 10,
                message: lang.validation.minMessage
              },
              maxLength: {
                value: 2000,
                message: lang.validation.maxMessage
              }
            })}
            disabled={isSubmitting}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <span className="error-message" role="alert">
              {errors.message.message}
            </span>
          )}
          <span className="character-count">
            {watch('message')?.length || 0} / 2000 {lang.charCountLabel}
          </span>
        </div>

        {/* POLÍTICA DE PRIVACIDAD */}
        <div className="form-group form-checkbox">
          <label htmlFor="privacy_accepted">
            <input 
              type="checkbox" 
              id="privacy_accepted" 
              {...register('privacy_accepted', { 
                required: lang.validation.privacyRequired
              })}
              disabled={isSubmitting}
              aria-invalid={errors.privacy_accepted ? 'true' : 'false'}
            />
            <span className="checkbox-text">
              {lang.privacyText}
              {' '}
              <a 
                href={`/${locale}/privacy-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {lang.privacyPolicy}
              </a>
              <span className="required" aria-label="Campo requerido">*</span>
            </span>
          </label>
          {errors.privacy_accepted && (
            <span className="error-message" role="alert">
              {errors.privacy_accepted.message}
            </span>
          )}
        </div>

        {/* BOTÓN DE ENVÍO */}
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isSubmitting || submitStatus === 'success'}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              {lang.sending}
            </>
          ) : (
            lang.submit
          )}
        </button>

        {/* Disclaimer */}
        <p className="form-disclaimer">
          {lang.disclaimer}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
