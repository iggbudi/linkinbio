import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🔗</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            LinkInBio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platform link-in-bio untuk UMKM Indonesia. Satu link untuk semua kebutuhan bisnis Anda.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
          >
            🚀 Mulai Kelola UMKM
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Kelola semua halaman UMKM dari satu dashboard
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3 Tema Menarik</h3>
            <p className="text-gray-600 text-sm">
              Pilih dari tema Clean, Warm, atau Bold sesuai karakter UMKM Anda
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile First</h3>
            <p className="text-gray-600 text-sm">
              Tampilan sempurna di semua perangkat, terutama smartphone
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Super Cepat</h3>
            <p className="text-gray-600 text-sm">
              Loading kilat berkat teknologi modern dan database lokal
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Cara Kerja</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Buat Halaman</h4>
              <p className="text-gray-600 text-sm">Tambah UMKM baru di dashboard admin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Tambah Link</h4>
              <p className="text-gray-600 text-sm">Masukkan semua link bisnis (WhatsApp, Shopee, dll)</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Bagikan</h4>
              <p className="text-gray-600 text-sm">Gunakan link di bio Instagram, TikTok, dll</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Dibuat dengan ❤️ untuk UMKM Indonesia</p>
        </div>
      </div>
    </div>
  )
}
