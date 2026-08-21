import { motion } from 'framer-motion'
import { IconShield, IconRepeat, IconTrendingUp, IconLayers, IconZap, IconChart } from '@/components/icons'

const FEATURES = [
  {
    icon: IconShield,
    title: 'Performance-Based Partnership',
    body: 'If you don\u2019t make more money, we don\u2019t make money. Fully aligned incentives — guaranteed win-win.',
    span: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: IconRepeat,
    title: 'Continuity System Optimization',
    body: 'Custom rebill logic, frictionless checkout, and compliance built in. Every step of the subscription flow tuned for maximum conversion.',
    span: '',
  },
  {
    icon: IconTrendingUp,
    title: 'LTV & Retention Max',
    body: 'Churn reduction, AOV growth, and smart dunning. Partners see up to 317% LTV increase within 12 months.',
    span: '',
  },
  {
    icon: IconChart,
    title: '9-Figure Playbooks',
    body: 'Data-driven insights from hundreds of millions in processed revenue, applied directly to your business.',
    span: 'lg:col-span-2',
  },
]

export function WhatWeDo() {
  return (
    <section id="features" className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand mb-4">
            <IconZap className="size-3.5" />
            The Platform
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              scale recurring revenue
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed">
            A battle-tested system optimized over 7 years and hundreds of millions of dollars
            through trial and error. No guesswork — just compounding results.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04] ${feature.span}`}
              >
                {/* Glow on hover */}
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-5">
                    <Icon className="size-5 text-brand" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
