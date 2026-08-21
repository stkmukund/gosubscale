import { SubScaleLogo } from '@/components/subscale-logo'
import { Link } from '@/lib/router'

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0b0f] border-t border-white/[0.06] px-5 py-14 sm:px-6 md:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.06] pb-10 sm:grid-cols-2 md:grid-cols-3 sm:pb-12">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-1">
            <SubScaleLogo tone="light" />
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Subscriptions that scale your bottom line. Performance-based revenue growth for
              high-volume DTC and Shopify brands.
            </p>
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs text-white/30">$75.8M+ GMV processed in 2025</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5 text-sm text-white/40" aria-label="Footer Navigation">
              <Link to="/" className="transition-colors hover:text-brand">Home</Link>
              <Link to="/blog" className="transition-colors hover:text-brand">Blog</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/40">
              <a
                href="mailto:partnerships@gosubscale.com"
                className="transition-colors hover:text-brand break-all sm:break-normal"
              >
                partnerships@gosubscale.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/30 text-center sm:flex-row sm:text-left">
          <p>&copy; 2026 SubScale&trade;. All Rights Reserved.</p>
          <a href="#" className="transition-colors hover:text-brand">Back to Top &uarr;</a>
        </div>
      </div>
    </footer>
  )
}
