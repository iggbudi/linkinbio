import { notFound } from 'next/navigation'
import { getDb } from '@/lib/db'
import { UmkmWithLinks } from '@/lib/types'
import ThemeRenderer from '@/components/ThemeRenderer'

export async function generateStaticParams() {
  const db = getDb()
  const umkms = db.prepare('SELECT slug FROM umkm').all() as { slug: string }[]
  return umkms.map((u) => ({ slug: u.slug }))
}

// Allow newly created UMKM to be served on-demand without a rebuild.
export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const db = getDb()
  const umkm = db.prepare('SELECT name, description FROM umkm WHERE slug = ?').get(slug) as { name: string; description: string } | undefined

  if (!umkm) {
    return { title: 'Tidak Ditemukan' }
  }

  return {
    title: `${umkm.name} - LinkInBio`,
    description: umkm.description || `Halaman link-in-bio untuk ${umkm.name}`,
  }
}

export default async function UmkmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const db = getDb()

  const umkm = db.prepare('SELECT * FROM umkm WHERE slug = ?').get(slug) as UmkmWithLinks | undefined

  if (!umkm) {
    notFound()
  }

  const links = db.prepare('SELECT * FROM links WHERE umkm_id = ? ORDER BY sort_order, id').all(umkm.id) as UmkmWithLinks['links']

  const umkmWithLinks: UmkmWithLinks = {
    ...umkm,
    links,
  }

  return <ThemeRenderer umkm={umkmWithLinks} />
}
