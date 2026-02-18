import { useEffect } from 'react'

export default function ClickSound({ src = '/sounds/click.mp3', volume = 0.35 }) {
  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = 'auto'
    audio.volume = volume

    const CLICKABLE_SELECTOR =
      'a[href], button:not([disabled]), [role="button"], input[type="submit"], input[type="button"], .btn, .menu-btn'

    const play = (el) => {
      if (!el) return
      // skip disabled/aria-disabled
      if (el.disabled || el.getAttribute?.('aria-disabled') === 'true') return
      try {
        audio.currentTime = 0
        audio.play()
      } catch {}
    }

    const onClick = (e) => {
      const el = (e.target instanceof Element) ? e.target.closest(CLICKABLE_SELECTOR) : null
      if (el) play(el)
    }

    const onKeyDown = (e) => {
      if (!(e.target instanceof Element)) return
      if (e.key === 'Enter' || e.key === ' ') {
        const el = e.target.closest(CLICKABLE_SELECTOR)
        if (el) play(el)
      }
    }

    document.addEventListener('click', onClick, true)
    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [src, volume])

  return null
}
