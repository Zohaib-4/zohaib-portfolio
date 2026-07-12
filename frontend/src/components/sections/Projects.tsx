import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Project } from '../../types'
import { cn } from '../../lib/cn'
import { Section } from '../ui/Section'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(
    () => new Set(projects[0] ? [projects[0].slug] : []),
  )

  function toggle(slug: string) {
    setExpandedSlugs((current) => {
      const next = new Set(current)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }

  return (
    <Section id="projects" title="Projects">
      <p className="-mt-6 mb-8 text-sm text-text-muted">
        Click a project to expand full details.
      </p>

      <div className="flex flex-col gap-4">
        {projects.map((project) => {
          const expanded = expandedSlugs.has(project.slug)
          return (
            <div
              key={project.slug}
              className="overflow-hidden rounded-card border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => toggle(project.slug)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left hover:bg-surface-2"
              >
                <div>
                  <div className="text-base font-bold">
                    {project.name} · {project.subtitle}
                  </div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    {project.stack.join(' · ')}
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    'h-[18px] w-[18px] flex-none text-text-muted transition-transform',
                    expanded && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>

              {expanded && (
                <ul className="list-disc space-y-2.5 border-t border-border px-6 py-5 pl-9 text-sm text-text-muted">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
