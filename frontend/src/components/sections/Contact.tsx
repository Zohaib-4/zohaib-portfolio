import { useState, type FormEvent } from 'react'
import { PROFILE } from '../../content'
import { submitContactForm } from '../../services/contactForm'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClasses =
  'w-full rounded-[10px] border border-hairline bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-dim/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50'

export function Contact() {
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
    <Section
      id="contact"
      kicker="Contact"
      title="Let's make your product quietly reliable."
    >
      <p className="r max-w-[58ch] text-[15.5px] leading-[1.75] text-dim">
        If you're hiring for a remote backend or full-stack role, or just want a
        second pair of eyes on a system, my inbox is open.
      </p>

      <div className="r mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {status === 'success' ? (
          <p role="status" className="font-heading text-lg italic text-accent">
            Thanks! I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-dim">
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
              <label htmlFor="email" className="mb-1.5 block text-sm text-dim">
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
                className="mb-1.5 block text-sm text-dim"
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
                className="text-sm text-[#dc2626]"
              >
                {errorMessage}
              </p>
            )}
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </Button>
          </form>
        )}

        <div className="flex flex-col gap-5">
          <a
            href={`mailto:${PROFILE.email}?subject=Hello%20Zohaib`}
            className="text-[15px] font-semibold text-ink no-underline hover:text-accent"
          >
            {PROFILE.email} →
          </a>
          <nav aria-label="Profiles" className="flex gap-6 text-sm">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="border-b border-hairline pb-0.5 text-dim no-underline hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border-b border-hairline pb-0.5 text-dim no-underline hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.resume}
              className="border-b border-hairline pb-0.5 text-dim no-underline hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </nav>
          <span className="text-[13px] text-dim">I reply within 24 hours.</span>
        </div>
      </div>
    </Section>
  )
}
