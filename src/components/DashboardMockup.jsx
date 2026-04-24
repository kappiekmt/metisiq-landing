export default function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-white/8 bg-[#0a1628]/80 backdrop-blur-sm overflow-hidden glow-teal">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0f1f3a]/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 flex items-center px-3">
          <span className="text-xs text-white/25">app.metisiq.io/dashboard</span>
        </div>
      </div>

      <div className="flex h-[420px]">
        {/* Sidebar */}
        <div className="w-52 border-r border-white/5 bg-[#0a1628]/60 p-4 hidden md:flex flex-col gap-1">
          {['Dashboard', 'Production', 'Energy', 'Machine OEE', 'Linen', 'Cost Price', 'Reports', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                i === 0
                  ? 'bg-cyan-400/10 text-cyan-400'
                  : 'text-white/35 hover:text-white/60'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-white/15'}`} />
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-hidden">
          {/* Top stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Production today', value: '4,280 kg', delta: '+8%', up: true },
              { label: 'OEE', value: '84.2%', delta: '+3.1%', up: true },
              { label: 'Energy / kg', value: '0.38 kWh', delta: '-5%', up: true },
              { label: 'CO₂ footprint', value: '2.1 t', delta: '-12%', up: true },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0f1f3a]/70 rounded-xl p-3 border border-white/5">
                <p className="text-[10px] text-white/40 mb-1">{stat.label}</p>
                <p className="text-base font-bold text-white">{stat.value}</p>
                <p className={`text-[10px] mt-0.5 ${stat.up ? 'text-teal-400' : 'text-red-400'}`}>
                  {stat.delta} vs last week
                </p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 bg-[#0f1f3a]/70 rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-white/70">Production throughput</p>
                <span className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full">Live</span>
              </div>
              <svg viewBox="0 0 300 80" className="w-full h-20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,60 C30,55 50,40 80,42 C110,44 130,30 160,28 C190,26 210,35 240,25 C260,18 280,20 300,15"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                />
                <path
                  d="M0,60 C30,55 50,40 80,42 C110,44 130,30 160,28 C190,26 210,35 240,25 C260,18 280,20 300,15 L300,80 L0,80 Z"
                  fill="url(#g1)"
                />
              </svg>
            </div>

            <div className="bg-[#0f1f3a]/70 rounded-xl p-4 border border-white/5">
              <p className="text-xs font-medium text-white/70 mb-3">Energy split</p>
              <div className="space-y-2.5">
                {[
                  { label: 'Gas', pct: 52, color: '#f59e0b' },
                  { label: 'Electricity', pct: 31, color: '#22d3ee' },
                  { label: 'Water', pct: 17, color: '#818cf8' },
                ].map((e) => (
                  <div key={e.label}>
                    <div className="flex justify-between text-[10px] text-white/40 mb-1">
                      <span>{e.label}</span>
                      <span>{e.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${e.pct}%`, backgroundColor: e.color }}
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
