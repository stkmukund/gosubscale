import { cn } from '@/lib/utils'

export function SubScaleLogo({
  className,
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight',
        tone === 'dark' ? 'text-ink' : 'text-white',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-6 text-brand" fill="none" aria-hidden="true">
        <path
          d="M4 15L11 8l4 4 6-8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 4h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
        <img
              src="/images/logo.png"
              alt="subscale-logo"
              loading="eager"
              className="w-[152px]"
            />
    </span>
  )
}
