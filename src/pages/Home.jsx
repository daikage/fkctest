import Hero from '../sections/Hero.jsx'
import { motion } from 'framer-motion'
import DiagonalMedia from '../components/DiagonalMedia.jsx'
import LogoStrip from '../components/LogoStrip.jsx'

export default function Home() {
  const clients = [
    { name: 'MRS Oil & Gas', src: '/logos/mrs.png', href: 'https://www.mrsoilnigplc.net/' },
    { name: 'First Bank', src: '/logos/firstbank.png', href: 'https://www.firstbanknigeria.com/' },
    { name: 'Stanbic Pension', src: '/logos/stanbic.png', href: 'https://www.stanbicibtcpension.com/' },
    { name: 'Union Bank', src: '/logos/unionbank.png', href: 'https://www.unionbankng.com/' },
    { name: 'Optimus Bank', src: '/logos/optimus.svg', href: 'https://www.optimusbank.com/' },
    { name: 'Globus Bank', src: '/logos/globus.png', href: 'https://www.globusbank.com/' },
    { name: 'Coca Cola', src: '/logos/cocacola.png', href: 'https://www.coca-cola.com/ng/en/' },
    { name: 'Sahara Group', src: '/logos/sahara.png', href: 'https://www.sahara-group.com/' },
    { name: 'Spar Market', src: '/logos/spar.png', href: 'https://sparnigeria.com/' },
    { name: 'RMB', src: '/logos/rmb.png', href: 'https://www.rmbprivatebank.com/' },
    { name: 'Max', src: '/logos/max.svg', href: 'https://www.maxdrive.ai/' },

  ]

  return (
    <>
      <Hero />
      <LogoStrip
        title="Trusted by institutions across Nigeria"
        height={40}
        items={clients}
      />
      <section className="section alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="card"
            style={{ display: 'grid', gap: 10, textAlign: 'center' }}
          >
            <h2>Hire and onboard with confidence</h2>
            <p className="lead">Fast, accurate, secure verification for HR, compliance, and procurement teams.</p>
            <div style={{ display:'flex', justifyContent:'center', gap:12 }}>
              <a className="btn primary" href="/contact">Request a Quote</a>
              <a className="btn ghost" href="/services">Explore Services</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'center' }}>
            <div className="card" style={{ display: 'grid', gap: 10 }}>
              <h2>Security built into every check</h2>
              <p className="lead">
                Our on‑ground teams and secure workflows deliver evidence‑backed verification across Nigeria.
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'grid', gap: 8 }}>
                <li>Nationwide field verification in 36 states + FCT</li>
                <li>Clear SLAs and consistent report formats</li>
                <li>Data handled with strict confidentiality controls</li>
              </ul>
            </div>

            <DiagonalMedia
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop"
              alt="Professional security and verification operations"
              height={340}
              direction="right"
              caption="Trusted. Timely. Nationwide."
            />
          </div>
        </div>
      </section>

      {/* New: About Us section with 10 years in business */}
      <section id="about" className="section alt">
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="badge">About Us</div>
              <h2 style={{ marginTop: 10 }}>10 years+ of trusted verification</h2>
              <p className="lead">
                For a decade, FortKnox Verification & Checks Services Limited has helped Nigerian organizations reduce fraud,
                protect their brands, and make confident hiring and vendor decisions through rigorous background checks.
              </p>

              <div
                className="grid"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 12, marginTop: 12 }}
              >
                <div className="card">
                  <strong style={{ color: 'var(--gold)' }}>10 years</strong>
                  <p className="text-muted">In business</p>
                </div>
                <div className="card">
                  <strong style={{ color: 'var(--gold)' }}>36 + FCT</strong>
                  <p className="text-muted">Nationwide coverage</p>
                </div>
                <div className="card">
                  <strong style={{ color: 'var(--gold)' }}>Security‑first</strong>
                  <p className="text-muted">Confidential handling</p>
                </div>
              </div>
            </div>

            <DiagonalMedia
              src="https://plus.unsplash.com/premium_photo-1677093906217-9420a5f16322?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our team supporting in‑person verification meetings"
              height={320}
              direction="right"
              caption="10 years serving Nigerian organizations"
              imgProps={{ loading: 'lazy', decoding: 'async' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}