'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import UmkmForm from '@/components/UmkmForm'

interface Link {
  id: number
  title: string
  url: string
  icon: string
  sort_order: number
}

interface UmkmData {
  id: number
  slug: string
  name: string
  description: string
  photo: string
  theme: string
  links: Link[]
}

export default function EditUmkmPage() {
  const params = useParams()
  const [umkm, setUmkm] = useState<UmkmData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUmkm()
  }, [])

  async function fetchUmkm() {
    try {
      const res = await fetch(`/api/umkm/${params.id}`)
      if (!res.ok) {
        throw new Error('UMKM tidak ditemukan')
      }
      const data = await res.json()

      // Fetch links
      const linksRes = await fetch(`/api/umkm/${params.id}/links`)
      const links = await linksRes.json()

      setUmkm({ ...data, links })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !umkm) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        {error || 'UMKM tidak ditemukan'}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit UMKM</h1>
        <p className="text-gray-500 mt-1">Ubah informasi halaman {umkm.name}</p>
      </div>

      <UmkmForm mode="edit" initialData={umkm} />
    </div>
  )
}
