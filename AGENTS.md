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

## Alur Bug Fix / Refactor / Peningkatan (Wajib)
Setiap kali melakukan perbaikan bug, refactor, atau peningkatan fitur, ikuti alur ini:
1. **Rencanakan** perubahan (tuliskan rencana singkat sebelum kode).
2. **Implementasi** perubahan pada kode.
3. **Security & QA check**: jalankan `npm run build` (wajib lolos type-check) dan uji logika yang berubah.
4. **Update dokumentasi** yang relevan (README.md, AGENTS.md, komentar kode bila perlu).
5. **Commit** dengan pesan yang jelas (sebutkan scope: `fix:`, `feat:`, `security:`, `refactor:`).
6. **Push** ke branch `main` di `https://github.com/iggbudi/linkinbio.git`.

> Catatan: `npm run lint` mungkin gagal karena dependency ESLint corrupt — gunakan `npm run build` sebagai gate type-check utama.

