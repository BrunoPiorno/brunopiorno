import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getBaseReviews, REVIEWS_STORAGE_KEY } from '../data/reviews';
import './ReviewsPage.css';

const projectTypeOptions = [
  'Sitio institucional',
  'Ecommerce',
  'Aplicación web',
  'Marketing / Ads',
  'Consultoría tecnológica',
  'Otro'
];

const loadStoredReviews = () => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(REVIEWS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn('Unable to parse stored reviews', error);
    return [];
  }
};

const persistStoredReviews = (entries) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.warn('Unable to persist reviews', error);
  }
};

const ReviewsPage = () => {
  const { t } = useLanguage();
  const baseReviews = useMemo(() => getBaseReviews(t), [t]);
  const [userReviews, setUserReviews] = useState([]);
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectType: projectTypeOptions[0],
    message: '',
    rating: 5
  });

  useEffect(() => {
    setUserReviews(loadStoredReviews());
  }, []);

  useEffect(() => {
    document.body.classList.add('reviews-active');
    return () => document.body.classList.remove('reviews-active');
  }, []);

  const allReviews = useMemo(() => {
    return [...userReviews, ...baseReviews].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [userReviews, baseReviews]);

  const filteredReviews = useMemo(() => {
    if (filter === 'recent') {
      return allReviews.slice(0, 4);
    }
    return allReviews;
  }, [allReviews, filter]);

  const metrics = [
    { label: t('reviews.metrics.projects'), value: '+120' },
    { label: t('reviews.metrics.satisfaction'), value: '4.9/5' },
    { label: t('reviews.metrics.years'), value: '+10' }
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: t('reviews.form.error') });
      return;
    }

    const newReview = {
      id: `manual-${Date.now()}`,
      name: formData.name.trim(),
      company: formData.company.trim(),
      role: formData.role.trim(),
      message: formData.message.trim(),
      rating: Number(formData.rating) || 5,
      projectType: formData.projectType,
      email: formData.email.trim(),
      date: new Date().toISOString()
    };

    const stored = loadStoredReviews();
    const updatedStored = [newReview, ...stored];
    persistStoredReviews(updatedStored);
    setUserReviews(updatedStored);

    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      projectType: projectTypeOptions[0],
      message: '',
      rating: 5
    });
    setStatus({ type: 'success', message: t('reviews.form.success') });
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={index < count ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <main className="reviews-page">
      <Helmet>
        <title>{t('reviews.meta.title')}</title>
        <meta name="description" content={t('reviews.meta.description')} />
      </Helmet>

      <section className="reviews-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Trust Layer</p>
            <h1>{t('reviews.hero.title')}</h1>
            <p>{t('reviews.hero.subtitle')}</p>
            <div className="hero-actions">
              <a href="#form" className="primary-btn">{t('reviews.hero.cta')}</a>
              <Link to="/" className="secondary-btn">{t('reviews.hero.secondary')}</Link>
            </div>
          </div>
          <div className="hero-metrics">
            {metrics.map((metric) => (
              <motion.div
                className="metric-card"
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-list-section">
        <div className="section-heading">
          <h2>{t('reviews.list.title')}</h2>
          <p>{t('reviews.list.subtitle')}</p>
        </div>
        <div className="reviews-filters">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            {t('reviews.filters.all')}
          </button>
          <button
            className={filter === 'recent' ? 'active' : ''}
            onClick={() => setFilter('recent')}
          >
            {t('reviews.filters.recent')}
          </button>
        </div>
        {filteredReviews.length === 0 ? (
          <p className="empty-state">{t('reviews.empty')}</p>
        ) : (
          <div className="reviews-grid">
            {filteredReviews.map((review) => (
              <article
                key={review.id}
                className="review-card"
              >
                <div className="review-rating">{renderStars(review.rating)}</div>
                <p className="review-message">{review.message}</p>
                <div className="review-meta">
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.company || review.role}</span>
                  </div>
                  {review.projectType && (
                    <span className="project-chip">{review.projectType}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="form" className="reviews-form-section">
        <motion.div
          className="form-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>{t('reviews.form.title')}</h3>
          <p>{t('reviews.form.subtitle')}</p>
          <form onSubmit={handleSubmit} className="reviews-form">
            <div className="form-grid">
              <label>
                {t('reviews.form.name')}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                {t('reviews.form.email')}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                />
              </label>
              <label>
                {t('reviews.form.company')}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t('reviews.form.role')}
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <label>
              {t('reviews.form.projectType')}
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
              >
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t('reviews.form.message')}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
              />
            </label>
            <label className="rating-field">
              {t('reviews.form.ratingLabel')}
              <div className="rating-options">
                {[5, 4, 3, 2, 1].map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={formData.rating === value ? 'active' : ''}
                    onClick={() => setFormData((prev) => ({ ...prev, rating: value }))}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </label>
            <button type="submit" className="primary-btn">
              {t('reviews.form.submit')}
            </button>
            {status.type === 'success' && (
              <p className="status-message success">{status.message}</p>
            )}
            {status.type === 'error' && (
              <p className="status-message error">{status.message}</p>
            )}
          </form>
        </motion.div>
      </section>
    </main>
  );
};

export default ReviewsPage;
