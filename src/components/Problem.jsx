import { Users, Eye, Zap, GitBranch, AlertTriangle } from 'lucide-react'

const pains = [
  {
    icon: Users,
    title: 'Workforce pressure',
    body: 'Skills shortages and declining productivity make every operator\'s hour more valuable — yet most gains go unmeasured.',
  },
  {
    icon: Eye,
    title: 'No real-time insight',
    body: 'Decisions are made hours after the fact. By the time a problem is visible on a report, opportunity is already lost.',
  },
  {
    icon: Zap,
    title: 'Rising energy costs',
    body: 'Gas, electricity and water costs are climbing. Without granular tracking, you can\'t find — let alone fix — the waste.',
  },
  {
    icon: GitBranch,
    title: 'Scattered data',
    body: 'Data lives in spreadsheets, machine logs and ERP systems that never talk to each other. The full picture is invisible.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium mb-5">
            <AlertTriangle size={12} />
            The challenge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Data is everywhere…
            <br />
            <span className="text-white/40">and nowhere at the same time</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Industrial laundries generate huge volumes of data — but without the right platform,
            that data sits idle while costs rise and efficiency falls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group flex gap-4 p-6 rounded-2xl border border-white/6 bg-[#0a1628]/40 hover:border-white/12 hover:bg-[#0a1628]/70 transition-all card-hover"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/15 flex items-center justify-center">
                <Icon size={18} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-amber-400/15 bg-amber-400/5 text-center">
          <p className="text-amber-300/80 text-sm italic">
            "Decisions are made too late. Opportunities are missed."
          </p>
        </div>
      </div>
    </section>
  )
}
