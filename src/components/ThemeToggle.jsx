import { useTheme } from './ThemeProvider.jsx'

const labels = { light: 'Light', dark: 'Dark', system: 'System' }

export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme()
  const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
  const icon = theme === 'light' ? '🌞' : theme === 'dark' ? '🌙' : '🖥'

  return (
    <button
      type="button"
      className="menu-btn"
      onClick={cycleTheme}
      aria-label={`Theme: ${labels[theme]}. Switch to ${labels[next]}`}
      title={`Theme: ${labels[theme]} (next: ${labels[next]})`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
    >
      <span aria-hidden="true">{icon}</span>
      <span style={{ fontWeight: 700 }}>{labels[theme]}</span>
    </button>
  )
}