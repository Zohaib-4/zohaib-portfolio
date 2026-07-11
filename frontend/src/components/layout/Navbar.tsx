import { useState } from 'react'
import { API_BASE_URL } from '../../services/apiClient'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" className="font-heading text-lg font-bold">
          MZ
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'text-sm text-text-muted hover:text-text',
                activeId === link.id && 'font-medium text-text',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href={`${API_BASE_URL}/api/resume`} variant="secondary">
            Résumé
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-chip border border-border md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-t border-border md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-chip px-3 py-2 text-sm text-text hover:bg-surface-2"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 px-3">
              <ThemeToggle />
              <Button
                href={`${API_BASE_URL}/api/resume`}
                variant="secondary"
                className="flex-1"
              >
                Résumé
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  )
}
