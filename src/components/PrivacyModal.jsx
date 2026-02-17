import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyModal() {
  // Always show on each app launch (no localStorage gating)
  const [open, setOpen] = useState(true)
  const acceptBtnRef = useRef(null)

  useEffect(() => {
    if (open && acceptBtnRef.current) {
      acceptBtnRef.current.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleAccept() {
    setOpen(false)
  }

  function handleLater() {
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="privacy-title" aria-describedby="privacy-desc">
      <div className="modal">
        <div className="modal-header">
          <h3 id="privacy-title">Privacy Policy</h3>
        </div>
        <div className="modal-content">
          <p id="privacy-desc" className="text-muted">
            We use minimum necessary data to provide secure background verification services. By continuing, you agree to our handling of
            contact details and inquiry information in line with our Privacy Policy.
          </p>
          <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'grid', gap: 6 }}>
            <li>What we collect: contact info, request details, and communications</li>
            <li>Purpose: respond to inquiries, deliver services, improve operations</li>
            <li>Security: access‑controlled handling and retention aligned with legal requirements</li>
          </ul>

          <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button ref={acceptBtnRef} className="btn primary" onClick={handleAccept}>Accept & Continue</button>
            <Link className="btn ghost" to="/privacy-policy">
              Read full policy
            </Link>
            <button className="btn ghost" onClick={handleLater} aria-label="Close privacy notice">Maybe later</button>
          </div>
        </div>
      </div>
    </div>
  )
}
