import { TrendingDown, TrendingUp, Brain, Leaf } from 'lucide-react'
import AnimateIn from './AnimateIn'
import CountUp from './CountUp'

const benefits = [
  { icon: TrendingDown, headline: 'Lower operating costs',  detail: 'Identify energy waste, downtime and inefficiencies the moment they occur. Our clients typically see 8–15% cost reduction within the first quarter.', stat: '12', suffix: '%', prefix: '−', statLabel: 'avg. energy cost reduction', color: 'emerald' },
  { icon: TrendingUp,   headline: 'Higher throughput',      detail: 'Real-time OEE insights let operators act immediately on machine issues — dramatically reducing unplanned downtime and boosting daily output.',          stat: '18', suffix: '%', prefix: '+', statLabel: 'avg. production increase',  color: 'sky' },
  { icon: Brain,        headline: 'Smarter decisions',      detail: 'Replace gut feeling with data. Every level of the organisation makes decisions based on the same single source of truth.',                                stat: '5',  suffix: '×', prefix: '',  statLabel: 'faster decision cycle',       color: 'violet' },
  { icon: Leaf,         headline: 'Improved sustainability', detail: 'Automated CO₂ reporting satisfies compliance requirements. Reduction targets become measurable — and achievable — for the first time.',                  stat: '22', suffix: '%', prefix: '−', statLabel: 'avg. CO₂ per kg washed',    color: 'emerald' },
]

const palette = {
  emerald: { icon: 'bg-emerald-50 border-emerald-100 text-emerald-500', stat: 'text-emerald-600' },
  sky:     { icon: 'bg-sky-50 border-sky-100 text-sky-500',             stat: 'text-sky-600' },
  violet:  { icon: 'bg-violet-50 border-violet-100 text-violet-500',    stat: 'text-violet-600' },
}

export default function Benefits() {
  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
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
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map(({ icon: Icon, headline, detail, stat, suffix, prefix, statLabel, color }, i) => {
            const c = palette[color]
            return (
              <AnimateIn key={headline} delay={i * 90}>
                <div className="card p-7 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${c.icon}`}>
                      <Icon size={17} />
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${c.stat}`}>
                        {prefix}<CountUp value={stat} suffix={suffix} duration={1200} />
                      </p>
                      <p className="text-xs text-slate-400">{statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{headline}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{detail}</p>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
