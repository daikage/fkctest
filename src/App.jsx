import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PrivacyModal from './components/PrivacyModal.jsx'
import ClickSound from './components/ClickSound.jsx'

// Pages
import Home from './pages/Home.jsx'
import ServicesPage from './pages/Services.jsx'
import WhyUsPage from './pages/WhyUs.jsx'
import ProcessPage from './pages/Process.jsx'
import ContactPage from './pages/Contact.jsx'
import PrivacyPage from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      {/* Click sound across all clickables */}
      <ClickSound />
      {/* Show first‑launch privacy modal */}
      <PrivacyModal />

      <AnimatePresence mode="sync">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}