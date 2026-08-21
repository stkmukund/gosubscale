import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SubScaleLogo } from '@/components/subscale-logo'
import { Link, useRouter } from '@/lib/router'
import { IconX, IconMenu, IconArrowUpRight } from '@/components/icons'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { page, navigate } = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleBookDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (page === 'home') {
      document.getElementById('book-a-demo')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate('/#book-a-demo')
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500',
          scrolled
            ? 'bg-[#0a0b0f]/85 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 md:px-8 h-16 sm:h-18">
          {/* Left: Hamburger (mobile) + Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center p-2 -ml-2 text-white/80 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <IconMenu className="size-5" />
            </button>

            <Link to="/" className="flex items-center shrink-0" aria-label="SubScale Home">
              <SubScaleLogo tone="light" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 ml-6">
              <Link
                to="/blog"
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  page === 'blogs' || page === 'blog-detail'
                    ? 'text-white bg-white/10'
                    : 'text-white/50 hover:text-white hover:bg-white/5',
                )}
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#book-a-demo"
              onClick={handleBookDemo}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand/90 hover:shadow-[0_12px_32px_-10px_rgba(16,185,129,0.7)]"
            >
              Book an Audit
              <IconArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-[70] w-[300px] max-w-[85vw] bg-zinc-950/95 backdrop-blur-xl border-r border-white/[0.06] md:hidden flex flex-col"
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
                <SubScaleLogo tone="light" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <IconX className="size-5" />
                </button>
              </div>

              {/* Menu items */}
              <nav className="flex flex-col gap-1 px-3 py-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3.5 rounded-xl text-base font-medium transition-colors',
                    page === 'home'
                      ? 'text-white bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5',
                  )}
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3.5 rounded-xl text-base font-medium transition-colors',
                    page === 'blogs' || page === 'blog-detail'
                      ? 'text-white bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5',
                  )}
                >
                  Blog
                </Link>
              </nav>

              {/* CTA at bottom */}
              <div className="mt-auto p-5 border-t border-white/[0.06]">
                <a
                  href="#book-a-demo"
                  onClick={handleBookDemo}
                  className="group flex items-center justify-center gap-2 w-full rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand/90"
                >
                  Book an Audit
                  <IconArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
