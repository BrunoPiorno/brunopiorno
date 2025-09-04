import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (data) => {
    // Honeypot check
    if (data.honeypot) {
      console.log('Bot submission detected');
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    // IMPORTANT: Replace with your EmailJS credentials
    const serviceID = 'service_6r3ee9k';
    const templateID = 'template_obd8zn6';
    const publicKey = 'CwpWaIXVC5Pdb4Kae';

    emailjs.send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
      }, (err) => {
        console.log('FAILED...', err);
        setIsSubmitting(false);
        setIsError(true);
      });
  };

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

      {isSuccess && <div className="form-success-message">{t('contact.form.success')}</div>}
      {isError && <div className="form-error-message">{t('contact.form.error')}</div>}
    </form>
  );
};

export default ContactForm;
