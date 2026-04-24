import { ArrowRight, ChevronDown } from 'lucide-react'
import DashboardMockup from './DashboardMockup'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Laundry performance intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
          Intelligence that{' '}
          <span className="gradient-text">unlocks</span>
          <br />
          improvement
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          One platform. One truth. Full control. MetisIQ turns raw laundry operations data
          into actionable insights — from the factory floor to the boardroom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#050d1e] font-semibold text-sm hover:bg-cyan-300 transition-all"
          >
            Request a demo
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#solution"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            See how it works
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/30">
          <span>No credit card required</span>
          <span>·</span>
          <span>Industry-specific</span>
          <span>·</span>
          <span>Up in days, not months</span>
        </div>
      </div>

      {/* Dashboard mockup */}
      <div className="relative z-10 mt-16 w-full max-w-5xl mx-auto">
        <DashboardMockup />
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
