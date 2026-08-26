import { useState } from 'react'
import { SubScaleLogo } from '@/components/subscale-logo'
import { Link } from '@/lib/router'
import { BookADemoModal } from '@/components/book-a-demo-modal'
import { PrivacyPolicyModal } from '@/components/privacy-policy-modal'
import { IconLinkedIn, IconInstagram, IconArrowUpRight } from '@/components/icons'

export function SiteFooter() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false)
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <footer className="bg-black px-5 py-12 sm:px-6 md:px-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-10 sm:grid-cols-2 sm:gap-10 sm:pb-12 md:grid-cols-3">
          {/* Column 1: Brand & Address & Social */}
          <div className="space-y-4">
            <Link to="/" aria-label="SubScale Home" className="inline-block transition-opacity hover:opacity-80">
              <SubScaleLogo variant="footer" />
            </Link>
            <address className="not-italic text-sm leading-relaxed text-white space-y-0.5">
              <p>SubScale Partners LLC</p>
              <p>8 The Green, No 26268</p>
              <p>Dover, DE 19901</p>
            </address>
            <p className='font-display font-semibold uppercase tracking-wider text-white pt-1'>Follow Us</p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.linkedin.com/company/gosubscale/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SubScale on LinkedIn"
                className="flex size-11 items-center justify-center -m-2.5 p-2.5 text-white transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
              >
                <IconLinkedIn size={24} className="size-6 text-current" />
                <span className="sr-only">SubScale on LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/gosubscale/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SubScale on Instagram"
                className="flex size-11 items-center justify-center -m-2.5 p-2.5 text-white transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
              >
                <IconInstagram size={24} className="size-6 text-current" />
                <span className="sr-only">SubScale on Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <nav className="mt-3 sm:mt-4 flex flex-col items-start gap-2.5 text-sm text-white" aria-label="Footer Navigation">
              {/* <Link to="/" className="transition-colors hover:text-brand">
                Home
              </Link> */}
              <Link to="/blogs" className="transition-colors text-white hover:text-brand">
                Blogs
              </Link>
              <button
                type="button"
                onClick={() => setIsBookDemoOpen(true)}
                className="group mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-brand/90 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-brand"
              >
                <span>Book A Demo</span>
                <IconArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </nav>
          </div>

          {/* Column 3: Contact & Legal */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Subscale™
            </p>
            <div className="mt-3 sm:mt-4 flex flex-col gap-2 text-sm text-white">
              <button
                type="button"
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-left transition-colors hover:text-brand break-all sm:break-normal cursor-pointer"
              >
                Privacy Policy
              </button>
              <a
                href="/"
                className="transition-colors hover:text-brand break-all sm:break-normal"
              >
               Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 text-[10px] sm:text-xs text-white text-center sm:flex-row sm:text-left">
          <p>&copy; Copyright {new Date().getFullYear()} SubScale Partners LLC. All rights reserved.</p>
          {/* <p>All Rights Reserved</p> */}
          {/* <a href="#" className="transition-colors text-white hover:text-brand">
            Back to Top &uarr;
          </a> */}
        </div>
      </div>

      <BookADemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
    </footer>
  )
}
