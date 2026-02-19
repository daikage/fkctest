import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'privacy-accepted-v1'

export default function PrivacyModal() {
  // Show only on first launch until accepted is stored
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'true'
    } catch {
      return true
    }
  })
  const acceptBtnRef = useRef(null)

  useEffect(() => {
    if (open && acceptBtnRef.current) {
      acceptBtnRef.current.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleAccept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {}
    setOpen(false)
  }

  function handleClose() {
    // Close without persisting acceptance
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      aria-describedby="privacy-desc"
    >
      <div className="modal">
        <div
          className="modal-header"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <h3 id="privacy-title">Privacy Policy</h3>
          {/* New: Close (X) button that just dismisses the modal */}
          <button
            className="btn ghost"
            onClick={handleClose}
            aria-label="Close privacy notice"
            title="Close"
            style={{ padding: '6px 10px', borderRadius: 8 }}
          >
            ×
          </button>
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
            <button ref={acceptBtnRef} className="btn primary" onClick={handleAccept}>
              Accept & Continue
            </button>
            <Link className="btn ghost" to="/privacy-policy">
              Read full policy
            </Link>
            {/* "Maybe later" now just closes without saving state */}
            <button className="btn ghost" onClick={handleClose} aria-label="Dismiss privacy notice">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
