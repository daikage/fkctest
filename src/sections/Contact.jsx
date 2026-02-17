import SectionHeading from '../components/SectionHeading.jsx'
import { useState } from 'react'
import { motion } from 'framer-motion'
import DiagonalMedia from '../components/DiagonalMedia.jsx'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // TODO: Replace with your API endpoint, Formspree, or Netlify forms.
    // Example Netlify: add name="contact" and a hidden input <input type="hidden" name="form-name" value="contact" />
    try {
      await new Promise(r => setTimeout(r, 600)) // simulate latency
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong. Please try again.')
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

        <div className="grid cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="card"
            aria-label="Contact form"
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
                <label htmlFor="company">Company(Optional)</label>
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
              <textarea id="message" name="message" placeholder="Briefly describe your needs..." />
            </div>
            <div style={{ display:'flex', gap: 10, alignItems:'center', marginTop: 12 }}>
              <button className="btn primary" type="submit">Send message</button>
              {status && <span className="text-muted" role="status">{status}</span>}
            </div>
            <p className="text-muted" style={{ fontSize: 12, marginTop: 6 }}>
              By submitting, you agree that we may contact you regarding your inquiry.
            </p>
          </motion.form>

          <div className="card" style={{ display: 'grid', gap: 10 }}>
            <h3>How we work with you</h3>
            <ul style={{ margin: 0, padding: '0 0 0 16px', display:'grid', gap:8 }}>
              <li>Clear scopes and SLAs for predictable timelines.</li>
              <li>On‑ground verification in all states and FCT.</li>
              <li>Evidence‑based reports with transparent status.</li>
              <li>Dedicated account manager for ongoing needs.</li>
            </ul>

            <div style={{ height:1, background:'rgba(255,255,255,0.08)', margin:'8px 0' }} />

            <h3>Reach us</h3>
            <p className="text-muted">Email: info@fortknoxchecks.com</p>
            <p className="text-muted">Phone: +2348122123035 or +2347010001000</p>
            <p className="text-muted">Hours: 24 - 7(WAT)</p>

            <div style={{ marginTop: 10 }}>
              <DiagonalMedia
                src="https://plus.unsplash.com/premium_vector-1732191809273-a4827e61d3a3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop"
                alt="In‑person consultation with an African professional present"
                height={180}
                direction="right"
                caption="Let’s discuss your verification needs"
                imgProps={{ loading: 'lazy', decoding: 'async' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}