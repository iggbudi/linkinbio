import { UmkmWithLinks } from '@/lib/types'
import BrandIcon from '@/components/BrandIcon'

export default function WarmTheme({ umkm }: { umkm: UmkmWithLinks }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Subtle warm background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#fcd34d_0.6px,transparent_1px)] bg-[length:5px_5px] opacity-30"></div>

      <div className="relative z-10 max-w-md mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {/* Profile */}
        <div className="text-center mb-9 sm:mb-10">
          {umkm.photo && (
            <div className="relative inline-block mb-5">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-amber-200 blur-md opacity-60"></div>
              <img
                src={umkm.photo}
                alt={umkm.name}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-amber-300 shadow-lg shadow-amber-200/60 ring-4 ring-offset-4 ring-offset-amber-50 ring-amber-200"
              />
            </div>
          )}
          {!umkm.photo && (
            <div className="relative inline-block mb-5">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-amber-200 blur-md opacity-60"></div>
              <div className="relative w-28 h-28 rounded-full bg-amber-100 flex items-center justify-center text-4xl border-4 border-amber-300 shadow-lg shadow-amber-200/60 ring-4 ring-offset-4 ring-offset-amber-50 ring-amber-200">
                🏪
              </div>
            </div>
          )}

          <h1 className="text-[34px] sm:text-4xl font-semibold text-amber-950 tracking-[-1px] leading-[1.05]">
            {umkm.name}
          </h1>
          {umkm.description && (
            <p className="mt-3 text-amber-800 text-sm leading-snug max-w-[280px] mx-auto">
              {umkm.description}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="space-y-3">
          {umkm.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full px-5 py-[17px] bg-white/90 hover:bg-white rounded-2xl transition-all duration-150 border border-amber-200 hover:border-amber-300 shadow-sm hover:shadow-md active:scale-[0.985] hover:scale-[1.01] touch-manipulation"
            >
              <span className="flex items-center justify-center gap-3 text-amber-900 group-hover:text-amber-700 font-medium text-[15px]">
                <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <BrandIcon slug={link.icon} className="w-5 h-5" />
                </span>
                <span>{link.title}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Warm decorative line */}
        <div className="mt-9 sm:mt-10 flex justify-center">
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>

        {/* Footer */}
        <div className="mt-5 text-center">
          <p className="text-[10px] text-amber-500 tracking-[1.5px] uppercase font-medium">
            DIBUAT DENGAN ❤️ UNTUK UMKM INDONESIA
          </p>
        </div>
      </div>
    </div>
  )
}
