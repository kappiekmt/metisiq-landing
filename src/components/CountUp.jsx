import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function CountUp({ value, suffix = '', duration = 1400 }) {
  const [ref, inView] = useInView()
  const [display, setDisplay] = useState('0')
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
    const isFloat = value.includes('.')
    const decimals = isFloat ? (value.split('.')[1] || '').length : 0
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = numeric * ease
      setDisplay(isFloat ? current.toFixed(decimals) : Math.round(current).toLocaleString())
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, value, duration])

  return <span ref={ref}>{display}{suffix}</span>
}
