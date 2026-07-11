import type { SkillGroup } from '../../types'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

interface SkillsProps {
  skills: SkillGroup[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-text-muted uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
