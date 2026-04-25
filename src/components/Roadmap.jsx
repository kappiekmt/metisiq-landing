import { Check, Clock } from 'lucide-react'
import AnimateIn from './AnimateIn'

const done = [
  'Live dashboards',
  'Production monitoring (kg/h, pcs/h)',
  'Energy tracking (gas, electricity, water)',
  'Machine OEE',
  'Customer analysis',
  'Automated reports & PDF export',
  'Smart notifications & deviation alerts',
]

const upcoming = [
  'CO₂ footprint & CSRD compliance',
  'Linen management module',
  'Cost price intelligence',
  'Benchmark across locations',
  'P&L analysis',
  'Capacity planning',
  'AI-driven insights & anomaly detection',
  'Predictive maintenance',
  'Full machine integration',
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Building for a{' '}
            <span className="gradient-text">profitable future</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            From insight to impact. MetisIQ is on a clear path toward full-chain intelligence —
            with AI and predictive capabilities on the horizon.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimateIn from="left">
            <div className="card p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wider">Available now</h3>
              </div>
              <ul className="space-y-3">
                {done.map((label) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-emerald-500" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="card p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <h3 className="text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wider">Coming soon</h3>
              </div>
              <ul className="space-y-3">
                {upcoming.map((label) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0">
                      <Clock size={11} className="text-slate-400 dark:text-slate-500" />
                    </div>
                    <span className="text-slate-400 dark:text-slate-500 text-sm">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
