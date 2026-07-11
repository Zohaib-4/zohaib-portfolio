import { useState, type FormEvent } from 'react'
import type { Profile } from '../../types'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'

interface ContactProps {
  profile: Profile
}

const inputClasses =
  'w-full rounded-chip border border-border bg-surface px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent'

export function Contact({ profile }: ContactProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Backend wiring (POST /api/contact) lands in Phase 3.
    setSubmitted(true)
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 lg:grid-cols-2">
        {submitted ? (
          <p role="status" className="text-success">
            Thanks — I&rsquo;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                className={inputClasses}
              />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        )}

        <div className="space-y-2 text-sm text-text-muted">
          <p>Prefer email or socials?</p>
          <a href={`mailto:${profile.email}`} className="block hover:text-text">
            {profile.email}
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-text"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
