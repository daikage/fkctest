import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ textAlign: 'center', padding: 32 }}>
          <h2>Page not found</h2>
          <p className="text-muted">The page you’re looking for doesn’t exist.</p>
          <div style={{ marginTop: 12 }}>
            <Link className="btn primary" to="/">Go to Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
