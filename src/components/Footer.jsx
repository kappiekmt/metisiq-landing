const links = {
  Platform: ['Features', 'Use Cases', 'Roadmap', 'Security'],
  Company: ['About', 'Contact', 'Privacy Policy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <span className="text-[#050d1e] font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">MetisIQ</span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Intelligence that unlocks improvement. The performance platform built exclusively
              for industrial laundries.
            </p>
            <p className="text-white/20 text-xs mt-4">
              Powered by HIB-Laundry Performance
            </p>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/35 text-sm hover:text-white/70 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} MetisIQ / HIB-Laundry Performance. All rights reserved.
          </p>
          <p className="text-white/20 text-xs italic">
            "When you dare to look differently, you see how much can be gained."
          </p>
        </div>
      </div>
    </footer>
  )
}
