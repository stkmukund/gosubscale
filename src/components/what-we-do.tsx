import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function WhatWeDo() {
  return (
    <section className="bg-ink py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <Reveal>
          <p className="text-center font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
            Here&rsquo;s What We Do
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[520px]">
              <div className="absolute inset-0 -z-10 rounded-full bg-brand/20 blur-3xl" />
              <img
                src="/images/whatwedo-phone01.gif"
                alt="Mobile analytics app showing total sales and revenue growth"
                width={640}
                height={780}
                loading="lazy"
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col items-start">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[52px] font-bold leading-[1.1] tracking-tight text-white">
              Unlock Your Business&rsquo;{' '}
              <br className="hidden sm:inline" />
              Untapped Growth{' '}
              <br className="hidden sm:inline" />
              Potential
            </h2>
            <p className="mt-5 sm:mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-white/90">
              By adding a subscription program to your business we guarantee your revenue will
              skyrocket past previous record months.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-white/90">
              It&rsquo;s like steroids for your business.
            </p>
            <div className="mt-6 sm:mt-8 w-full sm:w-auto">
              <CtaButton size="lg" className="w-full sm:w-auto">
                Yes! I Want to Make More Money
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
