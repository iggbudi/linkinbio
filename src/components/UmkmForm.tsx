'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Link {
  id?: number
  title: string
  url: string
  icon: string
  sort_order: number
}

interface UmkmFormProps {
  mode: 'create' | 'edit'
  initialData?: {
    id?: number
    slug: string
    name: string
    description: string
    photo: string
    theme: string
    links?: Link[]
  }
}

const THEME_OPTIONS = [
  { value: 'clean', label: 'Clean', description: 'Minimalis & modern', preview: 'bg-white border-gray-200' },
  { value: 'warm', label: 'Warm', description: 'Ramah & hangat', preview: 'bg-amber-50 border-amber-200' },
  { value: 'bold', label: 'Bold', description: 'Energetic & eye-catching', preview: 'bg-gray-900 border-yellow-400' },
]

const ICON_OPTIONS = ['🔗', '📱', '💬', '🛒', '📦', '📍', '📧', '🌐', '📸', '🎵', '▶️', '💼', '🏠', '📞', '✨', '🎯']

export default function UmkmForm({ mode, initialData }: UmkmFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [slug, setSlug] = useState(initialData?.slug || '')
  const [name, setName] = useState(initialData?.name || '')
  const [description, setDescription] = useState(initialData?.description || '')
  const [photo, setPhoto] = useState(initialData?.photo || '')
  const [theme, setTheme] = useState(initialData?.theme || 'clean')
  const [links, setLinks] = useState<Link[]>(initialData?.links || [])

  function addLink() {
    setLinks([...links, { title: '', url: '', icon: '🔗', sort_order: links.length }])
  }

  function removeLink(index: number) {
    setLinks(links.filter((_, i) => i !== index))
  }

  function updateLink(index: number, field: keyof Link, value: string | number) {
    const updated = [...links]
    updated[index] = { ...updated[index], [field]: value }
    setLinks(updated)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validate
      if (!slug || !name) {
        throw new Error('Slug dan nama wajib diisi')
      }

      if (!/^[a-z0-9-]+$/.test(slug)) {
        throw new Error('Slug hanya boleh huruf kecil, angka, dan strip')
      }

      // Create or update UMKM
      const umkmUrl = mode === 'create' ? '/api/umkm' : `/api/umkm/${initialData?.id}`
      const umkmMethod = mode === 'create' ? 'POST' : 'PUT'

      const umkmRes = await fetch(umkmUrl, {
        method: umkmMethod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, name, description, photo: photo || null, theme }),
      })

      if (!umkmRes.ok) {
        const data = await umkmRes.json()
        throw new Error(data.error || 'Gagal menyimpan UMKM')
      }

      const umkmData = await umkmRes.json()
      const umkmId = umkmData.id

      // Handle links
      if (mode === 'edit' && initialData?.links) {
        // Delete existing links
        for (const link of initialData.links) {
          await fetch(`/api/umkm/${umkmId}/links/${link.id}`, { method: 'DELETE' })
        }
      }

      // Create new links
      for (const link of links) {
        if (link.title && link.url) {
          await fetch(`/api/umkm/${umkmId}/links`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(link),
          })
        }
      }

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Informasi Dasar</h2>
        
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama UMKM <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (mode === 'create') {
                  setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))
                }
              }}
              placeholder="Contoh: Warung Makmur"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug (URL) <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">domain.com/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="warung-makmur"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Hanya huruf kecil, angka, dan strip</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ceritakan tentang UMKM Anda..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL Foto Profil</label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Opsional, bisa diisi nanti</p>
          </div>
        </div>
      </div>

      {/* Theme Selection */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Pilih Tema</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {THEME_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setTheme(option.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                theme === option.value
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-full h-20 rounded-lg mb-3 ${option.preview}`}></div>
              <div className="font-medium text-gray-900">{option.label}</div>
              <div className="text-sm text-gray-500">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Link</h2>
          <button
            type="button"
            onClick={addLink}
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            + Tambah Link
          </button>
        </div>

        {links.length === 0 ? (
          <p className="text-gray-500 text-sm py-4 text-center">
            Belum ada link. Klik &quot;Tambah Link&quot; untuk menambahkan.
          </p>
        ) : (
          <div className="space-y-3">
            {links.map((link, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <select
                      value={link.icon}
                      onChange={(e) => updateLink(index, 'icon', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      {ICON_OPTIONS.map(icon => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) => updateLink(index, 'title', e.target.value)}
                      placeholder="Judul (WhatsApp, Shopee, dll)"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) => updateLink(index, 'url', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeLink(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Menyimpan...' : mode === 'create' ? 'Buat Halaman' : 'Simpan Perubahan'}
        </button>
      </div>
    </form>
  )
}
