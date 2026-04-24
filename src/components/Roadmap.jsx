import { Check, Clock } from 'lucide-react'

const items = [
  { label: 'Live dashboards', done: true },
  { label: 'Production monitoring (kg/h, pcs/h)', done: true },
  { label: 'Energy tracking (gas, electricity, water)', done: true },
  { label: 'Machine OEE', done: true },
  { label: 'Customer analysis', done: true },
  { label: 'Automated reports & PDF export', done: true },
  { label: 'Smart notifications & deviation alerts', done: true },
  { label: 'CO₂ footprint & CSRD compliance', done: false },
  { label: 'Linen management module', done: false },
  { label: 'Cost price intelligence', done: false },
  { label: 'Benchmark across locations', done: false },
  { label: 'P&L analysis', done: false },
  { label: 'Capacity planning', done: false },
  { label: 'AI-driven insights & anomaly detection', done: false },
  { label: 'Predictive maintenance', done: false },
  { label: 'Full machine integration', done: false },
]

export default function Roadmap() {
  const done = items.filter((i) => i.done)
  const upcoming = items.filter((i) => !i.done)

  return (
    <section id="roadmap" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/20 bg-violet-400/5 text-violet-400 text-xs font-medium mb-5">
            Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            We are still building
            <br />
            <span className="gradient-text">for a profitable future</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From insight… to impact. MetisIQ is on a clear path toward full-chain
            intelligence — with AI and predictive capabilities coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-white/6 bg-[#0a1628]/40">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Available now</h3>
            </div>
            <ul className="space-y-3">
              {done.map(({ label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Check size={14} className="text-cyan-400 shrink-0" />
                  <span className="text-white/65 text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-white/6 bg-[#0a1628]/40">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Coming soon</h3>
            </div>
            <ul className="space-y-3">
              {upcoming.map(({ label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Clock size={14} className="text-violet-400/60 shrink-0" />
                  <span className="text-white/40 text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
