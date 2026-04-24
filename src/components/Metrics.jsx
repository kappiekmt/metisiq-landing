import { Activity, Zap, Truck, Leaf, Gauge, Users } from 'lucide-react'

const metrics = [
  {
    icon: Activity,
    label: 'Production',
    metrics: ['kg / hour', 'pcs / hour', 'throughput trend'],
    color: 'cyan',
  },
  {
    icon: Zap,
    label: 'Energy',
    metrics: ['Gas consumption', 'Electricity', 'Water usage'],
    color: 'amber',
  },
  {
    icon: Truck,
    label: 'Transport & Logistics',
    metrics: ['Route efficiency', 'Load factor', 'Delivery SLA'],
    color: 'violet',
  },
  {
    icon: Leaf,
    label: 'CO₂ Footprint',
    metrics: ['Emissions per kg', 'Scope 1 & 2', 'CSR reporting'],
    color: 'green',
  },
  {
    icon: Gauge,
    label: 'OEE Equipment',
    metrics: ['Availability', 'Performance', 'Quality'],
    color: 'blue',
  },
  {
    icon: Users,
    label: 'Customer Analyses',
    metrics: ['Cost per customer', 'SLA compliance', 'Volume trends'],
    color: 'pink',
  },
]

const colorMap = {
  cyan:   { bg: 'bg-cyan-400/10',   border: 'border-cyan-400/15',   icon: 'text-cyan-400' },
  amber:  { bg: 'bg-amber-400/10',  border: 'border-amber-400/15',  icon: 'text-amber-400' },
  violet: { bg: 'bg-violet-400/10', border: 'border-violet-400/15', icon: 'text-violet-400' },
  green:  { bg: 'bg-green-400/10',  border: 'border-green-400/15',  icon: 'text-green-400' },
  blue:   { bg: 'bg-blue-400/10',   border: 'border-blue-400/15',   icon: 'text-blue-400' },
  pink:   { bg: 'bg-pink-400/10',   border: 'border-pink-400/15',   icon: 'text-pink-400' },
}

export default function Metrics() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            What MetisIQ monitors
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every critical dimension of laundry performance, unified in a single view.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map(({ icon: Icon, label, metrics: items, color }) => {
            const c = colorMap[color]
            return (
              <div
                key={label}
                className="group p-6 rounded-2xl border border-white/6 bg-[#0a1628]/40 hover:border-white/12 hover:bg-[#0a1628]/70 transition-all card-hover"
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={c.icon} />
                </div>
                <h3 className="text-white font-semibold text-base mb-3">{label}</h3>
                <ul className="space-y-1.5">
                  {items.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-white/40">
                      <div className={`w-1 h-1 rounded-full ${c.icon.replace('text', 'bg')}`} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
