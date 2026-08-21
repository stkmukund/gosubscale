import { useState } from 'react'
import { IconX } from '@/components/icons'
import { Link } from '@/lib/router'

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="relative z-50 bg-brand px-4 pr-10 py-2 sm:px-6 sm:py-2 text-center text-xs text-white sm:text-sm">
      <p className="mx-auto max-w-3xl tracking-tight leading-normal">
        <span className="font-semibold">RevBoost is now SubScale.</span>{' '}
        <Link
          to="/blog/revboost-is-now-subscale"
          className="underline underline-offset-4 hover:no-underline whitespace-nowrap"
        >
          Read the announcement &rarr;
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-white/80 transition-colors hover:text-white"
      >
        <IconX className="size-4" />
      </button>
    </div>
  )
}
