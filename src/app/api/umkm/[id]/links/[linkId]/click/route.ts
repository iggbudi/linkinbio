import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

/**
 * Records a click on a link. Public (no auth) — called via beacon
 * from the public link-in-bio page when a visitor clicks a link.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; linkId: string }> }
) {
  try {
    const { id, linkId } = await params
    const db = getDb()

    const link = db.prepare('SELECT id FROM links WHERE id = ? AND umkm_id = ?').get(linkId, id)
    if (!link) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 })
    }

    db.prepare('INSERT INTO clicks (link_id) VALUES (?)').run(linkId)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
