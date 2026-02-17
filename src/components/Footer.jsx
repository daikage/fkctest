import { Link } from 'react-router-dom'
import { IconInstagram, IconTikTok, IconLinkedIn } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="brand" style={{ marginBottom: 8 }}>
            {/* Replace inline SVG with your logo image */}
            <img
              className="logo"
              src="/brand/logo-mark.png"  // same file as navbar, or use a horizontal logo: /brand/logo-horizontal.svg
              alt="FortKnox Checks"
              width={28}
              height={28}
            />
            <span>FortKnox Checks</span>
          </div>
          <p className="text-muted">
            Fort Knox Verification & Checks Services Limited delivers timely, high-quality background screening across Nigeria.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/services">Services</Link><br/>
          <Link to="/why-us">Why Us</Link><br/>
          <Link to="/process">Process</Link><br/>
          <Link to="/contact">Contact</Link><br/>
          <Link to="/privacy-policy">Privacy Policy</Link><br/>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p className="text-muted">Email: info@fortknoxchecks.com</p>
          <p className="text-muted">Phone: +2348122123035 and +2347010001000</p>
          <p className='text-muted'>Address: 3 Murphy Atsepoyi Crescent, Ogudu, GRA, Lagos</p>

          <div style={{ height:1, background:'rgba(255,255,255,0.08)', margin:'12px 0' }} />

          <h4>Connect</h4>
          <div style={{ display:'flex', gap: 12, alignItems:'center' }}>
            <a
              href="https://www.instagram.com/fortknoxchecks?igsh=MWZwb3ZuNjNsMXZjOQ=="
              target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              title="Instagram"
              className="btn ghost"
              style={{ padding: 8, borderRadius: 999 }}
            >
              <IconInstagram color="var(--gold)" />
            </a>
            <a
              href="https://www.tiktok.com/@fortknoxchecks?_t=ZM-8wvTHaKsRBV&_r=1"
              target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              title="TikTok"
              className="btn ghost"
              style={{ padding: 8, borderRadius: 999 }}
            >
              <IconTikTok color="var(--gold)" />
            </a>
            <a
              href="https://www.linkedin.com/company/fort-knox-checks/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BET%2B9W2g0QzqXeAdL%2BUprqA%3D%3D"
              target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              title="LinkedIn"
              className="btn ghost"
              style={{ padding: 8, borderRadius: 999 }}
            >
              <IconLinkedIn color="var(--gold)" />
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 16, color: 'var(--muted)', fontSize: 14 }}>
        © {year} Fort Knox Checks. All rights reserved.
      </div>
    </footer>
  )
}