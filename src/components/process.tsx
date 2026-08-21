import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCheck, IconClock } from '@/components/icons'

const STEPS = [
  {
    week: 'Week 1',
    title: 'Audit & Onboarding',
    body: 'Deep-dive into your business metrics, current funnel, and subscription infrastructure. We map every revenue leak and growth opportunity.',
    deliverables: ['Full revenue audit', 'Funnel teardown', 'Growth roadmap'],
  },
  {
    week: 'Week 2',
    title: 'Integration & Systems',
    body: 'Begin integration with your existing stack. Custom subscription logic, checkout optimization, and compliance frameworks deployed.',
    deliverables: ['Platform integration', 'Custom rebill logic', 'Checkout optimization'],
  },
  {
    week: 'Week 3',
    title: 'Quality Assurance',
    body: 'Rigorous QA across every touchpoint. We test edge cases, payment flows, and compliance scenarios before a single customer hits the funnel.',
    deliverables: ['End-to-end testing', 'Payment flow QA', 'Compliance check'],
  },
  {
    week: 'Week 4',
    title: 'Launch',
    body: 'Your subscription program goes live. From day one, we monitor every metric and begin the optimization loop.',
    deliverables: ['Go-live', 'Live monitoring', 'Day-1 optimization'],
  },
  {
    week: 'Weeks 5+',
    title: 'Scale & Optimize',
    body: 'Continuous optimization based on real data. A/B testing, retention campaigns, and expansion into new revenue streams.',
    deliverables: ['Ongoing A/B testing', 'Retention campaigns', 'Revenue expansion'],
  },
]

export function Process() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand mb-4">
            <IconClock className="size-3.5" />
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Live in 4 weeks.{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              Scaling forever.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed">
            A structured, battle-tested onboarding that gets your subscription program live
            fast — then compounds from there.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/[0.08]" />

              <div className="space-y-1">
                {STEPS.map((step, i) => {
                  const isActive = active === i
                  return (
                    <button
                      key={step.week}
                      onClick={() => setActive(i)}
                      className="relative flex items-start gap-4 w-full text-left pl-0 py-3 group cursor-pointer"
                    >
                      <div
                        className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'border-brand bg-brand text-brand-foreground scale-110'
                            : 'border-white/15 bg-[#0a0b0f] text-white/40 group-hover:border-white/30'
                        }`}
                      >
                        {isActive ? (
                          <IconCheck className="size-4" strokeWidth={3} />
                        ) : (
                          <span className="text-sm font-bold">{i + 1}</span>
                        )}
                      </div>
                      <div className="pt-1.5">
                        <div
                          className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                            isActive ? 'text-brand' : 'text-white/40'
                          }`}
                        >
                          {step.week}
                        </div>
                        <div
                          className={`font-display text-lg font-bold transition-colors ${
                            isActive ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                          }`}
                        >
                          {step.title}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 border border-brand/20">
                    <IconCheck className="size-5 text-brand" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {STEPS[active].week}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  {STEPS[active].title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed mb-6">
                  {STEPS[active].body}
                </p>
                <div className="space-y-2.5">
                  {STEPS[active].deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <div className="flex size-5 items-center justify-center rounded-full bg-brand/15">
                        <IconCheck className="size-3 text-brand" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-white/70">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
