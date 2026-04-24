export default function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
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
                  : 'text-slate-400 hover:text-slate-600'
              }`}
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
              { label: 'Production today', value: '4,280 kg', delta: '+8%', up: true },
              { label: 'OEE', value: '84.2%', delta: '+3.1%', up: true },
              { label: 'Energy / kg', value: '0.38 kWh', delta: '−5%', up: true },
              { label: 'CO₂ footprint', value: '2.1 t', delta: '−12%', up: true },
            ].map((stat) => (
              <div key={stat.label} className="p-3 rounded-xl border border-slate-100 bg-slate-50">
                <p className="text-[10px] text-slate-400 mb-1 font-medium">{stat.label}</p>
                <p className="text-base font-bold text-slate-900">{stat.value}</p>
                <p className="text-[10px] mt-0.5 text-emerald-600 font-medium">{stat.delta} vs last week</p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 p-4 rounded-xl border border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-700">Production throughput</p>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-medium">Live</span>
              </div>
              <svg viewBox="0 0 300 72" className="w-full h-16" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,55 C30,50 50,36 80,38 C110,40 130,26 160,24 C190,22 210,31 240,21 C260,14 280,16 300,11"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,55 C30,50 50,36 80,38 C110,40 130,26 160,24 C190,22 210,31 240,21 C260,14 280,16 300,11 L300,72 L0,72 Z"
                  fill="url(#g1)"
                />
              </svg>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
              <p className="text-xs font-semibold text-slate-700 mb-3">Energy split</p>
              <div className="space-y-2.5">
                {[
                  { label: 'Gas', pct: 52, color: '#f59e0b' },
                  { label: 'Electricity', pct: 31, color: '#0ea5e9' },
                  { label: 'Water', pct: 17, color: '#6366f1' },
                ].map((e) => (
                  <div key={e.label}>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1 font-medium">
                      <span>{e.label}</span>
                      <span>{e.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200">
                      <div className="h-full rounded-full" style={{ width: `${e.pct}%`, backgroundColor: e.color }} />
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
