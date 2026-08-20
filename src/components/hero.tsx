import { CtaButton } from '@/components/cta-button'
import { SubScaleLogo } from '@/components/subscale-logo'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section className="bg-cream">
      {/* Header Bar */}
      <header className="w-full bg-cream border-b border-black">
        <div className="mx-auto flex max-w-7xl items-stretch justify-between">
          <div className="flex items-stretch">
            <div className="flex items-center border-r border-black px-4 py-3 sm:px-6 md:px-8">
              <SubScaleLogo />
            </div>
            <a
              href="#blogs"
              className="hidden sm:flex items-center border-r border-black px-6 md:px-8 font-display text-xs md:text-sm font-bold uppercase tracking-wider text-ink hover:bg-black/5 transition-colors"
            >
              BLOGS
            </a>
          </div>

          <a
            href="#book-a-demo"
            className="flex items-center border-l border-black bg-black px-6 py-3 sm:px-8 md:px-10 font-display text-xs md:text-sm font-semibold uppercase tracking-wider text-white hover:bg-ink/90 transition-colors"
          >
            BOOK A DEMO
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-12 sm:px-8 sm:pt-16 md:pt-20 lg:grid-cols-2 lg:gap-8 lg:pt-16">
        <Reveal className="order-2 lg:order-1 flex flex-col items-start justify-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-5xl font-bold leading-[1.05] tracking-wide text-ink">
            <span className="italic text-brand">Sub</span>scriptions That
            <br />
            <span className="italic text-brand">Scale</span> Your Bottom Line.
          </h1>
          <p className="mt-6 md:mt-8 max-w-lg text-lg sm:text-xl lg:text-[22px] font-normal leading-snug sm:leading-relaxed text-ink">
            Immediately increase customer LTV by adding premium, customized membership storefronts.
          </p>
          <div className="mt-8 sm:mt-10">
            <CtaButton size="lg" className="font-bold">
              Book a Demo
            </CtaButton>
          </div>
          <div className="mt-8 sm:mt-10 w-full max-w-lg border-y border-black py-4 sm:py-4.5">
            <p className="font-display text-base font-medium text-ink sm:text-lg lg:text-xl">
              2025 Gross Merchandise Value:{' '}
              <span className="font-bold text-brand">$75,883,885.79</span>
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end" delay={120}>
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-[540px]">
            <div className="absolute -top-10 -right-4 sm:top-0 sm:right-4 -z-10 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-brand/30  pointer-events-none" />
            <img
              src="/images/hero-home.gif"
              alt="Smartphone displaying a SubScale transaction analytics dashboard"
              loading="eager"
              className="mx-auto lg:ml-auto lg:mr-0 h-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-[520px] object-contain "
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

