import { UmkmWithLinks } from '@/lib/types'

export default function BoldTheme({ umkm }: { umkm: UmkmWithLinks }) {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Background pattern - dots + subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#374151_0.8px,transparent_1px)] bg-[length:4px_4px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1f2937_0.5px,transparent_0.5px)] bg-[size:28px_28px] opacity-60"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/40 to-gray-950"></div>

      <div className="relative z-10 max-w-md mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {/* Profile */}
        <div className="text-center mb-9 sm:mb-10">
          {umkm.photo && (
            <div className="relative inline-block mb-5">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 blur-lg opacity-50"></div>
              <img
                src={umkm.photo}
                alt={umkm.name}
                className="relative w-28 h-28 rounded-2xl object-cover border-[3px] border-yellow-400 shadow-2xl shadow-yellow-500/40 ring-4 ring-offset-4 ring-offset-gray-950 ring-yellow-400/30"
              />
            </div>
          )}
          {!umkm.photo && (
            <div className="relative inline-block mb-5">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 blur-lg opacity-50"></div>
              <div className="relative w-28 h-28 rounded-2xl bg-gray-900 flex items-center justify-center text-4xl border-[3px] border-yellow-400 shadow-2xl shadow-yellow-500/40 ring-4 ring-offset-4 ring-offset-gray-950 ring-yellow-400/30">
                🏪
              </div>
            </div>
          )}

          <h1 className="text-[34px] sm:text-4xl font-black text-white tracking-[-1.5px] leading-[1.05]">
            {umkm.name}
          </h1>
          {umkm.description && (
            <p className="mt-3 text-gray-400 text-sm leading-snug max-w-[280px] mx-auto">
              {umkm.description}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="space-y-3.5">
          {umkm.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full px-6 py-[17px] bg-gray-900/90 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 rounded-2xl transition-all duration-150 border-2 border-gray-800 hover:border-yellow-400 active:scale-[0.985] hover:scale-[1.015] hover:shadow-2xl hover:shadow-yellow-500/25 touch-manipulation"
            >
              <span className="flex items-center justify-center gap-3 text-white group-hover:text-gray-950 font-extrabold text-[15px] tracking-[-0.2px]">
                <span className="text-2xl transition-transform group-hover:scale-110 group-hover:-rotate-6">
                  {link.icon}
                </span>
                <span>{link.title}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Bold Accent */}
        <div className="mt-9 sm:mt-10 flex justify-center">
          <div className="h-[5px] w-20 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
        </div>

        {/* Footer */}
        <div className="mt-5 text-center">
          <p className="text-[10px] text-gray-500 tracking-[2.5px] uppercase font-medium">
            POWERED BY LINKINBIO
          </p>
        </div>
      </div>
    </div>
  )
}
