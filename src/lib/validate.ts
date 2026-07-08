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
