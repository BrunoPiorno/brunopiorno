const CLAY_WEBHOOK_URL = 'https://api.clay.com/v3/sources/webhook/pull-in-data-from-a-webhook-1956ddca-17b9-4362-b085-82b125bb6ad8';

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(CLAY_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    return res.status(response.ok ? 200 : 502).json({ ok: response.ok });
  } catch (err) {
    console.error('Clay webhook proxy error:', err);
    return res.status(500).json({ error: 'Proxy error' });
  }
}
