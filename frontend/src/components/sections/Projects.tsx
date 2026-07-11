import { useState } from 'react'
import type { Project } from '../../types'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const expanded = expandedSlug === project.slug
          return (
            <Card key={project.slug} className="flex flex-col">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-text-muted">{project.subtitle}</p>

              {project.metrics.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="rounded-chip bg-surface-2 px-2 py-1 font-mono text-xs text-accent"
                    >
                      {metric}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpandedSlug(expanded ? null : project.slug)}
                aria-expanded={expanded}
                className="mt-4 self-start text-sm font-medium text-accent hover:text-accent-hover"
              >
                {expanded ? 'Show less' : 'Show details'}
              </button>

              {expanded && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-muted">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
