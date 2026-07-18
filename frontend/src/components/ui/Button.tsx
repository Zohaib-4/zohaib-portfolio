import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary'

interface ButtonProps {
  variant?: Variant
  href?: string
  download?: boolean | string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: MouseEventHandler
  className?: string
  children: ReactNode
  target?: string
  rel?: string
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-accent hover:-translate-y-px',
  secondary:
    'border border-hairline text-ink hover:border-accent hover:text-accent',
}

export function Button({
  variant = 'primary',
  href,
  download,
  type = 'button',
  disabled,
  onClick,
  className,
  children,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-chip px-6 py-3.5 text-[15px] font-semibold no-underline transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50',
    variantStyles[variant],
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
