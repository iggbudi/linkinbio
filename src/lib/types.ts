export interface Umkm {
  id: number
  slug: string
  name: string
  description: string
  photo: string | null
  theme: 'clean' | 'warm' | 'bold'
  created_at: string
  updated_at: string
}

export interface Link {
  id: number
  umkm_id: number
  title: string
  url: string
  icon: string
  sort_order: number
  created_at: string
}

export interface UmkmWithLinks extends Umkm {
  links: Link[]
}
