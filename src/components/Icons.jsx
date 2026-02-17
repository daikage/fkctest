export function IconShield({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function IconClock({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function IconMap({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 6l5-2 5 2 0 12-5 2-5-2V6z" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="10" r="2" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
}

export function IconLock({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M8 10V8a4 4 0 118 0v2" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
}

export function IconCheck({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 10l3 3 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconInstagram({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1.2" fill={color} />
    </svg>
  )
}

export function IconTikTok({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M14 5c.8 1.7 2.2 3.1 4 3.6v2c-1.7-.2-3.3-1-4.5-2.2V15a5 5 0 11-3.5-4.8v2A3 3 0 1012 17V5h2z" fill={color} />
    </svg>
  )
}

export function IconLinkedIn({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5" />
      <circle cx="8" cy="8" r="1.6" fill={color} />
      <path d="M7.5 10.5v7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12.5c1 0 1.8.5 2.2 1.3v3.7h2v-4c0-2.2-1.7-3.2-3.2-3.2-1 .1-2 .6-2.6 1.5v4.7h2v-3.8c.2-.1.4-.2.6-.2z" fill={color} />
    </svg>
  )
}