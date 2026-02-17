import Contact from '../sections/Contact.jsx'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <Contact />
    </motion.div>
  )
}