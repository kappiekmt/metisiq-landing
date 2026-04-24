import { CheckCircle2 } from 'lucide-react'

const pillars = [
  'Real-time dashboards for every layer of your organisation',
  'Automated reporting — no more manual spreadsheets',
  'Notifications the moment performance deviates',
  'Data-driven decision making, from operator to director',
  'Industry-specific KPIs built in from day one',
]

export default function Solution() {
  return (
    <section id="solution" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-medium mb-6">
              Our solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              One platform.
              <br />
              One truth.
              <br />
              <span className="gradient-text">Full control.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              MetisIQ connects all your operational data into a single intelligent platform —
              so you always know what's happening, why it's happening, and what to do about it.
            </p>
            <ul className="space-y-3">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-white/65 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/5 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-3">
              {[
                { label: 'Live data', value: '< 1s', sub: 'refresh rate' },
                { label: 'Data sources', value: '15+', sub: 'connected' },
                { label: 'Uptime SLA', value: '99.9%', sub: 'guaranteed' },
                { label: 'Time to value', value: '< 5 days', sub: 'to first insight' },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="p-5 rounded-2xl border border-white/8 bg-[#0a1628]/60 text-center"
                >
                  <p className="text-2xl font-bold text-white mb-1">{kpi.value}</p>
                  <p className="text-xs text-cyan-400 font-medium">{kpi.label}</p>
                  <p className="text-xs text-white/30 mt-0.5">{kpi.sub}</p>
                </div>
              ))}
              <div className="col-span-2 p-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 text-center">
                <p className="text-sm text-cyan-300/80 italic">
                  "From energy and water… to production performance and operational inputs.
                  Everything is connected."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
