import { MonitorDot, PieChart, Eye, FileCheck } from 'lucide-react'
import AnimateIn from './AnimateIn'

const cases = [
  { icon: MonitorDot, title: 'Operational control',   persona: 'For operations managers', body: 'Live machine OEE, production throughput and resource consumption — all on one screen. Respond to issues before they cascade.',                                              tags: ['OEE', 'Machine monitoring', 'Alerts'] },
  { icon: PieChart,   title: 'Management reporting',  persona: 'For CEOs & CFOs',         body: 'Automated, boardroom-ready reports. Track P&L per machine, per shift or per customer — without touching a spreadsheet.',                                                    tags: ['KPIs', 'P&L', 'Benchmarking'] },
  { icon: Eye,        title: 'Customer transparency', persona: 'For commercial teams',     body: 'Share performance data with clients to demonstrate service quality, justify pricing and build long-term trust.',                                                             tags: ['Client portals', 'SLA tracking', 'Billing data'] },
  { icon: FileCheck,  title: 'Compliance & CO₂',      persona: 'For sustainability leads', body: 'Automated CO₂ reporting that meets CSRD and customer requirements. Turn sustainability from a cost centre into a competitive advantage.',                                   tags: ['CO₂ reporting', 'CSRD', 'Scope 1 & 2'] },
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Use cases</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Built for every layer
            <br />
            of your organisation
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Because real improvement is not just about data — it's about people.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map(({ icon: Icon, title, persona, body, tags }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="card p-7 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold text-base leading-tight">{title}</h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-0.5">{persona}</p>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{body}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
