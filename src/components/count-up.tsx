import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  delay?: number
}

export function CountUp({
  end,
  start = 0,
  duration = 2400,
  prefix = '$',
  suffix = '',
  decimals = 2,
  className,
  delay = 200,
}: CountUpProps) {
  const [value, setValue] = useState(start)
  const ref = useRef<HTMLSpanElement | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const startAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      const timeoutId = setTimeout(() => {
        let startTime: number | null = null
        const startVal = start
        const endVal = end

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const elapsed = timestamp - startTime
          const progress = Math.min(elapsed / duration, 1)

          // Smooth easeOutQuart curve
          const easeProgress = 1 - Math.pow(1 - progress, 4)
          const currentVal = startVal + (endVal - startVal) * easeProgress

          setValue(currentVal)

          if (progress < 1) {
            requestAnimationFrame(step)
          } else {
            setValue(endVal)
          }
        }

        requestAnimationFrame(step)
      }, delay)

      return timeoutId
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = startAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [end, start, duration, delay])

  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
