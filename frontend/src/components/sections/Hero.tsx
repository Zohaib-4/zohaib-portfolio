import type { Profile } from '../../types'
import { API_BASE_URL } from '../../services/apiClient'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

interface HeroProps {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      className="grid min-h-[85vh] grid-cols-1 content-center border-b border-border py-16"
    >
      <Container>
        <div className="max-w-2xl">
          <h1 className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-4 font-mono text-sm text-text-muted">
            Python · FastAPI · Django · React · SQL · {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`${API_BASE_URL}/api/resume`}>Download résumé</Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
