import { useState } from 'react'
import { SubScaleLogo } from '@/components/subscale-logo'
import { Link, useRouter } from '@/lib/router'
import { IconX } from '@/components/icons'

export function Navbar() {
  const { page, navigate } = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleBookDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    if (page === 'home') {
      const el = document.getElementById('book-a-demo')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // Navigate home with book demo anchor or open external
    navigate('/#book-a-demo')
    setTimeout(() => {
      const el = document.getElementById('book-a-demo')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-cream/95 backdrop-blur border-b border-black">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between">
        <div className="flex items-stretch min-w-0">
          <Link
            to="/"
            className="flex items-center border-r border-black px-3 py-2.5 sm:px-6 md:px-8 sm:py-3 hover:bg-black/5 transition-colors shrink-0"
            aria-label="SubScale Home"
          >
            <SubScaleLogo />
          </Link>
          <Link
            to="/blogs"
            className={`hidden sm:flex items-center border-r border-black px-5 md:px-8 font-display text-xs md:text-sm font-bold uppercase tracking-wider transition-colors shrink-0 ${
              page === 'blogs' || page === 'blog-detail'
                ? 'bg-black text-white hover:bg-black/90'
                : 'text-ink hover:bg-black/5'
            }`}
          >
            BLOGS
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-stretch shrink-0">
          <a
            href="#book-a-demo"
            onClick={handleBookDemo}
            className="flex items-center border-l border-black bg-black px-3.5 py-2.5 sm:px-8 md:px-10 sm:py-3 font-display text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-white hover:bg-ink/90 transition-colors whitespace-nowrap"
          >
            BOOK A DEMO
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex sm:hidden items-center justify-center border-l border-black px-3.5 text-ink hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <IconX className="size-5" />
            ) : (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-black bg-cream px-5 py-3 divide-y divide-black/10">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 font-display text-sm font-semibold text-ink hover:text-brand transition-colors"
          >
            HOME
          </Link>
          <Link
            to="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 font-display text-sm font-bold tracking-wider transition-colors ${
              page === 'blogs' || page === 'blog-detail' ? 'text-brand' : 'text-ink hover:text-brand'
            }`}
          >
            BLOGS
          </Link>
          <a
            href="#book-a-demo"
            onClick={(e) => {
              setMobileMenuOpen(false)
              handleBookDemo(e)
            }}
            className="block py-2.5 font-display text-sm font-semibold text-ink hover:text-brand transition-colors"
          >
            BOOK A DEMO
          </a>
        </div>
      )}
    </header>
  )
}
