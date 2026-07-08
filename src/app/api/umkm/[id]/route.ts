import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'
import { isValidPhoto } from '@/lib/validate'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const db = getDb()
    const umkm = db.prepare('SELECT * FROM umkm WHERE id = ?').get(id)
    
    if (!umkm) {
      return NextResponse.json({ error: 'UMKM not found' }, { status: 404 })
    }

    return NextResponse.json(umkm)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authed = await isAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { slug, name, description, photo, theme } = await request.json()

    if (!slug || !name) {
      return NextResponse.json({ error: 'Slug and name are required' }, { status: 400 })
    }

    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: 'Slug must contain only lowercase letters, numbers, and hyphens' }, { status: 400 })
    }

    // Validate photo URL if provided
    if (photo && !isValidPhoto(photo)) {
      return NextResponse.json({ error: 'Photo must be a valid http(s) URL' }, { status: 400 })
    }

    const db = getDb()
    
    // Check if slug already exists for different UMKM
    const existing = db.prepare('SELECT id FROM umkm WHERE slug = ? AND id != ?').get(slug, id)
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }

    const result = db.prepare(
      'UPDATE umkm SET slug = ?, name = ?, description = ?, photo = ?, theme = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).run(slug, name, description || '', photo || null, theme || 'clean', id)

    if (result.changes === 0) {
      return NextResponse.json({ error: 'UMKM not found' }, { status: 404 })
    }

    const updatedUmkm = db.prepare('SELECT * FROM umkm WHERE id = ?').get(id)
    return NextResponse.json(updatedUmkm)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authed = await isAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const db = getDb()
    
    const result = db.prepare('DELETE FROM umkm WHERE id = ?').run(id)

    if (result.changes === 0) {
      return NextResponse.json({ error: 'UMKM not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
