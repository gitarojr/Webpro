# Katalog Produk Frontend

Aplikasi React (Vite) bertema **Katalog Produk Kopi Nusantara**. Ini adalah kerangka awal aplikasi fullstack yang akan dikembangkan sampai Pekan 14 dan dihubungkan ke backend/API pada Pekan 11.

Entitas data utama: **Produk** (`id`, `nama`, `kategori`, `harga`, `stok`).

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Struktur komponen (`src/components/`)

| Komponen | Fungsi | Props |
|---|---|---|
| `HeaderAplikasi` | Judul dan subjudul | `judul`, `subjudul` |
| `RingkasanProduk` | Total produk, total stok, stok habis | `daftarProduk` |
| `FormTambahProduk` | Form terkontrol + tombol "Tambah" | `onTambah` |
| `DaftarProduk` | Render list `.map()` + pesan jika kosong | `daftarProduk`, `onHapus` |
| `KartuProduk` | Kartu satu produk | `id`, `nama`, `kategori`, `harga`, `stok`, `onHapus` |
| `FooterAplikasi` | Footer | - |

## Fitur sesuai soal

- State array produk di `App.jsx` (`useState`)
- Render list dengan `.map()` dan `key` unik (`id`)
- Form input controlled component + tombol "Tambah"
- Conditional rendering: "Belum ada data produk" saat daftar kosong (hapus semua produk untuk melihatnya)

## Langkah GitHub (commit minimal 2)

```bash
git init
git add .
git commit -m "Setup awal project React Vite katalog produk"
git branch -M main
git remote add origin https://github.com/USERNAME/katalog-produk-frontend.git
git push -u origin main

# setelah fitur selesai
git add .
git commit -m "Tambah component KartuProduk, state, dan form input"
git push
```
