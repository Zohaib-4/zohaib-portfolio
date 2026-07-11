import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn('py-12 md:py-16 lg:py-24', className)}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {title && (
          <h2
            id={`${id}-heading`}
            className="mb-8 text-2xl font-semibold sm:text-3xl"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
