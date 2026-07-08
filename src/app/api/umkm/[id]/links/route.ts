import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const db = getDb()
    const links = db.prepare('SELECT * FROM links WHERE umkm_id = ? ORDER BY sort_order, id').all(id)
    return NextResponse.json(links)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authed = await isAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { title, url, icon, sort_order } = await request.json()

    if (!title || !url) {
      return NextResponse.json({ error: 'Title and URL are required' }, { status: 400 })
    }

    const db = getDb()
    
    // Check if UMKM exists
    const umkm = db.prepare('SELECT id FROM umkm WHERE id = ?').get(id)
    if (!umkm) {
      return NextResponse.json({ error: 'UMKM not found' }, { status: 404 })
    }

    const result = db.prepare(
      'INSERT INTO links (umkm_id, title, url, icon, sort_order) VALUES (?, ?, ?, ?, ?)'
    ).run(id, title, url, icon || 'biolink', sort_order || 0)

    const newLink = db.prepare('SELECT * FROM links WHERE id = ?').get(result.lastInsertRowid)
    return NextResponse.json(newLink, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
