import SectionHeading from '../components/SectionHeading.jsx'
import { IconCheck } from '../components/Icons.jsx'
import { motion } from 'framer-motion'
import DiagonalMedia from '../components/DiagonalMedia.jsx'

const services = [
  {
    title: 'Previous Employment Checks',
    items: ['Identity and address verification', 'Guarantor & reference checks', 'Past employment validation'],
    img: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
      alt: 'HR discussion with an African professional during background screening',
      direction: 'right',
    },
  },
  {
    title: 'Education & Credential Verification',
    items: ['Degree and certificate validation', 'Professional licenses', 'NYSC status verification'],
    img: {
      src: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop',
      alt: 'Reviewing certificates and credentials',
      direction: 'left',
    },
  },
  {
    title: 'Criminal Record & Social Media Search',
    items: ['Court records search', 'Litigation checks', 'Adverse media review'],
    img: {
      src: 'https://plus.unsplash.com/premium_photo-1663047627873-4bd78ff6f6d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      alt: 'Researching records and case files',
      direction: 'right',
    },
  },
  {
    title: 'Vendor & Distributor Due Diligence',
    items: ['Business verification (CAC)', 'Site inspection'],
    img: {
      src: 'https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      alt: 'Team assessing vendor operations',
      direction: 'left',
    },
  },
  {
    title: 'Asset & Site Verification',
    items: ['Physical address verification', 'Asset & inventory checks', 'Field investigations'],
    img: {
      src: 'https://images.unsplash.com/photo-1682024768938-4834077b3829?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      alt: 'On‑site asset verification',
      direction: 'right',
    },
  },
  {
    title: 'KYC & Compliance Support',
    items: ['PEP & Sanctions screening', 'Adverse media', 'Compliance documentation'],
    img: {
      src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1600&auto=format&fit=crop',
      alt: 'Compliance review session',
      direction: 'left',
    },
  },
]

export default function Services() {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Background checks designed to reduce risk"
          lead="We help organizations minimize losses from fraud, theft, operational disruption, and reputation damage through rigorous verification."
        />

        <div className="grid cols-3">
          {services.map((s) => (
            <motion.article
              key={s.title}
              className="card"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {s.img && (
                <div style={{ marginBottom: 12 }}>
                  <DiagonalMedia
                    src={s.img.src}
                    alt={s.img.alt}
                    height={160}
                    direction={s.img.direction}
                    imgProps={{ loading: 'lazy', decoding: 'async' }}
                  />
                </div>
              )}

              <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                {s.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ marginTop: 2, color: 'var(--gold)' }}>
                      <IconCheck />
                    </span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}