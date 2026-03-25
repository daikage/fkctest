import SectionHeading from '../components/SectionHeading.jsx'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // Added AnimatePresence
import DiagonalMedia from '../components/DiagonalMedia.jsx'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)
  const [smtpOk, setSmtpOk] = useState(null) // dev: show email connectivity

  // API base for the Node mailer endpoint
  // In dev it defaults to http://localhost:4000; in prod it uses same-origin unless VITE_API_BASE is set.
  const API_BASE = (import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? 'http://localhost:4000' : ''))
    .replace(/\/+$/, '')

  // In development, ping the SMTP verify endpoint to surface misconfiguration early
  useEffect(() => {
    if (!import.meta.env.DEV) return
    const ctrl = new AbortController()
    fetch(`${API_BASE}/api/_verify-smtp`, { signal: ctrl.signal })
      .then(r => r.json())
      .then(d => setSmtpOk(Boolean(d && d.ok)))
      .catch(() => setSmtpOk(false))
    return () => ctrl.abort()
  }, [API_BASE])
  
  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    setSending(true)
    
    const form = new FormData(e.currentTarget)
    // Trim values and build a safe payload
    const raw = Object.fromEntries(form.entries())
    const payload = {
      name: (raw.name || '').trim(),
      company: (raw.company || '').trim(),
      email: (raw.email || '').trim(),
      phone: (raw.phone || '').trim(),
      message: (raw.message || '').trim(),
    }

    try {
      const res = await fetch(`${API_BASE}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Request failed')
       
      setStatus({ type: 'success', msg: 'Thanks! We will reach out shortly.' })
      e.target.reset() // Use target to reset the form
    } catch (err) {
      const msg = import.meta.env.DEV && err?.message
        ? `Transmission failed: ${err.message}`
        : 'Transmission failed. Please try again.'
      setStatus({ type: 'error', msg })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Request a quote or a consultation"
          lead="Tell us what you need to verify. We’ll respond with scope, timelines, and pricing."
        />
        {import.meta.env.DEV && smtpOk === false && (
          <div className="card" style={{ marginBottom: 12, borderColor: 'rgba(255,0,0,0.25)' }}>
            <p className="text-error" style={{ margin: 0 }}>
              Email service is not connected (SMTP verify failed). Check your server .env (GMAIL_USER, GMAIL_APP_PASSWORD) and that the server is running on {API_BASE || 'same-origin'}.
            </p>
          </div>
        )}

        <div className="grid cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="card"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <div className="row">
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div>
                <label htmlFor="company">Company (Optional)</label>
                <input id="company" name="company" type="text" placeholder="Your Company Ltd" />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+234 ..." />
              </div>
            </div>
            
            <div>
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" placeholder="Briefly describe your needs..." rows={4} />
            </div>

            <div style={{ display:'flex', gap: 15, alignItems:'center', marginTop: 12 }}>
              <button 
                className={`btn primary ${sending ? 'loading' : ''}`} 
                type="submit" 
                disabled={sending}
                style={{ minWidth: '140px' }}
              >
                {sending ? 'Sending...' : 'Send message'}
              </button>
              
              <AnimatePresence>
                {status && (
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={status.type === 'error' ? 'text-error' : 'text-success'}
                    style={{ fontSize: '14px', fontWeight: '500' }}
                  >
                    {status.msg}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <p className="text-muted" style={{ fontSize: 11, marginTop: 10, opacity: 0.7 }}>
              By submitting, you agree that Fort Knox may contact you regarding your inquiry.
            </p>
          </motion.form>

          {/* Right side remains largely the same but with clean padding */}
          <div className="card" style={{ display: 'grid', gap: 15 }}>
            <h3 style={{ color: 'var(--accent)' }}>How we work with you</h3>
            <ul className="check-list">
              <li>Clear scopes and SLAs for predictable timelines.</li>
              <li>On‑ground verification in all 36 states and FCT.</li>
              <li>Evidence‑based reports with transparent status.</li>
              <li>Dedicated account manager for ongoing needs.</li>
            </ul>

            <div style={{ height:1, background:'rgba(255,255,255,0.08)', margin:'8px 0' }} />

            <h3>Reach us</h3>
            <div className="contact-info">
              <p className="text-muted"><strong>Email:</strong> info@fortknoxchecks.com</p>
              <p className="text-muted"><strong>Phone:</strong> +234 812 212 3035</p>
              <p className="text-muted"><strong>Hours:</strong> 24/7 (WAT)</p>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 10 }}>
              <DiagonalMedia
                src="https://plus.unsplash.com/premium_vector-1732191809273-a4827e61d3a3?q=80&w=774&auto=format&fit=crop"
                alt="Consultation"
                height={180}
                direction="right"
                caption="Strategic Verification Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}