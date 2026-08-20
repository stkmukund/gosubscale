const LOGOS = ['Shopify', 'sticky.io', 'nmi', 'Konnektive CRM', 'CheckoutChamp']

export function LogoStrip() {
  return (
    <section className="overflow-hidden bg-ink py-8" aria-label="Trusted platform partners">
      <div className="relative flex w-max marquee">
        {[0, 1].map((group) => (
          <ul
            key={group}
            className="flex shrink-0 items-center gap-16 px-8"
            aria-hidden={group === 1}
          >
            {LOGOS.map((name) => (
              <li
                key={name}
                className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-white/85 sm:text-3xl"
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
