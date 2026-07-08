/**
 * Validates that a string is a safe http(s) URL.
 * Used for user-supplied photo/profile URLs to prevent invalid
 * or potentially dangerous schemes (javascript:, data:, etc.).
 */
export function isValidHttpUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/**
 * Validates a photo value: either a safe http(s) URL or a locally
 * uploaded path under /uploads/.
 */
export function isValidPhoto(value: string): boolean {
  if (value.startsWith('/uploads/')) return true
  return isValidHttpUrl(value)
}

