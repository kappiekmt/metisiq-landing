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
    body: 'Container-based architecture with privacy-safe data anonymisation. Scales from one site to an entire network.',
    badge: 'Enterprise-grade',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Key features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Everything you need,
            <br />
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            MetisIQ is purpose-built for industrial laundries — not adapted from a generic BI tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, body, badge }) => (
            <div key={title} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Icon size={17} className="text-slate-600" />
                </div>
                <span className="text-[10px] text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full font-medium">
                  {badge}
                </span>
              </div>
              <h3 className="text-slate-900 font-semibold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
