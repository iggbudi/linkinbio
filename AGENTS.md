# Panduan Agent
## SOP Pengembangan Aplikasi Link in Bio
	- Wajib brainstorming target audience
	- Wajib menuliskan paint poin target segment
	- Tanyakan dulu techstack yang mau dipakai (kamu bisa kasih rekomendasi)

## Project Info
- **Target Audience**: UMKM Indonesia
- **Tech Stack**: Next.js + SQLite + Tailwind
- **Features**: Multi-tenant link-in-bio platform with 3 themes
- **Auth**: Simple password-based (hardcoded in .env)

## Architecture
- Single admin manages multiple UMKM pages
- Each UMKM gets a unique slug: `domain.com/[slug]`
- SQLite database stored in `data/linkinbio.db`
- 3 themes available: Clean, Warm, Bold

## Key Files
- `src/lib/db.ts` - Database initialization
- `src/lib/auth.ts` - Authentication utilities
- `src/lib/types.ts` - TypeScript types
- `src/components/themes/` - Theme components
- `src/app/admin/` - Admin dashboard
- `src/app/[slug]/` - Public UMKM pages

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```
