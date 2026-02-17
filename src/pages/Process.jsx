import Process from '../sections/Process.jsx'
import { motion } from 'framer-motion'
import DiagonalMedia from '../components/DiagonalMedia.jsx'

export default function ProcessPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'center' }}>
            <DiagonalMedia
              src="https://plus.unsplash.com/premium_photo-1683842188982-e2920f594fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VkVSSUZJQ0FUSU9OJTIwUFJPQ0NFU1N8ZW58MHx8MHx8fDA%3D=crop"
              alt="African team reviewing verification workflow and evidence"
              height={320}
              direction="left"
              caption="Clear steps. Auditable outcomes."
              imgProps={{ loading: 'eager', decoding: 'sync' }}
            />
            <div className="card" style={{ display: 'grid', gap: 10 }}>
              <h2>Transparent and auditable process</h2>
              <p className="lead">
                From scope to final report, each step is documented—giving you confidence in every verification decision.
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'grid', gap: 8 }}>
                <li>Defined scopes and permissions</li>
                <li>Field validation and desk research</li>
                <li>Two‑step quality review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <Process />
      </motion.div>
    </>
  )
}