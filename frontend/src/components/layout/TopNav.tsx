import { PROFILE, NAV_LINKS } from '../../content'
import { useLahoreTime } from '../../hooks/useLahoreTime'
import { Container } from './Container'

export function TopNav() {
  // Reuses the same clock the closing TimeZoneBridge shows in full, just
  // the Lahore side of it, so the nav bar always carries a live signal.
  const { tLahore } = useLahoreTime()

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <Container className="flex items-baseline gap-6 py-4 text-sm">
        <a href="#top" className="font-heading text-[17px]">
          {PROFILE.name}
        </a>
        <span className="flex-1" />
        <nav aria-label="Sections" className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-dim no-underline transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="hidden text-dim sm:inline">Lahore · {tLahore}</span>
      </Container>
    </header>
  )
}
