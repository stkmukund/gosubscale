import { motion } from 'framer-motion'
import { IconCheck, IconX } from '@/components/icons'

const WITHOUT = [
  'Thin margins from one-off sales',
  'Unpredictable monthly revenue',
  'High churn, low retention',
  'Manual dunning and payment recovery',
  'Guessing at channel-level LTV',
  'Compliance handled reactively',
]

const WITH = [
  'Compounding recurring revenue from day one',
  'Predictable MRR you can forecast against',
  'Churn reduced by up to 40% with smart retention',
  'Automated failed-payment recovery before charge fails',
  'Cohort-level LTV visibility across every channel',
  'Compliance built into every flow from the start',
]

export function Comparison() {
  return (
    <section className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32 border-t border-white/[0.04]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            The difference is{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              structural
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed">
            Same traffic, same product, same brand. The only thing that changes is the system
            underneath your revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Without SubScale */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex size-9 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                <IconX className="size-4 text-red-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white/60">Without SubScale</h3>
            </div>
            <ul className="space-y-4">
              {WITHOUT.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <IconX className="size-3 text-red-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-white/40 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With SubScale */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.08] to-transparent p-6 sm:p-8"
          >
            <div className="absolute -top-12 -right-12 size-32 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex size-9 items-center justify-center rounded-lg bg-brand/15 border border-brand/30">
                  <IconCheck className="size-4 text-brand" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">With SubScale</h3>
              </div>
              <ul className="space-y-4">
                {WITH.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                      <IconCheck className="size-3 text-brand" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
