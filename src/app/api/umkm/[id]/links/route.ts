import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'
import { DEFAULT_ICON_SLUG } from '@/lib/icons'

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
    ).run(id, title, url, icon || DEFAULT_ICON_SLUG, sort_order || 0)

    const newLink = db.prepare('SELECT * FROM links WHERE id = ?').get(result.lastInsertRowid)
    return NextResponse.json(newLink, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * PUT /api/umkm/[id]/links
 * Reconcile the full link list for a UMKM:
 *  - update links that already exist (matched by id)
 *  - insert new links (no id)
 *  - delete links that exist in DB but are not in the incoming list
 * This replaces the previous "delete all + recreate" pattern so that link
 * IDs stay stable across edits.
 */
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
    const { links } = await request.json()

    if (!Array.isArray(links)) {
      return NextResponse.json({ error: 'Links array required' }, { status: 400 })
    }

    const db = getDb()

    const umkm = db.prepare('SELECT id FROM umkm WHERE id = ?').get(id)
    if (!umkm) {
      return NextResponse.json({ error: 'UMKM not found' }, { status: 404 })
    }

    // Current links in DB
    const existing = db.prepare('SELECT id FROM links WHERE umkm_id = ?').all(id) as { id: number }[]
    const existingIds = new Set(existing.map((l) => l.id))
    const incomingIds = new Set(
      links.filter((l: { id?: number }) => typeof l.id === 'number').map((l: { id: number }) => l.id)
    )

    // Delete links that are no longer present
    for (const l of existing) {
      if (!incomingIds.has(l.id)) {
        db.prepare('DELETE FROM links WHERE id = ? AND umkm_id = ?').run(l.id, id)
      }
    }

    // Upsert each incoming link (preserve order via index)
    const upsert = db.prepare(
      'UPDATE links SET title = ?, url = ?, icon = ?, sort_order = ? WHERE id = ? AND umkm_id = ?'
    )
    const insert = db.prepare(
      'INSERT INTO links (umkm_id, title, url, icon, sort_order) VALUES (?, ?, ?, ?, ?)'
    )

    links.forEach((link: { id?: number; title?: string; url?: string; icon?: string }, index: number) => {
      if (!link.title || !link.url) return // skip incomplete rows

      if (typeof link.id === 'number' && existingIds.has(link.id)) {
        upsert.run(link.title, link.url, link.icon || DEFAULT_ICON_SLUG, index, link.id, id)
      } else {
        insert.run(id, link.title, link.url, link.icon || DEFAULT_ICON_SLUG, index)
      }
    })

    const updated = db.prepare('SELECT * FROM links WHERE umkm_id = ? ORDER BY sort_order, id').all(id)
    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
