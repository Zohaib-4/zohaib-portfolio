import { useEffect } from 'react'

/**
 * Fades/slides elements with the `.r` class into view as they scroll into
 * the viewport, adding `.in` (see the `.r` / `.r.in` rules in index.css).
 * Runs once for the whole page; call from the top-level page component.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.r')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
