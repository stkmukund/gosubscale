import { useState } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="relative z-50 bg-ink px-10 py-2.5 text-center font-mono text-xs text-white sm:text-sm">
      <p className="mx-auto max-w-3xl tracking-tight">
        RevBoost is now <span className="font-bold text-brand">SubScale.</span>{' '}
        <a href="#" className="text-brand underline-offset-4 hover:underline">
          Check out our blog &rarr;
        </a>
      </p>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
