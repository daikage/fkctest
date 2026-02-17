export default function SectionHeading({ eyebrow, title, lead, align = 'center' }) {
  return (
    <div className="intro" style={{ textAlign: align }}>
      {eyebrow && <div className="badge">{eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}