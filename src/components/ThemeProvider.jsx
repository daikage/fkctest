import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => {},
  cycleTheme: () => {},
})

function applyTheme(pref) {
  const root = document.documentElement
  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)')
  const prefersLight = mql ? mql.matches : false
  const isLight = pref === 'light' || (pref === 'system' && prefersLight)
  if (isLight) root.classList.add('light')
  else root.classList.remove('light')
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme-preference') || 'system' } catch { return 'system' }
  })

  useEffect(() => {
    applyTheme(theme)
    try { localStorage.setItem('theme-preference', theme) } catch {}
  }, [theme])

  useEffect(() => {
    if (theme !== 'system' || !window.matchMedia) return
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => applyTheme('system')
    mql.addEventListener ? mql.addEventListener('change', onChange) : mql.addListener(onChange)
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', onChange) : mql.removeListener(onChange)
    }
  }, [theme])

  const value = useMemo(() => ({
    theme,
    setTheme,
    cycleTheme: () => setTheme(prev => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light')),
  }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
