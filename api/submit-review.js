'use strict';

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://globalalora.com';
const TO_EMAIL = process.env.REVIEWS_TO_EMAIL || 'info@globalalora.com';
const FROM_EMAIL = process.env.REVIEWS_FROM_EMAIL || 'reseñas@globalalora.com';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, company, role, projectType, message, rating } = req.body || {};

  if (!name?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const stars = '★'.repeat(Number(rating) || 5) + '☆'.repeat(5 - (Number(rating) || 5));

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
      <div style="background:#0d2b45;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="color:#3fd9b0;margin:0">Nueva reseña recibida</h2>
        <p style="color:#a0aec0;margin:4px 0 0">${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 8px 8px">
        <p style="font-size:2rem;margin:0 0 16px">${stars}</p>
        <blockquote style="border-left:4px solid #3fd9b0;margin:0 0 24px;padding:0 0 0 16px;font-size:1.1rem;color:#2d3748">
          "${message.trim()}"
        </blockquote>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#718096;width:140px">Nombre</td><td style="padding:8px 0;font-weight:600">${name.trim()}</td></tr>
          ${email ? `<tr><td style="padding:8px 0;color:#718096">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>` : ''}
          ${company ? `<tr><td style="padding:8px 0;color:#718096">Empresa</td><td style="padding:8px 0">${company.trim()}</td></tr>` : ''}
          ${role ? `<tr><td style="padding:8px 0;color:#718096">Cargo</td><td style="padding:8px 0">${role.trim()}</td></tr>` : ''}
          ${projectType ? `<tr><td style="padding:8px 0;color:#718096">Tipo de proyecto</td><td style="padding:8px 0">${projectType}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#718096">Calificación</td><td style="padding:8px 0;font-weight:600">${rating}/5</td></tr>
        </table>
      </div>
    </div>
  `;

  try {
    const { Resend } = require('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: `Alora Reseñas <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `⭐ Nueva reseña de ${name.trim()} (${rating}/5)`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
