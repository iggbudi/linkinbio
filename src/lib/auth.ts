import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const AUTH_COOKIE = 'linkinbio_auth'

if (!ADMIN_PASSWORD) {
  console.warn(
    '\x1b[33m[SECURITY WARNING] ADMIN_PASSWORD is not set. Admin login will be disabled. ' +
      'Set ADMIN_PASSWORD in your .env file before deploying.\x1b[0m'
  )
}

// ---------------------------------------------------------------------------
// Rate limiting (in-memory, per IP)
// ---------------------------------------------------------------------------
const MAX_ATTEMPTS = 5
const LOCK_DURATION_MS = 15 * 60 * 1000 // 15 minutes

interface AttemptRecord {
  count: number
  lockUntil: number
}

const attempts = new Map<string, AttemptRecord>()

export function isPasswordConfigured(): boolean {
  return !!ADMIN_PASSWORD
}

export function verifyPassword(password: string): boolean {
  // If no password is configured in the environment, reject all logins.
  if (!ADMIN_PASSWORD) return false

  // NOTE: This is a simple equality check. For higher security, use a
  // constant-time comparison (e.g. crypto.timingSafeEqual) in the future.
  return password === ADMIN_PASSWORD
}

export function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const rec = attempts.get(ip)
  if (rec && rec.lockUntil > Date.now()) {
    const retryAfter = Math.ceil((rec.lockUntil - Date.now()) / 1000)
    return { allowed: false, retryAfter }
  }
  return { allowed: true }
}

export function registerFailure(ip: string): void {
  const rec = attempts.get(ip) || { count: 0, lockUntil: 0 }
  rec.count += 1
  if (rec.count >= MAX_ATTEMPTS) {
    rec.lockUntil = Date.now() + LOCK_DURATION_MS
    rec.count = 0
  }
  attempts.set(ip, rec)
}

export function resetFailures(ip: string): void {
  attempts.delete(ip)
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') || 'unknown'
}

// ---------------------------------------------------------------------------
// Auth cookie helpers
// ---------------------------------------------------------------------------
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get(AUTH_COOKIE)
  return authCookie?.value === 'authenticated'
}

export async function setAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })
}

export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(AUTH_COOKIE)
}
