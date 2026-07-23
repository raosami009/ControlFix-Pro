import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"

export function useCountUp(target, { decimals = 0, duration = 1.4, inView = false } = {}) {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!inView || hasRun.current) return
    hasRun.current = true

    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    let raf
    const start = performance.now()
    const durationMs = duration * 1000

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, prefersReducedMotion])

  return value.toFixed(decimals)
}
