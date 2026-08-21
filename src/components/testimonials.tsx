import { motion } from 'framer-motion'
import { IconSparkles } from '@/components/icons'

const TESTIMONIALS = [
  {
    quote:
      'We have been working with SubScale for two years, and couldn\u2019t be happier. They have helped us build an eight figure per year subscription business from zero. I can\u2019t recommend them enough, as they have even helped us improve many facets of our business with their expertise in the e-commerce space.',
    name: 'Will',
    title: 'Multiple 8-Figure Stores',
    metric: '$10M+',
    metricLabel: 'Sub Revenue',
  },
  {
    quote:
      'We started working with Alex and his team early 2022. Prior to that, we were doing straight sales dropshipping. Our margins were getting thinner and thinner, but after working with SubScale, we\u2019ve ramped up rebill revenue to over 7 figures per month. SubScale has become a highly valued extension of our team.',
    name: 'Tony',
    title: 'Over 9-Figure Ecommerce Revenue',
    metric: '7-Figure',
    metricLabel: 'Monthly Rebill',
  },
  {
    quote:
      'Since working with SubScale we have been able to drive millions of dollars in subscription revenue. Adding subscription revenue has really helped us scale our growth.',
    name: 'AK',
    title: '8-Figure Shopify Store Owner',
    metric: 'Millions',
    metricLabel: 'In Sub Revenue',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand mb-4">
            <IconSparkles className="size-3.5" />
            Partner Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            They&rsquo;re raving about{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              SubScale
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04] flex flex-col"
            >
              {/* Quote mark */}
              <span className="font-display text-5xl leading-none text-brand/30 mb-2" aria-hidden="true">
                &ldquo;
              </span>

              {/* Metric badge */}
              <div className="mb-4 inline-flex items-center gap-2 self-start rounded-lg bg-brand/10 border border-brand/20 px-3 py-1.5">
                <span className="font-display text-sm font-bold text-brand">{t.metric}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">{t.metricLabel}</span>
              </div>

              <blockquote className="flex-1 text-sm sm:text-base leading-relaxed text-white/60">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="font-display font-bold text-white">{t.name}</p>
                <p className="mt-0.5 text-xs sm:text-sm text-white/40">{t.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
