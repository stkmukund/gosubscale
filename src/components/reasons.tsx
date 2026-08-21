import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const REASONS = [
  {
    n: 1,
    title: 'Performance-Based Partnership',
    body: 'If you don\u2019t make more money, we don\u2019t make money. Guaranteed win-win relationship.',
    image: '/images/reason-01.png',
    alt: 'Business partners shaking hands over a desk covered with cash',
  },
  {
    n: 2,
    title: 'Experts In Continuity Systems',
    body: 'With 50+ years of combined experience, we are experts in all aspects of building and scaling a sustainable subscription program. Everything from opt in optimization, compliance to retention.',
    image: '/images/reason-02.png',
    alt: 'A fanned spread of hundred dollar bills',
  },
  {
    n: 3,
    title: 'Optimized System. Optimized Results',
    body: 'Eliminate the risk of implementing a subscription program. Our system has been optimized over 7 years and 100s of millions of dollars through trial and error.',
    image: '/images/reason-03.png',
    alt: 'Illustration of an optimized, automated business system',
  },
  {
    n: 4,
    title: 'Increase Customer Value',
    body: 'Partners have seen up to 317% increase in their customers LTV within a year. Average partners see 147% increase to their customers LTV after 16 months. Say goodbye to thin margins and hello to steady CASHFLOW!',
    image: '/images/reason-04.png',
    alt: 'Phone showing a 317% LTV growth badge and rising charts',
  },
  {
    n: 5,
    title: 'Access 9 Figure Learnings',
    body: 'We work with 7, 8 and 9 figure companies whose learnings are applied directly into your business shortening your time to success.',
    image: '/images/reason-05.png',
    alt: 'Laptop showing colorful business analytics dashboards',
  },
]

export function Reasons() {
  return (
    <section className="bg-cream py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-ink text-balance">
            5 Reasons to Work
            <br className="hidden sm:block" /> with SubScale&trade;
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {REASONS.map((reason, i) => {
            const reversed = i % 2 === 1
            return (
              <Reveal key={reason.n}>
                <div
                  className={cn(
                    'grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16',
                  )}
                >
                  <div
                    className={cn(
                      'relative flex justify-center',
                      reversed ? 'md:order-1' : 'md:order-2',
                    )}
                  >
                    <div className="absolute -bottom-4 -right-2 -z-0 size-32 sm:size-40 rounded-full" />
                    <img
                      src={reason.image || '/placeholder.svg'}
                      alt={reason.alt}
                      width={640}
                      height={460}
                      loading="lazy"
                      className="relative z-10 h-auto w-full max-w-[340px] sm:max-w-[420px] md:max-w-[450px] rounded-2xl sm:rounded-3xl"
                    />
                  </div>

                  <div className={cn(reversed ? 'md:order-2' : 'md:order-1')}>
                    <span className="flex size-10 sm:size-12 items-center justify-center rounded-full border-2 border-ink font-display text-lg sm:text-xl font-bold text-ink">
                      {reason.n}
                    </span>
                    <h3 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
                      {reason.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-black/85">
                      {reason.body}
                    </p>
                    <div className="mt-6 sm:mt-7 w-full sm:w-auto">
                      <CtaButton className="w-full sm:w-auto">Yes! I Want to Make More Money</CtaButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
