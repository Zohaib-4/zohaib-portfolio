import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from '../layout/Container'

interface SectionProps {
  id: string
  kicker: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  kicker,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-[clamp(56px,10vh,110px)]', className)}>
      <Container>
        <div className="sectionhead r mb-[clamp(36px,6vh,64px)]">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-accent">
            {kicker}
          </p>
          <h2 className="mt-2 max-w-[24ch] text-[clamp(1.9rem,3.6vw,2.7rem)]">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  )
}
