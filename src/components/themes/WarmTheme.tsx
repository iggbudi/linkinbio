import { UmkmWithLinks } from '@/lib/types'

export default function WarmTheme({ umkm }: { umkm: UmkmWithLinks }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-md mx-auto px-6 py-12">
        {/* Profile */}
        <div className="text-center mb-8">
          {umkm.photo && (
            <img
              src={umkm.photo}
              alt={umkm.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-amber-200 shadow-md"
            />
          )}
          {!umkm.photo && (
            <div className="w-28 h-28 rounded-full mx-auto mb-4 bg-amber-100 flex items-center justify-center text-4xl border-4 border-amber-200 shadow-md">
              🏪
            </div>
          )}
          <h1 className="text-2xl font-bold text-amber-900">{umkm.name}</h1>
          {umkm.description && (
            <p className="mt-2 text-amber-700 text-sm">{umkm.description}</p>
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
              className="block w-full px-4 py-3 bg-white/80 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-amber-100 hover:border-amber-300"
            >
              <span className="flex items-center justify-center gap-2 text-amber-800 hover:text-amber-600 font-medium">
                <span className="text-lg">{link.icon}</span>
                <span>{link.title}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="text-amber-300">✦</span>
          <span className="text-orange-300">✦</span>
          <span className="text-amber-300">✦</span>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-amber-400">
            Dibuat dengan ❤️ untuk UMKM Indonesia
          </p>
        </div>
      </div>
    </div>
  )
}
