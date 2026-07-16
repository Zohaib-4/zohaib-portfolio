import { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import type { Profile } from '../../types'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { cn } from '../../lib/cn'
import { SOCIAL_ICONS } from '../../lib/socialIcons'
import { Button } from '../ui/Button'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

interface SideNavProps {
  profile: Profile
}

export function SideNav({ profile }: SideNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)
  const role = profile.headline.split(' · ')[0]

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-bg/80 px-4 backdrop-blur lg:hidden">
        <a href="#zohaib" className="font-heading text-lg font-bold">
          MZ
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-chip border border-border"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-b border-border lg:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
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
            <Button
              href="/resume.pdf"
              download
              variant="secondary"
              className="mt-2"
            >
              Résumé
            </Button>
          </div>
        </nav>
      )}

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col gap-8 overflow-y-auto border-r border-border bg-bg px-7 py-10 lg:flex">
        <a href="#zohaib" className="block">
          <div className="font-heading text-lg font-bold leading-tight text-text">
            {profile.name}
          </div>
          <p className="mt-1.5 text-sm font-medium text-text-muted">{role}</p>
          <p className="mt-0.5 text-xs text-text-muted/80">
            {profile.location}
          </p>
        </a>

        <nav className="flex flex-col gap-0.5" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'flex items-center gap-2.5 rounded-chip px-3 py-2 text-sm transition-colors',
                  active
                    ? 'bg-surface-2 font-semibold text-text'
                    : 'font-medium text-text-muted hover:bg-surface-2 hover:text-text',
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 flex-none rounded-full transition-colors',
                    active ? 'bg-accent' : 'bg-border',
                  )}
                  aria-hidden="true"
                />
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <Button href="/resume.pdf" download variant="secondary">
            Résumé
          </Button>
          <div className="flex flex-col gap-2 text-sm text-text-muted">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 hover:text-text"
            >
              <Mail className="h-4 w-4 flex-none" aria-hidden="true" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 hover:text-text"
            >
              <Phone className="h-4 w-4 flex-none" aria-hidden="true" />
              {profile.phone}
            </a>
            <div className="mt-1 flex items-center gap-4">
              {profile.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-text-muted hover:text-text"
                  >
                    {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                  </a>
                )
              })}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}
