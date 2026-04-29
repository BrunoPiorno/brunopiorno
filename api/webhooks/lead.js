export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Webhook-Secret');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, email, telefono, mensaje, formId, timestamp, source } = req.body;

    // Validación básica
    if (!nombre || !email) {
      return res.status(400).json({ 
        error: 'Datos incompletos',
        message: 'Nombre y email son requeridos'
      });
    }

    // Estructurar el lead
    const lead = {
      id: `lead_${Date.now()}`,
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      telefono: telefono?.trim() || '',
      mensaje: mensaje?.trim() || '',
      formId: formId || 'default',
      source: source || 'unknown',
      timestamp: timestamp || new Date().toISOString(),
      status: 'new',
      createdAt: new Date().toISOString()
    };

    // TODO: Aquí puedes integrar con tu CRM
    // Opciones:
    // 1. Guardar en base de datos (Supabase, MongoDB, etc.)
    // 2. Enviar a Make/Zapier webhook
    // 3. Enviar email de notificación
    // 4. Guardar en Google Sheets

    // Ejemplo: Enviar a webhook de Make/Zapier
    if (process.env.MAKE_WEBHOOK_URL) {
      try {
        await fetch(process.env.MAKE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead)
        });
      } catch (webhookError) {
        console.error('Error enviando a webhook externo:', webhookError);
      }
    }

    // Ejemplo: Enviar email con EmailJS
    if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID) {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          {
            to_email: 'tu-email@ejemplo.com',
            from_name: lead.nombre,
            from_email: lead.email,
            message: `Nuevo lead desde formulario embebido:\n\nNombre: ${lead.nombre}\nEmail: ${lead.email}\nTeléfono: ${lead.telefono || 'No proporcionado'}\nMensaje: ${lead.mensaje || 'Sin mensaje'}\nOrigen: ${lead.source}`
          },
          process.env.EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error('Error enviando email:', emailError);
      }
    }

    // Log para debugging
    console.log('Nuevo lead recibido:', lead);

    return res.status(200).json({
      success: true,
      message: 'Lead recibido correctamente',
      leadId: lead.id
    });

  } catch (error) {
    console.error('Error procesando lead:', error);
    return res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message
    });
  }
}
