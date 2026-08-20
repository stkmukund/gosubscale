import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function WhatWeDo() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-center font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Here&rsquo;s What We Do
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <Reveal className="flex justify-center">
            <div className="relative w-full">
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
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px]">
              Unlock Your Business&rsquo;
              <br />
              Untapped Growth
              <br />
              Potential
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white">
              By adding a subscription program to your business we guarantee your revenue will
              skyrocket past previous record months.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white">
              It&rsquo;s like steroids for your business.
            </p>
            <div className="mt-8">
              <CtaButton size="lg">Yes! I Want to Make More Money</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
