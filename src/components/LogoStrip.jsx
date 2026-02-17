import { useState } from 'react'

function LogoItem({ name, src, href, height = 38, loading = 'lazy' }) {
  const [error, setError] = useState(false)
  const img = (
    <img
      src={src}
      alt={name}
      height={height}
      loading={loading}
      onError={() => setError(true)}
      style={{ height, width: 'auto' }}
    />
  )
  const fallback = (
    <div className="logo-fallback" aria-label={name}>
      {name}
    </div>
  )
  const content = error ? fallback : img
  return href ? (
    <a className="logo-item" href={href} target="_blank" rel="noopener noreferrer" title={name}>
      {content}
    </a>
  ) : (
    <div className="logo-item">{content}</div>
  )
}

export default function LogoStrip({
  title = 'Trusted by leading institutions',
  height = 38,
  items = [],
}) {
  return (
    <section aria-label="Client logos" className="section alt" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="container">
        {title && (
          <div className="intro">
            <p className="text-muted" style={{ fontWeight: 700, letterSpacing: 0.3 }}>{title}</p>
          </div>
        )}
        <div className="logos-row">
          {items.map((it) => (
            <LogoItem key={it.name} {...it} height={height} />
          ))}
        </div>
      </div>
    </section>
  )
}
