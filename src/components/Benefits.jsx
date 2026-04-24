import { TrendingDown, TrendingUp, Brain, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    headline: 'Lower operating costs',
    detail: 'Identify energy waste, downtime and inefficiencies the moment they occur. Our clients typically see 8–15% cost reduction within the first quarter.',
    stat: '−12%',
    statLabel: 'avg. energy cost reduction',
    color: 'emerald',
  },
  {
    icon: TrendingUp,
    headline: 'Higher throughput',
    detail: 'Real-time OEE insights let operators act immediately on machine issues — dramatically reducing unplanned downtime and boosting daily output.',
    stat: '+18%',
    statLabel: 'avg. production increase',
    color: 'sky',
  },
  {
    icon: Brain,
    headline: 'Smarter decisions',
    detail: 'Replace gut feeling with data. Every level of the organisation makes decisions based on the same single source of truth.',
    stat: '5×',
    statLabel: 'faster decision cycle',
    color: 'violet',
  },
  {
    icon: Leaf,
    headline: 'Improved sustainability',
    detail: 'Automated CO₂ reporting satisfies compliance requirements. Reduction targets become measurable — and achievable — for the first time.',
    stat: '−22%',
    statLabel: 'avg. CO₂ per kg washed',
    color: 'emerald',
  },
]

const statColor = {
  emerald: 'text-emerald-600',
  sky: 'text-sky-600',
  violet: 'text-violet-600',
}
const iconStyle = {
  emerald: 'bg-emerald-50 border-emerald-100 text-emerald-500',
  sky: 'bg-sky-50 border-sky-100 text-sky-500',
  violet: 'bg-violet-50 border-violet-100 text-violet-500',
}

export default function Benefits() {
  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Why it matters</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Reduce costs. Improve performance.
            <br />
            <span className="gradient-text">Take control.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            When you dare to look at your operations differently,
            you discover how much is still there to gain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map(({ icon: Icon, headline, detail, stat, statLabel, color }) => (
            <div key={headline} className="card p-7">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${iconStyle[color]}`}>
                  <Icon size={17} />
                </div>
                <div className="text-right">
                  <p className={`text-2xl font-bold ${statColor[color]}`}>{stat}</p>
                  <p className="text-xs text-slate-400">{statLabel}</p>
                </div>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">{headline}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
