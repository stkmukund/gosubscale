import { SubScaleLogo } from '@/components/subscale-logo'

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* <SubScaleLogo /> */}
            <h3 className="text-white">SubScaleLogo</h3>
            <p className="mt-4 text-sm text-white/60">
              Subscriptions That Scale Your Bottom Line.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Website
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p>gosubscale.com</p>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <a href="mailto:partnerships@gosubscale.com" className="transition-colors hover:text-brand">
                partnerships@gosubscale.com
              </a>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-white/60" aria-label="Footer">
              <a href="#" className="transition-colors hover:text-brand">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/45">&copy; Copyright 2026 SubScale&trade;</p>
      </div>
    </footer>
  )
}
