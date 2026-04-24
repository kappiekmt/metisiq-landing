import { useEffect, useRef, useState } from 'react'

function useMockupInView() {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900) // after hero load anim
    return () => clearTimeout(t)
  }, [])
  return [ref, ready]
}

export default function DashboardMockup() {
  const [ref, ready] = useMockupInView()

  return (
    <div ref={ref} className="dashboard-float rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-300/70" />
          <div className="w-3 h-3 rounded-full bg-amber-300/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-300/70" />
        </div>
        <div className="flex-1 mx-4 h-6 rounded-md bg-white border border-slate-200 flex items-center px-3">
          <span className="text-xs text-slate-400">app.metisiq.io/dashboard</span>
        </div>
      </div>

      <div className="flex h-[380px] md:h-[420px]">
        {/* Sidebar */}
        <div className="w-52 border-r border-slate-100 bg-slate-50 p-3 hidden md:flex flex-col gap-0.5">
          {['Dashboard', 'Production', 'Energy', 'Machine OEE', 'Linen', 'Cost Price', 'Reports', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                i === 0
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-400'
              }`}
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateX(-8px)',
                transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
              }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-sky-500' : 'bg-slate-300'}`} />
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 bg-white overflow-hidden">
          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Production today', value: '4,280 kg', delta: '+8%' },
              { label: 'OEE', value: '84.2%', delta: '+3.1%' },
              { label: 'Energy / kg', value: '0.38 kWh', delta: '−5%' },
              { label: 'CO₂ footprint', value: '2.1 t', delta: '−12%' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="p-3 rounded-xl border border-slate-100 bg-slate-50"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? 'none' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${0.15 + i * 0.08}s, transform 0.5s ease ${0.15 + i * 0.08}s`,
                }}
              >
                <p className="text-[10px] text-slate-400 mb-1 font-medium">{stat.label}</p>
                <p className="text-base font-bold text-slate-900">{stat.value}</p>
                <p className="text-[10px] mt-0.5 text-emerald-600 font-medium">{stat.delta} vs last week</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div
              className="md:col-span-2 p-4 rounded-xl border border-slate-100 bg-slate-50"
              style={{
                opacity: ready ? 1 : 0,
                transition: 'opacity 0.6s ease 0.55s',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-700">Production throughput</p>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />
                  Live
                </span>
              </div>
              <svg viewBox="0 0 300 72" className="w-full h-16" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Filled area (no draw animation needed, looks fine static) */}
                <path
                  d="M0,55 C30,50 50,36 80,38 C110,40 130,26 160,24 C190,22 210,31 240,21 C260,14 280,16 300,11 L300,72 L0,72 Z"
                  fill="url(#g1)"
                  style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.4s ease 0.8s' }}
                />
                {/* Animated line draw */}
                <path
                  d="M0,55 C30,50 50,36 80,38 C110,40 130,26 160,24 C190,22 210,31 240,21 C260,14 280,16 300,11"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={`chart-line ${ready ? 'in-view' : ''}`}
                />
              </svg>
            </div>

            <div
              className="p-4 rounded-xl border border-slate-100 bg-slate-50"
              style={{
                opacity: ready ? 1 : 0,
                transition: 'opacity 0.6s ease 0.65s',
              }}
            >
              <p className="text-xs font-semibold text-slate-700 mb-3">Energy split</p>
              <div className="space-y-2.5">
                {[
                  { label: 'Gas', color: '#f59e0b', w: '52%', delay: '0.9s' },
                  { label: 'Electricity', color: '#0ea5e9', w: '31%', delay: '1.05s' },
                  { label: 'Water', color: '#6366f1', w: '17%', delay: '1.2s' },
                ].map((e, idx) => (
                  <div key={e.label}>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1 font-medium">
                      <span>{e.label}</span>
                      <span>{e.w}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: e.color,
                          width: ready ? e.w : '0%',
                          transition: ready ? `width 0.9s cubic-bezier(0.22,1,0.36,1) ${e.delay}` : 'none',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
