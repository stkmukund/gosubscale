import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const REASONS = [
  {
    n: 1,
    title: 'Performance-Based Partnership',
    body: 'If you don\u2019t make more money, we don\u2019t make money. Guaranteed win-win relationship.',
    image: '/images/reason-01.webp',
    alt: 'Business partners shaking hands over a desk covered with cash',
  },
  {
    n: 2,
    title: 'Experts In Continuity Systems',
    body: 'With 50+ years of combined experience, we are experts in all aspects of building and scaling a sustainable subscription program. Everything from opt in optimization, compliance to retention.',
    image: '/images/reason-02.webp',
    alt: 'A fanned spread of hundred dollar bills',
  },
  {
    n: 3,
    title: 'Optimized System. Optimized Results',
    body: 'Eliminate the risk of implementing a subscription program. Our system has been optimized over 7 years and 100s of millions of dollars through trial and error.',
    image: '/images/reason-03.webp',
    alt: 'Illustration of an optimized, automated business system',
  },
  {
    n: 4,
    title: 'Increase Customer Value',
    body: 'Partners have seen up to 317% increase in their customers LTV within a year. Average partners see 147% increase to their customers LTV after 16 months. Say goodbye to thin margins and hello to steady CASHFLOW!',
    image: '/images/reason-04.webp',
    alt: 'Phone showing a 317% LTV growth badge and rising charts',
  },
  {
    n: 5,
    title: 'Access 9 Figure Learnings',
    body: 'We work with 7, 8 and 9 figure companies whose learnings are applied directly into your business shortening your time to success.',
    image: '/images/reason-05.webp',
    alt: 'Laptop showing colorful business analytics dashboards',
  },
]

export function Reasons() {
  return (
    <section className="bg-cream py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight text-ink text-balance">
            5 Reasons to Work
            <br className="hidden sm:block" /> with SubScale&trade;
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-12 sm:gap-16 md:gap-20">
          {REASONS.map((reason, i) => {
            const reversed = i % 2 === 1
            return (
              <div key={reason.n} className="flex flex-col">
                <Reveal>
                  <div
                    className={cn(
                      'grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16',
                    )}
                  >
                    {/* Text Content */}
                    <div
                      className={cn(
                        'flex flex-col items-start',
                        reversed ? 'md:order-2' : 'md:order-1',
                      )}
                    >
                      <div className="flex size-14 sm:size-16 md:size-[68px] items-center justify-center rounded-full border border-ink font-display text-2xl sm:text-3xl font-bold text-ink mb-4 sm:mb-5">
                        {reason.n}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.15] tracking-tight text-ink">
                        {reason.title}
                      </h3>
                      <p className="mt-4 sm:mt-5 max-w-lg font-arial font-normal text-base sm:text-lg lg:text-[22px] leading-relaxed text-ink">
                        {reason.body}
                      </p>
                      <div className="mt-6 sm:mt-8 w-full sm:w-auto">
                        <CtaButton size="lg" className="w-full sm:w-auto">
                          Yes! I Want to Make More Money
                        </CtaButton>
                      </div>
                    </div>

                    {/* Image with Brand Accent Circle */}
                    <div
                      className={cn(
                        'relative flex items-center justify-center py-4',
                        reversed ? 'md:order-1' : 'md:order-2',
                      )}
                    >
                      <div
                        className={cn(
                          'absolute -z-0 size-44 sm:size-56 md:size-64 lg:size-72',
                          reversed
                            ? '-bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6'
                            : '-bottom-2 -right-2 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6',
                        )}
                      />
                      <img
                        src={reason.image || '/placeholder.svg'}
                        alt={reason.alt}
                        width={640}
                        height={460}
                        loading="lazy"
                        className="relative z-10 h-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] object-contain"
                      />
                    </div>
                  </div>
                </Reveal>

                {i < REASONS.length - 1 && (
                  <hr className="mt-12 sm:mt-16 md:mt-20 border-t border-ink/15" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
