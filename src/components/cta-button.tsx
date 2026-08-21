import type { ReactNode } from 'react'
import { IconArrowUpRight } from '@/components/icons'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'brand' | 'dark' | 'outline'
  size?: 'md' | 'lg'
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export function CtaButton({
  children,
  href = '#book-a-demo',
  variant = 'brand',
  size = 'md',
  className,
  onClick,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold uppercase tracking-wide text-center max-w-full leading-snug transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        variant === 'brand'
          ? 'bg-brand text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] hover:bg-brand/90 hover:shadow-[0_12px_32px_-10px_rgba(16,185,129,0.7)]'
          : variant === 'dark'
          ? 'bg-ink text-white hover:bg-ink/90'
          : 'border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30',
        size === 'lg'
          ? 'px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm md:text-base'
          : 'px-5 py-2.5 sm:px-6 sm:py-3 text-xs md:text-sm',
        className,
      )}
    >
      <span className="truncate sm:overflow-visible sm:whitespace-normal">{children}</span>
      <IconArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
