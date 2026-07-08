import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; linkId: string }> }
) {
  try {
    const authed = await isAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, linkId } = await params
    const { title, url, icon, sort_order } = await request.json()

    if (!title || !url) {
      return NextResponse.json({ error: 'Title and URL are required' }, { status: 400 })
    }

    const db = getDb()
    
    const result = db.prepare(
      'UPDATE links SET title = ?, url = ?, icon = ?, sort_order = ? WHERE id = ? AND umkm_id = ?'
    ).run(title, url, icon || 'biolink', sort_order || 0, linkId, id)

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 })
    }

    const updatedLink = db.prepare('SELECT * FROM links WHERE id = ?').get(linkId)
    return NextResponse.json(updatedLink)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; linkId: string }> }
) {
  try {
    const authed = await isAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, linkId } = await params
    const db = getDb()
    
    const result = db.prepare('DELETE FROM links WHERE id = ? AND umkm_id = ?').run(linkId, id)

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
