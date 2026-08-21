import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { IconTrendingUp, IconUsers, IconDollar, IconArrowUpRight } from '@/components/icons'

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 via-brand/5 to-transparent rounded-3xl blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl border border-white/[0.08] bg-[#12141a] p-5 shadow-2xl"
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-red-400/60" />
            <div className="size-2.5 rounded-full bg-yellow-400/60" />
            <div className="size-2.5 rounded-full bg-brand/60" />
          </div>
          <span className="text-[10px] font-mono text-white/40">subscale.app/dashboard</span>
        </div>

        {/* Revenue stat */}
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/50 font-medium">Subscription Revenue (MRR)</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold text-brand">
              <IconTrendingUp className="size-3" />
              +147%
            </span>
          </div>
          <div className="font-display text-2xl font-bold text-white">$2.8M</div>
          {/* Mini bar chart */}
          <div className="mt-3 flex items-end gap-1.5 h-12">
            {[40, 55, 48, 62, 70, 58, 78, 85, 72, 92, 88, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
                className="flex-1 rounded-sm bg-gradient-to-t from-brand/40 to-brand"
              />
            ))}
          </div>
        </div>

        {/* Two stat cards */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <IconUsers className="size-3.5 text-brand" />
              <span className="text-[10px] text-white/50 font-medium">Active Subscribers</span>
            </div>
            <div className="font-display text-lg font-bold text-white">48,210</div>
            <div className="text-[10px] text-brand font-semibold mt-0.5">+2,340 this month</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <IconDollar className="size-3.5 text-brand" />
              <span className="text-[10px] text-white/50 font-medium">Avg. LTV</span>
            </div>
            <div className="font-display text-lg font-bold text-white">$312</div>
            <div className="text-[10px] text-brand font-semibold mt-0.5">+317% YoY</div>
          </motion.div>
        </div>

        {/* Retention curve */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-3 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/50 font-medium">Retention Curve</span>
            <span className="text-[10px] text-white/40">90-day cohort</span>
          </div>
          <svg viewBox="0 0 200 50" className="w-full h-10">
            <defs>
              <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.1, ease: 'easeOut' }}
              d="M0,10 Q40,8 60,15 T120,20 T200,25"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              d="M0,10 Q40,8 60,15 T120,20 T200,25 L200,50 L0,50 Z"
              fill="url(#retentionGrad)"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating badge: Performance-based */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3, type: 'spring' }}
        className="absolute -bottom-4 -left-4 sm:-left-8 rounded-xl border border-white/[0.1] bg-[#1a1d26] px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-brand/15">
            <IconTrendingUp className="size-4 text-brand" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Performance-Based</div>
            <div className="text-[10px] text-white/50">We grow when you grow</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0b0f] overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-brand/5 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 md:px-8 pt-10 pb-20 lg:pt-16 lg:grid-cols-2 lg:gap-8 lg:min-h-[calc(100vh-4rem)]">
        {/* Left: Copy */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 mb-6"
          >
            <span className="flex size-1.5 rounded-full bg-brand animate-pulse" />
            Trusted by 7, 8 &amp; 9-figure DTC brands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-6xl font-bold leading-[1.05] tracking-tight text-white"
          >
            Subscriptions that{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              scale
            </span>{' '}
            your bottom line.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base sm:text-lg md:text-xl text-white/60 leading-relaxed"
          >
            Immediately increase customer LTV by adding premium, customized membership
            storefronts — backed by a performance-based partnership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#book-a-demo"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand/90 hover:shadow-[0_12px_32px_-10px_rgba(16,185,129,0.7)] w-full sm:w-auto"
            >
              Book a Demo
              <IconArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-display text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              Calculate Your ROI
            </a>
          </motion.div>

          {/* GMV stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 pt-6 border-t border-white/[0.06] w-full max-w-lg"
          >
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">$75.8M</div>
              <div className="text-xs text-white/40 mt-0.5">2025 GMV Processed</div>
            </div>
            <div className="h-10 w-px bg-white/[0.08]" />
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">147%</div>
              <div className="text-xs text-white/40 mt-0.5">Avg. LTV Increase</div>
            </div>
            <div className="h-10 w-px bg-white/[0.08]" />
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">5+</div>
              <div className="text-xs text-white/40 mt-0.5">Year Partnerships</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Dashboard mockup */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
