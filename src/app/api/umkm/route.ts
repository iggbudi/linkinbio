import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  try {
    const db = getDb()
    const umkm = db.prepare('SELECT * FROM umkm ORDER BY created_at DESC').all()
    return NextResponse.json(umkm)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const authed = await isAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { slug, name, description, photo, theme } = await request.json()

    if (!slug || !name) {
      return NextResponse.json({ error: 'Slug and name are required' }, { status: 400 })
    }

    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: 'Slug must contain only lowercase letters, numbers, and hyphens' }, { status: 400 })
    }

    const db = getDb()
    
    // Check if slug already exists
    const existing = db.prepare('SELECT id FROM umkm WHERE slug = ?').get(slug)
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }

    const result = db.prepare(
      'INSERT INTO umkm (slug, name, description, photo, theme) VALUES (?, ?, ?, ?, ?)'
    ).run(slug, name, description || '', photo || null, theme || 'clean')

    const newUmkm = db.prepare('SELECT * FROM umkm WHERE id = ?').get(result.lastInsertRowid)
    return NextResponse.json(newUmkm, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
