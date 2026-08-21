const LOGOS = ['Shopify', 'sticky.io', 'nmi', 'Konnektive CRM', 'CheckoutChamp']

export function LogoStrip() {
  return (
    <section className="overflow-hidden bg-ink py-6 sm:py-8" aria-label="Trusted platform partners">
      <div className="relative flex w-max marquee">
        {[0, 1].map((group) => (
          <ul
            key={group}
            className="flex shrink-0 items-center gap-10 sm:gap-16 px-4 sm:px-8"
            aria-hidden={group === 1}
          >
            {LOGOS.map((name) => (
              <li
                key={name}
                className="whitespace-nowrap font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/85"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
