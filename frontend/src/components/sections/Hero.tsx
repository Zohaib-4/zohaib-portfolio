import { useState } from 'react'
import { PROFILE } from '../../content'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

export function Hero() {
  const [photoMissing, setPhotoMissing] = useState(false)

  return (
    <section
      id="top"
      className="flex min-h-[calc(88svh-73px)] flex-col justify-center py-16"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:gap-16">
          <div>
            <p className="r flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.12em] text-dim">
              <span
                className="pulse h-2 w-2 flex-none rounded-full bg-accent"
                aria-hidden="true"
              />
              Lahore, Pakistan · working with teams worldwide
            </p>

            <h1 className="r mt-3 max-w-[18ch] text-[clamp(2.5rem,5.6vw,4.4rem)] leading-[1.08] tracking-[-.015em]">
              I build the quiet systems behind products people{' '}
              <span className="mark">rely on</span>.
            </h1>

            <p className="r mt-6 max-w-[58ch] text-[clamp(15.5px,1.7vw,17.5px)] leading-[1.75] text-dim">
              I'm a software engineer working from Lahore with teams across time
              zones. Most recently: an{' '}
              <strong className="font-semibold text-ink">
                ad-operations platform for a Big Tech company
              </strong>
              , and{' '}
              <strong className="font-semibold text-ink">
                process automation for a logistics giant
              </strong>{' '}
              that answers 1,000+ logistics professionals in under a second. I
              take things all the way: architecture, code, cloud, and the
              on-call shift after launch.
            </p>

            <div className="r mt-9 flex flex-wrap items-center gap-7">
              <Button href={`mailto:${PROFILE.email}?subject=Hello%20Zohaib`}>
                Email me →
              </Button>
              <nav aria-label="Profiles" className="flex gap-6 text-sm">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-hairline text-dim no-underline pb-0.5 hover:border-accent hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-hairline text-dim no-underline pb-0.5 hover:border-accent hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href={PROFILE.resume}
                  className="border-b border-hairline text-dim no-underline pb-0.5 hover:border-accent hover:text-accent"
                >
                  Résumé
                </a>
              </nav>
              <span className="text-[13px] text-dim">
                I reply within 24 hours.
              </span>
            </div>
          </div>

          <figure
            className={`r portrait order-first max-w-[190px] justify-self-start md:order-none md:max-w-[320px] md:justify-self-end ${photoMissing ? 'missing' : ''}`}
          >
            <div className="frame -rotate-2 transition-transform duration-300 hover:rotate-0">
              <img
                src="/me.png"
                alt="Muhammad Zohaib"
                onError={() => setPhotoMissing(true)}
              />
              <div className="ph" aria-hidden="true">
                <span>MZ</span>
              </div>
            </div>
            <figcaption className="mt-3 text-center font-heading text-[13.5px] italic text-dim md:text-center">
              Lahore, most days. Your time zone, most calls.
            </figcaption>
          </figure>
        </div>

        <a
          href="#work"
          className="r mt-12 inline-block text-xs font-semibold uppercase tracking-[.14em] text-dim no-underline hover:text-accent"
        >
          Selected work ↓
        </a>
      </Container>
    </section>
  )
}
