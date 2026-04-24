const companies = [
  'Berendsen', 'Alsico', 'De Witte Lietaer', 'Elis', 'Rentokil Initial', 'CWS',
]

export default function Logos() {
  return (
    <section className="py-12 px-6 border-y border-slate-100 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs text-slate-400 mb-8 uppercase tracking-widest font-semibold">
          Built for industrial laundries across Europe
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {companies.map((name) => (
            <span key={name} className="text-slate-300 font-semibold text-sm tracking-wide hover:text-slate-500 transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
