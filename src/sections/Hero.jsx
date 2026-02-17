import { IconShield } from '../components/Icons.jsx'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="badge" aria-label="Trust & Security">
            <IconShield size={18} color="var(--gold)" />
            Trusted Background Checks in Nigeria
          </div>
          <h1 style={{ marginTop: 12 }}>
            Fortify your hiring and vendor decisions with trusted verification
          </h1>
          <p className="lead">
            FortKnox Checks (FortKnox Verification & Checks Services Ltd) combines time‑proven security expertise with pan‑Nigeria coverage to deliver fast, accurate, and secure background screening.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
            <a className="btn primary" href="/contact">Talk to Us</a>
            <a className="btn ghost" href="/services">Our Services</a>
          </div>

          <div className="hero-stats">
            <motion.div className="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <strong style={{ color: 'var(--gold)' }}>Pan‑Nigeria</strong>
              <p className="text-muted">On‑ground verification in all 36 states + FCT</p>
            </motion.div>
            <motion.div className="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <strong style={{ color: 'var(--gold)' }}>Proven Processes</strong>
              <p className="text-muted">Reduce fraud, disruption, and reputation risk</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div style={{
            height: 260,
            borderRadius: 14,
            border: '1px dashed rgba(255,255,255,0.15)',
            display: 'grid',
            placeItems: 'center',
            background: 'radial-gradient(220px 160px at 50% 40%, rgba(212,175,55,0.18), transparent 60%)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <IconShield size={60} color="var(--gold)" />
              <div style={{ marginTop: 10, fontWeight: 700 }}>Secure. Accurate. On Time.</div>
              <div className="text-muted" style={{ fontSize: 14 }}>Reports you can trust</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
