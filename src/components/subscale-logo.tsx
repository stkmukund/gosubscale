import { cn } from '@/lib/utils'

export function SubScaleLogo({
  className,
  tone = 'dark',
   variant = 'header'
}: {
  className?: string
  tone?: 'dark' | 'light',
   variant?: 'header' | 'footer'
}) {
    const logoSrc = variant === 'footer' ? '/images/footer-logo.png': '/images/logo.png'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight',
        tone === 'dark' ? 'text-ink' : 'text-white',
        className,
      )}
    >
      {/* <svg viewBox="0 0 24 24" className="size-6 text-brand" fill="none" aria-hidden="true">
        <path
          d="M4 15L11 8l4 4 6-8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 4h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg> */}
        <img
              src={logoSrc}
              alt="subscale-logo"
              loading="eager"
              className="w-[152px]"
            />
    </span>
  )
}
