import type { ReactNode } from 'react'
import { IconArrowUpRight } from '@/components/icons'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'brand' | 'dark'
  size?: 'md' | 'lg'
  className?: string
}

export function CtaButton({
  children,
  href = '#book-a-demo',
  variant = 'brand',
  size = 'md',
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        variant === 'brand'
          ? 'bg-brand text-white shadow-[0_10px_30px_-10px_rgba(31,201,90,0.7)] hover:bg-brand/90 hover:shadow-[0_16px_40px_-12px_rgba(31,201,90,0.75)]'
          : 'bg-ink text-white hover:bg-ink/90',
        size === 'lg' ? 'px-8 py-4 text-sm md:text-base' : 'px-6 py-3 text-xs md:text-sm',
        className,
      )}
    >
      {children}
      <IconArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
