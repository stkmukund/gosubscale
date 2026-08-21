import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { IconDollar, IconUsers, IconTrendingUp, IconArrowUpRight } from '@/components/icons'

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
  format: (v: number) => string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-white/70">{label}</label>
        <span className="font-display text-lg font-bold text-white">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand
          [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(16,185,129,0.5)]
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-brand [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, #10b981 0%, #10b981 ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
    </div>
  )
}

export function Calculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(5000)
  const [avgOrderValue, setAvgOrderValue] = useState(75)
  const [currentLTV, setCurrentLTV] = useState(120)
  const [subAdoptionRate, setSubAdoptionRate] = useState(25)

  const results = useMemo(() => {
    const monthlyRevenue = monthlyOrders * avgOrderValue
    const annualRevenue = monthlyRevenue * 12
    const subCustomers = Math.round(monthlyOrders * (subAdoptionRate / 100))
    const boostedLTV = Math.round(currentLTV * 2.47) // 147% avg increase
    const incrementalLTV = (boostedLTV - currentLTV) * subCustomers
    const annualIncremental = Math.round(incrementalLTV)
    return {
      monthlyRevenue,
      annualRevenue,
      subCustomers,
      boostedLTV,
      annualIncremental,
    }
  }, [monthlyOrders, avgOrderValue, currentLTV, subAdoptionRate])

  return (
    <section id="calculator" className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand mb-4">
            <IconTrendingUp className="size-3.5" />
            ROI Calculator
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            See your potential{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              revenue lift
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed">
            Adjust the sliders to estimate how much additional recurring revenue SubScale could
            generate for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="space-y-6">
              <Slider
                label="Monthly Orders"
                value={monthlyOrders}
                onChange={setMonthlyOrders}
                min={500}
                max={50000}
                step={500}
                format={(v) => v.toLocaleString()}
              />
              <Slider
                label="Avg. Order Value"
                value={avgOrderValue}
                onChange={setAvgOrderValue}
                min={20}
                max={300}
                step={5}
                format={(v) => `$${v}`}
              />
              <Slider
                label="Current Customer LTV"
                value={currentLTV}
                onChange={setCurrentLTV}
                min={50}
                max={500}
                step={10}
                format={(v) => `$${v}`}
              />
              <Slider
                label="Subscription Adoption Rate"
                value={subAdoptionRate}
                onChange={setSubAdoptionRate}
                min={5}
                max={60}
                step={5}
                format={(v) => `${v}%`}
              />
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 via-brand/5 to-transparent p-6 sm:p-8 flex flex-col"
          >
            <div className="absolute -top-16 -right-16 size-40 rounded-full bg-brand/15 blur-3xl" />

            <div className="relative flex-1">
              <div className="flex items-center gap-2 mb-1">
                <IconDollar className="size-4 text-brand" />
                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  Estimated Annual Lift
                </span>
              </div>
              <motion.div
                key={results.annualIncremental}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="font-display text-4xl sm:text-5xl font-bold text-white"
              >
                ${results.annualIncremental.toLocaleString()}
              </motion.div>
              <p className="mt-2 text-sm text-white/40">
                Additional recurring revenue per year
              </p>
            </div>

            <div className="relative mt-6 pt-6 border-t border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">New Subscribers</span>
                <span className="font-display font-bold text-white">
                  {results.subCustomers.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Boosted LTV</span>
                <span className="font-display font-bold text-brand">
                  ${results.boostedLTV}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">LTV Increase</span>
                <span className="font-display font-bold text-brand">+147%</span>
              </div>
            </div>

            <a
              href="#book-a-demo"
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand/90 w-full"
            >
              Get Your Growth Audit
              <IconArrowUpRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
