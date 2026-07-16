import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import type { Profile } from '../../types'
import { SOCIAL_ICONS } from '../../lib/socialIcons'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'
import { submitContactForm } from '../../services/contactForm'

interface ContactProps {
  profile: Profile
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClasses =
  'w-full rounded-chip border border-border bg-surface px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50'

export function Contact({ profile }: ContactProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await submitContactForm({
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        message: String(formData.get('message') ?? ''),
        botcheck: String(formData.get('botcheck') ?? ''),
      })
      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      )
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 lg:grid-cols-2">
        {status === 'success' ? (
          <p role="status" className="text-success">
            Thanks! I&rsquo;ll get back to you soon.
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
                disabled={status === 'submitting'}
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
                disabled={status === 'submitting'}
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
                disabled={status === 'submitting'}
                className={inputClasses}
              />
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="botcheck">Leave this field empty</label>
              <input
                id="botcheck"
                name="botcheck"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            {status === 'error' && (
              <p
                role="alert"
                aria-live="assertive"
                className="text-sm text-danger"
              >
                {errorMessage}
              </p>
            )}
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </Button>
          </form>
        )}

        <div className="space-y-2 text-sm text-text-muted">
          <p>Prefer email or socials?</p>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 hover:text-text"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          {profile.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon]
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-text"
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {social.label}
              </a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
