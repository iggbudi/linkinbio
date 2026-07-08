'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Umkm {
  id: number
  slug: string
  name: string
  description: string
  theme: string
  created_at: string
  total_clicks: number
}

export default function AdminDashboard() {
  const [umkmList, setUmkmList] = useState<Umkm[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUmkm()
  }, [])

  async function fetchUmkm() {
    try {
      const res = await fetch('/api/umkm')
      const data = await res.json()
      setUmkmList(data)
    } catch (error) {
      console.error('Error fetching UMKM:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: number, name: string) {
    if (!confirm(`Hapus UMKM "${name}"? Tindakan ini tidak dapat dibatalkan.`)) {
      return
    }

    try {
      const res = await fetch(`/api/umkm/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setUmkmList(umkmList.filter(u => u.id !== id))
      }
    } catch (error) {
      console.error('Error deleting UMKM:', error)
    }
  }

  const themeLabels: Record<string, string> = {
    clean: '🎨 Clean',
    warm: '☀️ Warm',
    bold: '⚡ Bold',
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Kelola semua halaman UMKM</p>
        </div>
        <Link
          href="/admin/umkm/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          + Tambah UMKM
        </Link>
      </div>

      {umkmList.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <div className="text-5xl mb-4">🏪</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Belum ada UMKM</h2>
          <p className="text-gray-500 mb-6">Mulai dengan menambahkan UMKM pertama Anda</p>
          <Link
            href="/admin/umkm/new"
            className="inline-flex px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            + Tambah UMKM Pertama
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {umkmList.map((umkm) => (
            <div
              key={umkm.id}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{umkm.name}</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {themeLabels[umkm.theme] || umkm.theme}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      🔗 <code className="bg-gray-50 px-2 py-0.5 rounded">/{umkm.slug}</code>
                    </span>
                    <span>
                      📅 {new Date(umkm.created_at).toLocaleDateString('id-ID')}
                    </span>
                    <span className="flex items-center gap-1">
                      👆 {umkm.total_clicks || 0} klik
                    </span>
                  </div>
                  
                  {umkm.description && (
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">{umkm.description}</p>
                  )}
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <a
                    href={`/${umkm.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Preview"
                  >
                    👁️
                  </a>
                  <Link
                    href={`/admin/umkm/${umkm.id}`}
                    className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    ✏️
                  </Link>
                  <button
                    onClick={() => handleDelete(umkm.id, umkm.name)}
                    className="px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Hapus"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
