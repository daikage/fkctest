import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconShield } from './Icons.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="FortKnox Checks Home" onClick={close}>
          <img
            className="logo"
            src="/brand/logo-mark.png"   // put your file in public/brand/logo-mark.svg
            alt="FortKnox Checks"
            width={70}
            height={70}
          />
          <span>FortKnox Checks</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>Services</NavLink>
          <NavLink to="/why-us" className={({ isActive }) => isActive ? 'active' : undefined}>Why Us</NavLink>
          <NavLink to="/process" className={({ isActive }) => isActive ? 'active' : undefined}>Process</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
          <Link to="/contact" className="btn primary cta">Get a Quote</Link>
          {/* Theme toggle (desktop) */}
          <ThemeToggle />
        </nav>

        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}>
          Menu
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="container">
          <NavLink onClick={close} to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>Services</NavLink>
          <NavLink onClick={close} to="/why-us" className={({ isActive }) => isActive ? 'active' : undefined}>Why Us</NavLink>
          <NavLink onClick={close} to="/process" className={({ isActive }) => isActive ? 'active' : undefined}>Process</NavLink>
          <NavLink onClick={close} to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
          <Link onClick={close} className="btn primary" to="/contact">Get a Quote</Link>
          {/* Theme toggle (mobile) */}
          <div style={{ marginTop: 10 }}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}