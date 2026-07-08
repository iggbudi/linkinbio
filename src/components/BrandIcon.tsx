'use client'

import * as si from 'simple-icons'
import { getBrandIcon } from '@/lib/icons'

interface BrandIconProps {
  slug: string
  className?: string
  color?: string
}

export default function BrandIcon({ slug, className = 'w-5 h-5', color }: BrandIconProps) {
  if (!slug) {
    // fallback generic link
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  }

  const icon = getBrandIcon(slug)

  if (!icon) {
    // Unknown slug (old emoji data or custom) → show raw or generic
    return <span className={`${className} flex items-center justify-center text-lg`}>{slug}</span>
  }

  // Use provided color or brand hex
  const fillColor = color || `#${icon.hex}`

  // Inject fill color into SVG
  const coloredSvg = icon.svg.replace('<svg', `<svg fill="${fillColor}"`)

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: coloredSvg }}
    />
  )
}
