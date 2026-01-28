import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
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
  const [isError, setIsError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState('');

  useEffect(() => {
    if (window.ml) return;

    (function(w,d,e,u,f,l,n){
      w[f]=w[f]||function(){
        (w[f].q=w[f].q||[]).push(arguments);
      };
      l=d.createElement(e);
      l.async=1;
      l.src=u;
      n=d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l,n);
    })(window,document,"script","https://assets.mailerlite.com/js/universal.js","ml");

    window.ml("account", "2070356");
  }, []);

  const onSubmit = async (data) => {
    // For English version, use EmailJS
    if (locale === 'en') {
      // Honeypot check
      if (data.honeypot) {
        console.log('Bot submission detected');
        return;
      }

      setIsSubmitting(true);
      setIsError(false);

      // IMPORTANT: Replace with your EmailJS credentials
      const serviceID = 'service_6r3ee9k';
      const templateID = 'template_obd8zn6';
      const publicKey = 'CwpWaIXVC5Pdb4Kae';

      emailjs.send(serviceID, templateID, data, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitting(false);
          reset();
          navigate(`/${locale}/thank-you`);
        }, (err) => {
          console.log('FAILED...', err);
          setIsSubmitting(false);
          setIsError(true);
        });
    } else {
      // For Spanish version, use MailerLite
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

        const response = await fetch(
          'https://assets.mailerlite.com/jsonp/2070356/forms/177855257628378295/subscribe',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formPayload.toString(),
          }
        );

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
        setErrorDetails(error.message || 'Error al enviar el formulario. Por favor, intenta nuevamente.');
        setIsSubmitting(false);
      }
    }
  };

  // Show EmailJS form for English version
  if (locale === 'en') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
        {/* Honeypot field for spam protection */}
        <input type="text" name="honeypot" style={{ display: 'none' }} {...register('honeypot')} />

        <div className="form-group">
          <label htmlFor="name">{t('contact.form.name')}</label>
          <input 
            type="text" 
            id="name" 
            {...register('name', { required: t('contact.form.validation.required') })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input 
            type="email" 
            id="email" 
            {...register('email', { 
              required: t('contact.form.validation.required'), 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('contact.form.validation.invalidEmail')
              }
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">{t('contact.form.phone')}</label>
          <input 
            type="tel" 
            id="phone" 
            {...register('phone')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea 
            id="message" 
            rows="4" 
            {...register('message', { required: t('contact.form.validation.required') })}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message.message}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
        </button>

        {isError && <div className="form-error-message">{t('contact.form.error')}</div>}
      </form>
    );
  }

  // Show MailerLite form for Spanish version
  return (
    <div className="contact-form-wrapper">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="contact-form" 
        noValidate
        aria-label="Formulario de contacto"
      >
        {/* Mensaje de éxito */}
        {submitStatus === 'success' && (
          <div className="form-success-message" role="alert">
            <span className="success-icon">✓</span>
            <div>
              <p className="success-title">¡Gracias!</p>
              <p className="success-text">Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto pronto.</p>
            </div>
          </div>
        )}

        {/* Mensaje de error */}
        {submitStatus === 'error' && (
          <div className="form-error-message" role="alert">
            <span className="error-icon">⚠</span>
            <div>
              <p className="error-title">Error al enviar</p>
              <p className="error-text">{errorDetails}</p>
            </div>
          </div>
        )}

        {/* NOMBRE */}
        <div className="form-group">
          <label htmlFor="name">
            Nombre
            <span className="required" aria-label="Campo requerido">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Juan Pérez"
            {...register('name', { 
              required: 'Este campo es requerido',
              minLength: {
                value: 2,
                message: 'El nombre debe tener al menos 2 caracteres'
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
            Email
            <span className="required" aria-label="Campo requerido">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="tu@email.com"
            {...register('email', { 
              required: 'Este campo es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Por favor ingresa un email válido'
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

        {/* PAÍS */}
        <div className="form-group">
          <label htmlFor="country">
            País
            <span className="optional">(Opcional)</span>
          </label>
          <select 
            id="country" 
            {...register('country')}
            disabled={isSubmitting}
          >
            <option value="">- Selecciona tu país -</option>
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
        </div>

        {/* TELÉFONO */}
        <div className="form-group">
          <label htmlFor="phone">
            Teléfono o WhatsApp
            <span className="optional">(Opcional)</span>
          </label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="+54 9 11 1234-5678"
            {...register('phone', {
              pattern: {
                value: /^[\d\s\-\+\(\)]*$/,
                message: 'Por favor ingresa un teléfono válido'
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

        {/* MENSAJE / CONSULTA */}
        <div className="form-group">
          <label htmlFor="message">
            Consulta
            <span className="required" aria-label="Campo requerido">*</span>
          </label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder="Cuéntanos tu consulta o proyecto..."
            {...register('message', { 
              required: 'Este campo es requerido',
              minLength: {
                value: 10,
                message: 'La consulta debe tener al menos 10 caracteres'
              },
              maxLength: {
                value: 2000,
                message: 'La consulta no puede exceder 2000 caracteres'
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
            {watch('message')?.length || 0} / 2000 caracteres
          </span>
        </div>

        {/* POLÍTICA DE PRIVACIDAD */}
        <div className="form-group form-checkbox">
          <label htmlFor="privacy_accepted">
            <input 
              type="checkbox" 
              id="privacy_accepted" 
              {...register('privacy_accepted', { 
                required: 'Debes aceptar la política de privacidad'
              })}
              disabled={isSubmitting}
              aria-invalid={errors.privacy_accepted ? 'true' : 'false'}
            />
            <span className="checkbox-text">
              Acepto recibir información comercial y notificaciones, y he leído la
              {' '}
              <a 
                href={`/${locale}/privacy-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Política de Privacidad
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
              Enviando...
            </>
          ) : (
            '¡Quiero que me contacten!'
          )}
        </button>

        {/* Disclaimer */}
        <p className="form-disclaimer">
          Responderemos tu consulta en un máximo de 24 horas.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
