import WhyUs from '../sections/WhyUs.jsx'
import { motion } from 'framer-motion'
import DiagonalMedia from '../components/DiagonalMedia.jsx'

export default function WhyUsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'center' }}>
            <div className="card" style={{ display: 'grid', gap: 10 }}>
              <h2>Nationwide, human‑led verification</h2>
              <p className="lead">
                Our teams perform in‑person checks across Nigeria—bringing context, trust, and stronger evidence to your decisions.
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'grid', gap: 8 }}>
                <li>On‑ground address and site visits</li>
                <li>Candidate and guarantor interviews</li>
                <li>NDPR Compliance</li>
              </ul>
            </div>

            <DiagonalMedia
              src="https://plus.unsplash.com/premium_photo-1661299248074-56b28be1bffd?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop"
              alt="African professional during an in‑person verification meeting"
              height={340}
              direction="right"
              caption="Real people. Real verification."
              imgProps={{ loading: 'eager', decoding: 'sync' }}
            />
          </div>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <WhyUs />
      </motion.div>
    </>
  )
}