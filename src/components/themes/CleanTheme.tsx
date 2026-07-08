import { UmkmWithLinks } from '@/lib/types'
import BrandIcon from '@/components/BrandIcon'

export default function CleanTheme({ umkm }: { umkm: UmkmWithLinks }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {/* Profile */}
        <div className="text-center mb-9 sm:mb-10">
          {umkm.photo && (
            <img
              src={umkm.photo}
              alt={umkm.name}
              className="w-28 h-28 rounded-full mx-auto mb-5 object-cover border-[3px] border-gray-100 shadow-sm"
            />
          )}
          {!umkm.photo && (
            <div className="w-28 h-28 rounded-full mx-auto mb-5 bg-gray-50 flex items-center justify-center text-4xl border-[3px] border-gray-100">
              🏪
            </div>
          )}

          <h1 className="text-[34px] sm:text-4xl font-semibold text-gray-900 tracking-[-1px] leading-[1.05]">
            {umkm.name}
          </h1>
          {umkm.description && (
            <p className="mt-3 text-gray-500 text-sm leading-snug max-w-[280px] mx-auto">
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
              className="group block w-full px-5 py-[17px] bg-white hover:bg-gray-50 rounded-2xl transition-all duration-150 border border-gray-200 hover:border-gray-300 active:scale-[0.985] hover:shadow-sm touch-manipulation"
            >
              <span className="flex items-center justify-center gap-3 text-gray-700 group-hover:text-gray-900 font-medium text-[15px]">
                <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <BrandIcon slug={link.icon} className="w-5 h-5" color="#374151" />
                </span>
                <span>{link.title}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Subtle accent */}
        <div className="mt-9 sm:mt-10 flex justify-center">
          <div className="h-px w-12 bg-gray-200"></div>
        </div>

        {/* Footer */}
        <div className="mt-5 text-center">
          <p className="text-[10px] text-gray-400 tracking-[1.5px] uppercase">
            LINK IN BIO
          </p>
        </div>
      </div>
    </div>
  )
}
