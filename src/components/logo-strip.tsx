const LOGOS = ['Shopify', 'sticky.io', 'NMI', 'Konnektive CRM', 'CheckoutChamp']

export function LogoStrip() {
  return (
    <section className="bg-[#0a0b0f] border-y border-white/[0.06] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-white/30 mb-6">
          Integrates with the platforms you already use
        </p>
        <div className="relative flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white/40 transition-colors hover:text-white/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
