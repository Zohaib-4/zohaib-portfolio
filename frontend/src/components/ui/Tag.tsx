import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TagProps {
  children: ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-chip border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
