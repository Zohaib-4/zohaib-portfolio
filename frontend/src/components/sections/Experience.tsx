import type { Experience as ExperienceItem } from '../../types'
import { Section } from '../ui/Section'

interface ExperienceProps {
  experience: ExperienceItem[]
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-border pl-6">
        {experience.map((role) => (
          <li key={`${role.company}-${role.start}`} className="relative">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-bg bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">
                {role.role} · {role.company}
              </h3>
              <p className="font-mono text-xs text-text-muted">
                <time>{role.start}</time> –{' '}
                {role.end ? (
                  <time>{role.end}</time>
                ) : (
                  <span className="font-medium text-success">Present</span>
                )}
              </p>
            </div>
            <p className="mt-1 text-sm text-text-muted">{role.location}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-muted">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
