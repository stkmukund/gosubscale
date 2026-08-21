import { cn } from '@/lib/utils'

export function SubScaleLogo({
  className,
  tone = 'dark',
  variant = 'header',
}: {
  className?: string
  tone?: 'dark' | 'light'
  variant?: 'header' | 'footer'
}) {
  // On dark backgrounds (tone="light"), use the white footer logo; otherwise the dark header logo
  const logoSrc = tone === 'light' || variant === 'footer' ? '/images/footer-logo.png' : '/images/logo.png'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight',
        tone === 'dark' ? 'text-ink' : 'text-white',
        className,
      )}
    >
      <img
        src={logoSrc}
        alt="SubScale logo"
        loading="eager"
        className={cn(
          'h-auto object-contain transition-all',
          variant === 'footer' ? 'w-[130px] sm:w-[152px]' : 'w-[115px] xs:w-[130px] sm:w-[152px]',
        )}
      />
    </span>
  )
}
