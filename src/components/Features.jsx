import { LayoutDashboard, Target, FileBarChart2, Download, Bell, Shield } from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Live dashboards',
    body: 'Role-based views for operators, analysts and directors. Everyone sees exactly what they need — in real time.',
    badge: 'Real-time',
  },
  {
    icon: Target,
    title: 'KPI tracking',
    body: 'Define targets for production, energy, OEE and CO₂. MetisIQ tracks progress and flags deviations automatically.',
    badge: 'Automated',
  },
  {
    icon: FileBarChart2,
    title: 'Custom reports',
    body: 'Build management reports tailored to your business. Schedule delivery daily, weekly or monthly.',
    badge: 'Flexible',
  },
  {
    icon: Download,
    title: 'Export anywhere',
    body: 'One-click export to PDF, Excel or CSV. Share data with customers, finance teams or auditors instantly.',
    badge: 'PDF · Excel · CSV',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    body: 'Get alerted the moment a machine underperforms or consumption spikes — before it becomes a problem.',
    badge: 'Proactive',
  },
  {
    icon: Shield,
    title: 'Secure & scalable',
    body: 'Container-based architecture with privacy-safe data anonymization. Scales from one site to an entire network.',
    badge: 'Enterprise-grade',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/40 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-medium mb-5">
            Key features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Everything you need,
            <br />
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            MetisIQ is purpose-built for industrial laundries — not adapted from a generic BI tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, body, badge }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl border border-white/6 bg-[#0a1628]/40 hover:border-cyan-400/15 hover:bg-[#0a1628]/70 transition-all card-hover overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="text-[10px] text-white/25 bg-white/5 px-2 py-0.5 rounded-full">{badge}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center mb-4">
                <Icon size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
