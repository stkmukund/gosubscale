import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { Navbar } from '@/components/navbar'

export function Hero() {
  return (
    <section className="bg-cream">
      {/* Header Bar */}
      <Navbar />

      {/* Hero Content */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 md:pt-16 md:pb-20 lg:grid-cols-2 lg:gap-8 lg:py-16">
        <Reveal className="order-2 lg:order-1 flex flex-col items-start justify-center w-full">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-5xl font-bold leading-[1.08] tracking-tight sm:tracking-wide text-ink">
            <span className="italic text-brand">Sub</span>scriptions That
            <br className="hidden sm:inline" />{' '}
            <span className="italic text-brand">Scale</span> Your Bottom Line.
          </h1>
          <p className="mt-5 sm:mt-6 md:mt-8 max-w-lg text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed text-ink">
            Immediately increase customer LTV by adding premium, customized membership storefronts.
          </p>
          <div className="mt-7 sm:mt-8 md:mt-10 w-full sm:w-auto">
            <CtaButton size="lg" className="w-full sm:w-auto font-bold text-center">
              Book a Demo
            </CtaButton>
          </div>
          <div className="mt-7 sm:mt-8 md:mt-10 w-full max-w-lg border-y border-black py-3.5 sm:py-4.5">
            <p className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-medium text-ink flex flex-wrap items-center justify-between sm:justify-start gap-x-2 gap-y-1">
              <span>2025 Gross Merchandise Value:</span>
              <span className="font-bold text-brand whitespace-nowrap">$75,883,885.79</span>
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end" delay={120}>
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-[540px]">
            <div className="absolute -top-10 -right-4 sm:top-0 sm:right-4 -z-10 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 pointer-events-none" />
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

