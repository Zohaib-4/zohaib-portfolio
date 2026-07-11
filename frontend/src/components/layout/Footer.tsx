import { ArrowUp, Mail } from 'lucide-react'
import type { Profile } from '../../types'
import { SOCIAL_ICONS } from '../../lib/socialIcons'
import { Container } from './Container'

const YEAR = new Date().getFullYear()

interface FooterProps {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center gap-6 text-sm text-text-muted md:flex-row md:justify-between">
        <p>
          © {YEAR} {profile.name} — built with React + FastAPI
        </p>
        <div className="flex items-center gap-4">
          {profile.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon]
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-text"
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {social.label}
              </a>
            )
          })}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-text"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 hover:text-text"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  )
}
