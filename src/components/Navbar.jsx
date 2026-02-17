import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconShield } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const activeStyle = ({ isActive }) => ({ color: isActive ? 'var(--gold)' : 'var(--muted)' })

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="FortKnox Checks Home" onClick={close}>
           <img
            className="logo"
            src="/brand/logo-mark.png"   // put your file in public/brand/logo-mark.svg
            alt="FortKnox Checks"
            width={30}
            height={30}
          />
          <span>FortKnox Checks</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/services" style={activeStyle}>Services</NavLink>
          <NavLink to="/why-us" style={activeStyle}>Why Us</NavLink>
          <NavLink to="/process" style={activeStyle}>Process</NavLink>
          <NavLink to="/contact" style={activeStyle}>Contact</NavLink>
          <Link to="/contact" className="btn primary cta">Get a Quote</Link>
        </nav>

        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}>
          Menu
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="container">
          <NavLink onClick={close} to="/services">Services</NavLink>
          <NavLink onClick={close} to="/why-us">Why Us</NavLink>
          <NavLink onClick={close} to="/process">Process</NavLink>
          <NavLink onClick={close} to="/contact">Contact</NavLink>
          <Link onClick={close} className="btn primary" to="/contact">Get a Quote</Link>
        </div>
      </div>
    </header>
  )
}