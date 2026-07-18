import { PROFILE } from '../../content'
import { Container } from './Container'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <Container className="flex flex-wrap gap-6 py-6 text-[13px] text-dim">
        <span>
          © {YEAR} {PROFILE.name}
        </span>
        <span className="flex-1" />
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="text-dim no-underline hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-dim no-underline hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="text-dim no-underline hover:text-accent"
        >
          Email
        </a>
      </Container>
    </footer>
  )
}
