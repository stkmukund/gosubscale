import { SubScaleLogo } from '@/components/subscale-logo'
import { Link } from '@/lib/router'

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-12 sm:px-6 md:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-10 sm:grid-cols-2 sm:gap-10 sm:pb-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-3 sm:space-y-4">
            <SubScaleLogo variant="footer" />
            <p className="text-sm leading-relaxed text-white/60">
              Subscriptions That Scale Your Bottom Line.
            </p>
            <p className="text-xs text-white/40">
              Guaranteed performance-based revenue growth for e-commerce brands.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <nav className="mt-3 sm:mt-4 flex flex-col gap-2 text-sm text-white/60" aria-label="Footer Navigation">
              <Link to="/" className="transition-colors hover:text-brand">
                Home (gosubscale.com)
              </Link>
              <Link to="/blogs" className="transition-colors hover:text-brand">
                Blogs
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact & Legal */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact &amp; Legal
            </p>
            <div className="mt-3 sm:mt-4 flex flex-col gap-2 text-sm text-white/60">
              <a
                href="mailto:partnerships@gosubscale.com"
                className="transition-colors hover:text-brand break-all sm:break-normal"
              >
                partnerships@gosubscale.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/45 text-center sm:flex-row sm:text-left">
          <p>&copy; Copyright 2026 SubScale&trade;</p>
          <p>All Rights Reserved</p>
          <a href="#" className="transition-colors hover:text-brand">
            Back to Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
