const companies = [
  'Berendsen', 'Alsico', 'De Witte Lietaer', 'Elis', 'Rentokil Initial', 'CWS',
]

export default function Logos() {
  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-white/30 mb-10 uppercase tracking-widest font-medium">
          Built for industrial laundries across Europe
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <span key={name} className="text-white/20 font-semibold text-sm tracking-wide hover:text-white/40 transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
