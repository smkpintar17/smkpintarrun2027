// Vercel Serverless Function. Set GOOGLE_SHEETS_WEBHOOK in Vercel Environment Variables.
// The URL should point to your deployed Google Apps Script Web App.
export default async function handler(req, res) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK;
  if (req.method === 'GET') {
    if (!webhook) return res.status(200).json({ scores: [] });
    try { const r = await fetch(`${webhook}?action=leaderboard`); return res.status(200).json(await r.json()); }
    catch { return res.status(200).json({ scores: [] }); }
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, phone, score, level, answers, playedAt } = req.body || {};
  if (!name || !/^\+62\d{8,13}$/.test(phone || '') || !Number.isFinite(score)) return res.status(400).json({ error: 'Data peserta tidak valid' });
  if (!webhook) return res.status(202).json({ stored: false, message: 'Webhook belum dikonfigurasi' });
  try { await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, phone, score, level, answers, playedAt }) }); return res.status(201).json({ stored: true }); }
  catch { return res.status(502).json({ error: 'Gagal menyimpan leaderboard' }); }
}
