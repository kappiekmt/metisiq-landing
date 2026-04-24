import { Activity, Zap, Truck, Leaf, Gauge, Users } from 'lucide-react'
import AnimateIn from './AnimateIn'

const metrics = [
  { icon: Activity, label: 'Production',           items: ['kg / hour', 'pcs / hour', 'throughput trend'],    iconBg: 'bg-sky-50 border-sky-100',     iconColor: 'text-sky-500' },
  { icon: Zap,      label: 'Energy',               items: ['Gas consumption', 'Electricity', 'Water usage'],  iconBg: 'bg-amber-50 border-amber-100', iconColor: 'text-amber-500' },
  { icon: Truck,    label: 'Transport & Logistics', items: ['Route efficiency', 'Load factor', 'Delivery SLA'], iconBg: 'bg-violet-50 border-violet-100', iconColor: 'text-violet-500' },
  { icon: Leaf,     label: 'CO₂ Footprint',         items: ['Emissions per kg', 'Scope 1 & 2', 'CSR reporting'], iconBg: 'bg-emerald-50 border-emerald-100', iconColor: 'text-emerald-500' },
  { icon: Gauge,    label: 'OEE Equipment',         items: ['Availability', 'Performance', 'Quality'],        iconBg: 'bg-blue-50 border-blue-100',   iconColor: 'text-blue-500' },
  { icon: Users,    label: 'Customer Analyses',     items: ['Cost per customer', 'SLA compliance', 'Volume trends'], iconBg: 'bg-pink-50 border-pink-100', iconColor: 'text-pink-500' },
]

export default function Metrics() {
  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">What we monitor</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Every critical dimension,
            <br />
            in one unified view
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From energy to production to CO₂ — MetisIQ captures it all, automatically.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map(({ icon: Icon, label, items, iconBg, iconColor }, i) => (
            <AnimateIn key={label} delay={i * 70}>
              <div className="card p-6 h-full">
                <div className={`w-9 h-9 rounded-xl ${iconBg} border flex items-center justify-center mb-4`}>
                  <Icon size={17} className={iconColor} />
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-3">{label}</h3>
                <ul className="space-y-1.5">
                  {items.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
