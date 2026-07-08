'use client'

import { UmkmWithLinks } from '@/lib/types'
import CleanTheme from './themes/CleanTheme'
import WarmTheme from './themes/WarmTheme'
import BoldTheme from './themes/BoldTheme'

interface ThemeRendererProps {
  umkm: UmkmWithLinks
}

export default function ThemeRenderer({ umkm }: ThemeRendererProps) {
  switch (umkm.theme) {
    case 'warm':
      return <WarmTheme umkm={umkm} />
    case 'bold':
      return <BoldTheme umkm={umkm} />
    case 'clean':
    default:
      return <CleanTheme umkm={umkm} />
  }
}
