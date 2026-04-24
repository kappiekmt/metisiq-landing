import { TrendingDown, TrendingUp, Brain, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    headline: 'Lower operating costs',
    detail: 'Identify energy waste, downtime and inefficiencies the moment they occur. Our clients typically see 8–15% cost reduction within the first quarter.',
    stat: '−12%',
    statLabel: 'avg. energy cost reduction',
    color: 'green',
  },
  {
    icon: TrendingUp,
    headline: 'Higher throughput',
    detail: 'Real-time OEE insights let operators act immediately on machine issues — dramatically reducing unplanned downtime and boosting daily output.',
    stat: '+18%',
    statLabel: 'avg. production increase',
    color: 'cyan',
  },
  {
    icon: Brain,
    headline: 'Smarter decisions',
    detail: 'Replace gut feeling with data. Every level of the organisation — from floor to boardroom — makes decisions based on the same single source of truth.',
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

const colorMap = {
  green:   'text-green-400 bg-green-400/10 border-green-400/15',
  cyan:    'text-cyan-400 bg-cyan-400/10 border-cyan-400/15',
  violet:  'text-violet-400 bg-violet-400/10 border-violet-400/15',
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/15',
}

export default function Benefits() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Reduce costs. Improve performance.
            <br />
            <span className="gradient-text">Take control.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            When you dare to look at your operations differently,
            you discover how much is still there to gain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map(({ icon: Icon, headline, detail, stat, statLabel, color }) => {
            const c = colorMap[color]
            const [iconColor, bgColor, borderColor] = c.split(' ')
            return (
              <div
                key={headline}
                className="group p-7 rounded-2xl border border-white/6 bg-[#0a1628]/40 hover:border-white/12 hover:bg-[#0a1628]/70 transition-all card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${iconColor}`}>{stat}</p>
                    <p className="text-xs text-white/30">{statLabel}</p>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{headline}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
