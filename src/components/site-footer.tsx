import { SubScaleLogo } from '@/components/subscale-logo'

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-4">
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
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/60" aria-label="Footer Navigation">
              <a href="#" className="transition-colors hover:text-brand">
                Home (gosubscale.com)
              </a>
              <a href="#blogs" className="transition-colors hover:text-brand">
                Blogs
              </a>
              {/* <a href="#book-a-demo" className="transition-colors hover:text-brand">
                Book a Demo
              </a> */}
            </nav>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact &amp; Legal
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
              <a
                href="mailto:partnerships@gosubscale.com"
                className="transition-colors hover:text-brand"
              >
                partnerships@gosubscale.com
              </a>
              {/* <a href="#" className="transition-colors hover:text-brand">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-brand">
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar: 3 columns */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/45 sm:flex-row">
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
