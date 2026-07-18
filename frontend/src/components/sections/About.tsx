import { Section } from '../ui/Section'

const MILESTONES = [
  { y: '2025–now', w: 'Techleadz · Software Engineer' },
  { y: 'Fall 2024', w: 'Programmers Force · Data Science Intern' },
  { y: '2021–2025', w: 'FAST-NU · BS Computer Science' },
]

export function About() {
  return (
    <Section id="about" kicker="About" title="The short version.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:gap-16">
        <div className="r max-w-[60ch] space-y-[1.2em] text-[15.5px] leading-[1.85] text-dim">
          <p>
            I studied computer science at{' '}
            <b className="font-semibold text-ink">FAST National University</b>{' '}
            (class of 2025). Before graduating, I spent a fall at Programmers
            Force teaching Python to walk past anti-bot walls, pulling{' '}
            <b className="font-semibold text-ink">
              5,000+ records from 100+ sites
            </b>
            , then built LLM-based semantic search over everything we collected.
          </p>
          <p>
            Since June 2025 I've been a software engineer at{' '}
            <b className="font-semibold text-ink">Techleadz</b>, shipping
            production systems for enterprise clients on AWS and GCP: APIs, data
            pipelines, CI/CD, SSO integrations, and the on-call rotation that
            follows. I like owning things end to end: the architecture
            discussion, the code, and the pager.
          </p>
          <p>
            Working remotely across time zones is my normal, not an adjustment:
            my clients already are.
          </p>
        </div>

        <div className="r border-t-2 border-ink pt-1.5">
          {MILESTONES.map((m) => (
            <div
              key={m.y}
              className="flex gap-5 border-b border-hairline py-3.5 text-[13.5px]"
            >
              <span className="w-[7.5em] flex-none font-semibold tracking-[.04em] text-accent">
                {m.y}
              </span>
              <span className="text-dim">{m.w}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
