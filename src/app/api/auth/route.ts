import { NextRequest, NextResponse } from 'next/server'
import {
  verifyPassword,
  setAuthCookie,
  removeAuthCookie,
  checkRateLimit,
  registerFailure,
  resetFailures,
  getClientIp,
  isPasswordConfigured,
} from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    // Reject early if the server is misconfigured (no ADMIN_PASSWORD set).
    if (!isPasswordConfigured()) {
      return NextResponse.json(
        { error: 'Server misconfiguration: ADMIN_PASSWORD is not set' },
        { status: 500 }
      )
    }

    const ip = getClientIp(request)

    const { allowed, retryAfter } = checkRateLimit(ip)
    if (!allowed) {
      return NextResponse.json(
        { error: `Too many attempts. Try again in ${retryAfter}s` },
        { status: 429, headers: { 'Retry-After': String(retryAfter) } }
      )
    }

    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: 'Password required' }, { status: 400 })
    }

    if (!verifyPassword(password)) {
      registerFailure(ip)
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    // Success: clear failure counter and set cookie.
    resetFailures(ip)
    await setAuthCookie()
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    await removeAuthCookie()
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
