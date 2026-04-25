import { Users, Eye, Zap, GitBranch } from 'lucide-react'
import AnimateIn from './AnimateIn'

const pains = [
  {
    icon: Users,
    title: 'Workforce pressure',
    body: "Skills shortages and declining productivity make every operator's hour more valuable — yet most gains go unmeasured.",
  },
  {
    icon: Eye,
    title: 'No real-time insight',
    body: "Decisions are made hours after the fact. By the time a problem shows up on a report, the opportunity is already gone.",
  },
  {
    icon: Zap,
    title: 'Rising energy costs',
    body: "Gas, electricity and water costs keep climbing. Without granular tracking, you can't find — let alone fix — the waste.",
  },
  {
    icon: GitBranch,
    title: 'Scattered data',
    body: 'Data lives in spreadsheets, machine logs and ERP systems that never talk to each other. The full picture stays invisible.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">The challenge</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Data is everywhere…
            <br />
            <span className="text-slate-400 dark:text-slate-600">and nowhere at the same time</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Industrial laundries generate huge volumes of data — but without the right platform,
            that data sits idle while costs rise and efficiency falls.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map(({ icon: Icon, title, body }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="card p-6 h-full">
                <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-1.5">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={320} className="mt-8">
          <div className="p-5 rounded-2xl border border-amber-100 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 text-center">
            <p className="text-amber-700 dark:text-amber-400 text-sm italic font-medium">
              "Decisions are made too late. Opportunities are missed."
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
