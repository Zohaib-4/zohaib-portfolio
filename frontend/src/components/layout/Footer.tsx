import type { Profile } from '../../types'
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
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text"
            >
              {social.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="hover:text-text">
            Email
          </a>
          <a href="#hero" className="hover:text-text">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}
