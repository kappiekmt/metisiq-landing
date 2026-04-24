import { CheckCircle2 } from 'lucide-react'
import AnimateIn from './AnimateIn'
import CountUp from './CountUp'

const pillars = [
  'Real-time dashboards for every layer of your organisation',
  'Automated reporting — no more manual spreadsheets',
  'Notifications the moment performance deviates',
  'Data-driven decision making, from operator to director',
  'Industry-specific KPIs built in from day one',
]

const kpis = [
  { label: 'Live data', value: '1', suffix: 's', sub: 'refresh rate' },
  { label: 'Data sources', value: '15', suffix: '+', sub: 'connected' },
  { label: 'Uptime SLA', value: '99.9', suffix: '%', sub: 'guaranteed' },
  { label: 'Time to value', value: '5', suffix: ' days', sub: 'to first insight' },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateIn from="left">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Our solution</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              One platform.
              <br />
              One truth.
              <br />
              <span className="gradient-text">Full control.</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              MetisIQ connects all your operational data into a single intelligent platform —
              so you always know what's happening, why it's happening, and what to do about it.
            </p>
            <ul className="space-y-3">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="grid grid-cols-2 gap-3">
              {kpis.map((kpi, i) => (
                <div key={kpi.label} className="card p-5 text-center">
                  <p className="text-2xl font-bold text-slate-900 mb-1">
                    <CountUp value={kpi.value} suffix={kpi.suffix} />
                  </p>
                  <p className="text-xs font-semibold text-sky-600">{kpi.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{kpi.sub}</p>
                </div>
              ))}
              <div className="col-span-2 p-5 rounded-2xl border border-sky-100 bg-sky-50 text-center">
                <p className="text-sm text-sky-700 italic font-medium">
                  "From energy and water… to production performance and operational inputs.
                  Everything is connected."
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
