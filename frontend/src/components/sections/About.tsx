import type { Profile } from '../../types'
import { Section } from '../ui/Section'

interface AboutProps {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="about" title="About">
      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-text-muted">{profile.summary}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="font-medium text-text">Role</dt>
          <dd className="text-text-muted">{profile.headline}</dd>
          <dt className="font-medium text-text">Location</dt>
          <dd className="text-text-muted">{profile.location}</dd>
          <dt className="font-medium text-text">Education</dt>
          <dd className="text-text-muted">
            {profile.education.degree}, {profile.education.institution} (
            {profile.education.graduated})
          </dd>
        </dl>
      </div>
    </Section>
  )
}
