# LinkInBio

Platform link-in-bio sederhana dan cepat untuk UMKM Indonesia. Satu dashboard untuk mengelola banyak halaman UMKM dengan 3 tema yang sudah dioptimalkan.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![SQLite](https://img.shields.io/badge/SQLite-003B57?logo=sqlite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss)

## ✨ Fitur

- **Multi-tenant** — Satu admin bisa mengelola banyak UMKM
- **Slug unik** — Setiap UMKM punya halaman sendiri di `domain.com/[slug]`
- **3 Tema Siap Pakai**
  - **Clean** — Minimalis, modern, profesional
  - **Warm** — Hangat, ramah, cocok untuk kuliner & kerajinan
  - **Bold** — Energetic, tegas, cocok untuk fashion, gym, otomotif
- **Kelola Link** — Tambah, edit, urutkan link (WA, Shopee, IG, dll)
- **Mobile First** — Tampilan optimal di smartphone
- **Cepat** — Menggunakan SQLite lokal + Next.js
- **Auth Sederhana** — Password-based (diatur via `.env`)

## 🎨 Tema

| Tema   | Karakter          | Cocok Untuk                  |
|--------|-------------------|------------------------------|
| Clean  | Minimalis & bersih | Jasa, konsultan, profesional |
| Warm   | Hangat & ramah    | Kuliner, kerajinan, toko     |
| Bold   | Energetic & kuat  | Fashion, gym, musik, otomotif |

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: SQLite (better-sqlite3)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Auth**: Password sederhana (hardcoded)

## 🚀 Cara Menjalankan

### 1. Clone & Install

```bash
git clone https://github.com/iggbudi/linkinbio.git
cd linkinbio
npm install
```

### 2. Setup Environment

Buat file `.env` di root project:

```env
ADMIN_PASSWORD=rahasia123
```

> **Wajib di-set**: tanpa `ADMIN_PASSWORD`, login akan ditolak (tidak ada default password).

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 📋 Cara Penggunaan

1. Buka **/admin** → login dengan password
2. Klik **+ Tambah UMKM**
3. Isi data:
   - Nama UMKM
   - Slug (contoh: `kopi-pak-budi`)
   - Deskripsi singkat
   - Foto (opsional, pakai URL)
   - Pilih tema
4. Tambahkan beberapa link
5. Simpan
6. Halaman UMKM bisa diakses di `http://localhost:3000/[slug]`

## ✨ Detail Fitur Link

- **Urut link**: drag-and-drop baris link, atau pakai tombol ↑ / ↓ untuk memindahkan urutan.
- **Edit tanpa kehilangan data**: link di-reconcile (update yang ada, insert baru, hapus yang dihilangkan) lewat satu request `PUT /api/umkm/[id]/links` — ID link tetap stabil.
- **Halaman langsung aktif**: UMKM baru bisa diakses tanpa rebuild (`dynamicParams = true`).
- **Icon brand**: pakai [Simple Icons](https://simpleicons.org) (WhatsApp, Instagram, Shopee, Gojek, Grab, dll).

## 🖼️ Upload & Preview

- **Upload foto lokal**: tombol upload di form (JPG/PNG/WEBP/GIF, maks 2 MB) → tersimpan di `public/uploads/` (di-gitignore). Masih bisa pakai URL eksternal.
- **Preview tema**: tombol 👁️ Preview di form menampilkan tampilan langsung tema yang dipilih dengan data form saat ini.

## 📊 Analytics

- Setiap klik link pada halaman publik tercatat (via `sendBeacon` ke `POST /api/umkm/[id]/links/[linkId]/click`).
- Jumlah klik per link tampil di form edit, dan total klik per UMKM tampil di dashboard admin.
- Data disimpan di tabel `clicks` (relasi ke `links`).

## 📁 Struktur Project

```
src/
├── app/
│   ├── [slug]/          # Halaman publik UMKM
│   ├── admin/           # Dashboard admin
│   └── api/             # API routes
├── components/
│   ├── themes/          # Clean, Warm, Bold
│   └── ThemeRenderer.tsx
└── lib/
    ├── db.ts            # SQLite initialization
    ├── auth.ts
    └── types.ts
```

## 🔐 Keamanan

- Password admin **wajib** di-set via `ADMIN_PASSWORD` di `.env`. Tanpa itu, login akan ditolak (tidak ada default password).
- Login dilindungi **rate limiting**: maksimal 5 percobaan per IP, kemudian dikunci 15 menit.
- URL foto profil divalidasi — hanya `http(s)` yang diperbolehkan (menolak `javascript:`, `data:`, dll).
- Semua API mutasi (create/update/delete UMKM & link) memerlukan cookie auth.
- Cookie auth `httpOnly` + `sameSite: lax`, dan `secure` di production.
- `.env` dan file database diabaikan di `.gitignore`.
- Tidak ada registrasi publik (single admin).

> ⚠️ **Catatan deploy**: Database menggunakan `better-sqlite3` (sinkron, filesystem). Cocok untuk VPS / Node server. **Tidak direkomendasikan untuk serverless (Vercel)** tanpa penyesuaian storage.

## 📦 Build untuk Production

```bash
npm run build
npm run start
```

## 📝 Catatan

- Database otomatis dibuat di `data/linkinbio.db` saat pertama kali dijalankan
- Semua perubahan langsung tersimpan ke SQLite
- Generate static params digunakan agar halaman UMKM bisa di-prerender

## 🤝 Kontribusi

Pull request sangat diterima!  
Silakan fork dan buat improvement (misalnya: tambah tema baru, export PDF, analytics, dll).

## 📄 License

MIT — bebas digunakan untuk keperluan pribadi maupun komersial.

---

Dibuat dengan ❤️ untuk UMKM Indonesia
