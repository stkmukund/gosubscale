import { useState } from 'react'
import { IconX } from '@/components/icons'
import { Link } from '@/lib/router'

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="relative z-50 bg-ink px-10 py-2.5 text-center font-mono text-xs text-white sm:text-sm">
      <p className="mx-auto max-w-3xl tracking-tight">
        RevBoost is now <span className="font-bold text-brand">SubScale.</span>{' '}
        <Link
          to="/blogs/detail.html?slug=revboost-is-now-subscale"
          className="text-brand underline-offset-4 hover:underline"
        >
          Check out our blog &rarr;
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <IconX className="size-4" />
      </button>
    </div>
  )
}
