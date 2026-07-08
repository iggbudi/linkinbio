import * as si from 'simple-icons'

export interface BrandIcon {
  slug: string
  title: string
  hex: string
  svg: string
}

export function getBrandIcon(slug: string): BrandIcon | null {
  if (!slug) return null

  // Try exact match first
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase())
  const icon = (si as any)[key]

  if (icon) {
    return {
      slug: icon.slug,
      title: icon.title,
      hex: icon.hex,
      svg: icon.svg,
    }
  }

  // Fallback search
  const all = Object.values(si) as any[]
  const found = all.find((i: any) => i.slug === slug || i.slug.includes(slug))
  if (found) {
    return {
      slug: found.slug,
      title: found.title,
      hex: found.hex,
      svg: found.svg,
    }
  }

  return null
}

// Curated list for Indonesian UMKM (Linktree-style)
export const ICON_OPTIONS = [
  { slug: 'homepage', label: 'Website' },
  { slug: 'biolink', label: 'Link' },
  { slug: 'whatsapp', label: 'WhatsApp' },
  { slug: 'instagram', label: 'Instagram' },
  { slug: 'tiktok', label: 'TikTok' },
  { slug: 'facebook', label: 'Facebook' },
  { slug: 'youtube', label: 'YouTube' },
  { slug: 'x', label: 'X' },
  { slug: 'telegram', label: 'Telegram' },
  { slug: 'shopee', label: 'Shopee' },
  { slug: 'gojek', label: 'Gojek' },
  { slug: 'grab', label: 'Grab' },
  { slug: 'googlemaps', label: 'Maps' },
  { slug: 'gmail', label: 'Email' },
  { slug: 'shopify', label: 'Shop' },
  { slug: 'spotify', label: 'Spotify' },
  { slug: 'discord', label: 'Discord' },
  { slug: 'github', label: 'GitHub' },
]

export const DEFAULT_ICON_SLUG = 'homepage'
