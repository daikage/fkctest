import SectionHeading from '../components/SectionHeading.jsx'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Scope & Request', desc: 'Share candidate/vendor details and the checks required.' },
  { title: 'Method & Consent', desc: 'We define sources and collect proper permissions where applicable.' },
  { title: 'On‑ground Verification', desc: 'Field officers and desk research validate claims across Nigeria.' },
  { title: 'Quality Review', desc: 'Two‑step review to ensure accuracy and clarity.' },
  { title: 'Reporting & Support', desc: 'Deliverables with status, evidence, and next‑step guidance.' },
]

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title="Clear, consistent, and auditable from request to report"
          lead="You get visibility, predictable timelines, and evidence‑based outcomes."
        />
        <div className="grid cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="card"
              style={{ position: 'relative', paddingTop: 26 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <div style={{
                position:'absolute', top:-12, left:16, width:36, height:36, borderRadius:999,
                background:'linear-gradient(135deg, var(--gold), var(--gold-600))',
                color:'#111', fontWeight:800, display:'grid', placeItems:'center',
                border: '1px solid rgba(0,0,0,0.1)'
              }}>{i + 1}</div>
              <h3 style={{ marginTop: 8 }}>{s.title}</h3>
              <p className="text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}