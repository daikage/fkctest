import SectionHeading from '../components/SectionHeading.jsx'
import { IconClock, IconMap, IconLock, IconShield } from '../components/Icons.jsx'
import { motion } from 'framer-motion'

// Replace pillars with our values
const values = [
  {
    icon: IconLock,
    title: 'Integrity',
    desc: 'At all times we act with integrity—providing quality service, being reliable and responsible.',
  },
  {
    icon: IconClock,
    title: 'Commitment',
    desc: 'We work with a sense of urgency and a high level of commitment from both individual and company perspectives.',
  },
  {
    icon: IconShield,
    title: 'Excellence',
    desc: 'We pursue excellence in whatever we do. If we give our word, we keep it unless agreed otherwise by all parties.',
  },
  {
    icon: IconShield,
    title: 'Ownership',
    desc: 'We take ownership of clients’ needs and are accountable for delivering professional service.',
  },
  {
    icon: IconMap,
    title: 'Teamwork',
    desc: 'We support one another, work cooperatively, respect one another’s views, and make our working environment enjoyable.',
  },
  {
    icon: IconClock,
    title: 'Customer Service',
    desc: 'We cherish our customers. Our services are timely, responsive, proactive—meeting their needs and aiming to delight them.',
  },
]

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        {/* Update heading to Our Values */}
        <SectionHeading
          eyebrow="Our Values"
          title="What guides us"
          lead="Principles that drive quality, accountability, and customer success."
        />

        {/* Use a 3-column grid for 6 values */}
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }}>
          {values.map((v, idx) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                className="card"
                style={{ padding: 22 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom: 8 }}>
                  <span aria-hidden="true" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:36, height:36, borderRadius:999, background:'rgba(212,175,55,0.14)', border:'1px solid rgba(212,175,55,0.35)', color:'var(--gold)' }}>
                    <Icon />
                  </span>
                  <h3 style={{ margin: 0 }}>{v.title}</h3>
                </div>
                <p className="text-muted">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}