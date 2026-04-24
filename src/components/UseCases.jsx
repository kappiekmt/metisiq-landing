import { MonitorDot, PieChart, Eye, FileCheck } from 'lucide-react'

const cases = [
  {
    icon: MonitorDot,
    title: 'Operational control',
    persona: 'For operations managers',
    body: 'Live machine OEE, production throughput and resource consumption — all on one screen. Respond to issues before they cascade.',
    tags: ['OEE', 'Machine monitoring', 'Alerts'],
  },
  {
    icon: PieChart,
    title: 'Management reporting',
    persona: 'For CEOs & CFOs',
    body: 'Automated, boardroom-ready reports. Track P&L per machine, per shift or per customer — without touching a spreadsheet.',
    tags: ['KPIs', 'P&L', 'Benchmarking'],
  },
  {
    icon: Eye,
    title: 'Customer transparency',
    persona: 'For commercial teams',
    body: 'Share performance data with clients to demonstrate service quality, justify pricing and build long-term trust.',
    tags: ['Client portals', 'SLA tracking', 'Billing data'],
  },
  {
    icon: FileCheck,
    title: 'Compliance & CO₂',
    persona: 'For sustainability leads',
    body: 'Automated CO₂ reporting that meets CSRD and customer requirements. Turn sustainability from a cost centre into a competitive advantage.',
    tags: ['CO₂ reporting', 'CSRD', 'Scope 1 & 2'],
  },
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-medium mb-5">
            Use cases
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Built for every layer
            <br />
            of your organisation
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Because real improvement is not just about data — it's about people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map(({ icon: Icon, title, persona, body, tags }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-white/6 bg-[#0a1628]/40 hover:border-cyan-400/15 hover:bg-[#0a1628]/70 transition-all card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">{title}</h3>
                  <p className="text-xs text-cyan-400/70 mt-0.5">{persona}</p>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-4">{body}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
