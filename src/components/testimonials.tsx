import { Reveal } from '@/components/reveal'

const TESTIMONIALS = [
  {
    quote:
      'We have been working with SubScale for two years, and couldn\u2019t be happier. They have helped us build an eight figure per year subscription business from zero. I can\u2019t recommend them enough, as they have even helped us improve many facets of our business with their expertise in the e-commerce space.',
    name: 'Will',
    title: 'Multiple 8 Figure Stores',
  },
  {
    quote:
      'We started working with Alex and his team early 2022. Prior to that, we were doing straight sales dropshipping. Our margins were getting thinner and thinner, but after working with SubScale, we\u2019ve ramped up rebill revenue to over 7 figures per month. SubScale has become a highly valued extension of our team.',
    name: 'Tony',
    title: 'Over 9 Figures In Ecommerce Revenue',
  },
  {
    quote:
      'Since working with SubScale we have been able to drive millions of dollars in subscription revenue. Adding subscription revenue has really helped us scale our growth.',
    name: 'AK',
    title: '8 Figure Shopify Store Owner',
  },
]

export function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-5xl">
            They&rsquo;re raving about
            <br className="hidden sm:block" /> SubScale&trade;
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-3xl bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <span className="font-display text-5xl leading-none text-brand" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-sm text-ink/55">{t.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
