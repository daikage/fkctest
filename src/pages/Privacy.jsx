export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <article className="card" style={{ display: 'grid', gap: 12 }}>
          <div className="badge">Privacy Policy</div>
          <h2>Fort Knox Verification & Checks Services Ltd — Privacy Policy</h2>

          <p className="text-muted">
            Effective date: {new Date().getFullYear()} • Last updated: {new Date().toLocaleDateString()}
          </p>

          <h3>1. Overview</h3>
          <p>
            We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.
          </p>

          <h3>2. Information we collect</h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Contact details (name, company, email, phone)</li>
            <li>Inquiry and service request information</li>
            <li>Operational evidence necessary for verification (as scoped and permitted)</li>
            <li>Basic site analytics (aggregate, non‑identifying) to improve performance</li>
          </ul>

          <h3>3. How we use information</h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Respond to inquiries and provide quotes</li>
            <li>Deliver background checks and verification services</li>
            <li>Improve our processes, reporting, and client experience</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h3>4. Legal basis</h3>
          <p>
            Our processing is based on consent, contract performance, and legitimate interests in providing secure verification services, as applicable.
          </p>

          <h3>5. Data sharing</h3>
          <p>
            We do not sell personal data. We may share limited information with trusted partners strictly for verification purposes and only under confidentiality obligations.
          </p>

          <h3>6. Security</h3>
          <p>
            We implement access controls, evidence management, and secure storage to protect information. Access is granted on a need‑to‑know basis.
          </p>

          <h3>7. Retention</h3>
          <p>
            We retain data only as long as necessary for the stated purposes and legal requirements; after which it is securely deleted or archived.
          </p>

          <h3>8. Your rights</h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Access, correction, and deletion (subject to legal and contractual constraints)</li>
            <li>Withdraw consent where processing relies on it</li>
            <li>Object to certain processing and request restrictions</li>
          </ul>

          <h3>9. Contact</h3>
          <p>
            For privacy inquiries, contact: info@fortknoxchecks.com • Phone: +2348122123035 or +2347010001000
          </p>

          <h3>10. Updates</h3>
          <p>
            We may update this policy from time to time. Material changes will be reflected on this page with a new effective date.
          </p>
        </article>
      </div>
    </section>
  )
}
