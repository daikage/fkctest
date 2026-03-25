import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

// --- Add configurable SMTP options at top-level ---
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
const SMTP_SECURE = String(process.env.SMTP_SECURE || 'false') === 'true' // true => 465, false => 587
const SMTP_AUTH_METHOD = process.env.SMTP_AUTH_METHOD || undefined

const app = express()
app.use(express.json())
app.use(cors({ origin: true })) // or restrict to your domain

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, company = '', email, phone = '', message = '' } = req.body || {}
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' })
    }

    const user = (process.env.GMAIL_USER || '').trim()
    const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')
    const to = (process.env.TO_EMAIL || user || '').trim()
    if (!user || !pass || !to) {
      return res.status(500).json({ error: 'Email service not configured.' })
    }

    if (String(process.env.SMTP_DEBUG) === '1') {
      const redactedPass = pass ? `${pass.slice(0, 2)}****${pass.slice(-2)}` : ''
      console.log('[SMTP] host:', SMTP_HOST, 'port:', SMTP_PORT, 'secure:', SMTP_SECURE, 'authMethod:', SMTP_AUTH_METHOD || '(auto)')
      console.log('[SMTP] user:', user)
      console.log('[SMTP] pass (redacted):', redactedPass, 'len:', pass.length)
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user, pass },
      authMethod: SMTP_AUTH_METHOD, // optional override (e.g., LOGIN)
      tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
      },
      logger: process.env.SMTP_DEBUG === '1',
      debug: process.env.SMTP_DEBUG === '1',
      connectionTimeout: 10000,
    })

    const subject = `New quote request from ${name}`
    const text = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'Message:',
      message,
    ].join('\n')

    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;line-height:1.5">
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `

    const info = await transporter.sendMail({
      from: { name: 'FortKnox Site', address: user },    // Must match authenticated Gmail
      to,
      replyTo: safeEmail(email) || undefined,
      subject,
      text,
      html,
    })

    res.json({ ok: true, id: info.messageId })
  } catch (err) {
    console.error('send-email error:', {
      message: err?.message,
      code: err?.code,
      response: err?.response,
    })
    res.status(500).json({ error: 'Internal error sending email.' })
  }
})

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

// Basic email sanitizer to avoid header injection via CRLF
function safeEmail(value = '') {
  const v = String(value).replace(/[\r\n]+/g, '').trim()
  if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return ''
  return v
}

// Keep/enable the verify endpoint for quick checks in dev
if (process.env.NODE_ENV !== 'production') {
  app.get('/api/_verify-smtp', async (req, res) => {
    try {
      const user = (process.env.GMAIL_USER || '').trim()
      const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')
      if (!user || !pass) return res.status(400).json({ ok: false, error: 'Missing GMAIL_USER or GMAIL_APP_PASSWORD' })

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: { user, pass },
        authMethod: SMTP_AUTH_METHOD || undefined,
        tls: { minVersion: 'TLSv1.2', rejectUnauthorized: true },
      })
      await transporter.verify()
      res.json({ ok: true })
    } catch (e) {
      console.error('SMTP verify failed:', e)
      res.status(500).json({ ok: false, error: e?.message, code: e?.code })
    }
  })
}

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API listening on ${PORT}`))
