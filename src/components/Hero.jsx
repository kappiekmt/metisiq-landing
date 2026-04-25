import { ArrowRight } from 'lucide-react'
import DashboardMockup from './DashboardMockup'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden hero-gradient">
      <div
        className="absolute inset-0 pointer-events-none hero-grid"
        style={{ opacity: 0.35 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center hero-animate">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="live-ring relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          Laundry performance intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.05]">
          Intelligence that{' '}
          <span className="gradient-text">unlocks</span>
          <br />
          improvement
        </h1>

        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          One platform. One truth. Full control. MetisIQ turns raw laundry operations data
          into actionable insights — from the factory floor to the boardroom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#demo" className="group flex items-center gap-2 btn-primary shadow-sm">
            Request a demo
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#solution" className="btn-secondary">See how it works</a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-sm text-slate-400 dark:text-slate-500">
          <span>No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span>Industry-specific</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span>Up in days, not months</span>
        </div>
      </div>

      <div className="relative z-10 mt-14 w-full max-w-5xl mx-auto hero-mockup">
        <DashboardMockup />
      </div>
    </section>
  )
}
