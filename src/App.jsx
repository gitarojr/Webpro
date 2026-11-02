import { useState } from 'react'
import HeaderAplikasi from './components/HeaderAplikasi.jsx'
import DaftarProduk from './components/DaftarProduk.jsx'

const dataAwal = [
  { id: 1, nama: 'Biji Kopi Arabika Gayo 250g', kategori: 'Biji Kopi', harga: 85000, stok: 40 },
  { id: 2, nama: 'Hand Grinder Ceramic Burr', kategori: 'Alat Seduh', harga: 245000, stok: 12 },
  { id: 3, nama: 'V60 Dripper Keramik 02', kategori: 'Alat Seduh', harga: 120000, stok: 0 },
  { id: 4, nama: 'Kopi Robusta Temanggung 500g', kategori: 'Biji Kopi', harga: 95000, stok: 25 },
]

function App() {
  const [daftarProduk, setDaftarProduk] = useState(dataAwal)

  const hapusProduk = (id) => {
    setDaftarProduk((sebelumnya) => sebelumnya.filter((p) => p.id !== id))
  }

  return (
    <div className="app">
      <HeaderAplikasi
        judul="Katalog Produk Kopi Nusantara"
        subjudul="Kelola daftar produk toko perlengkapan kopi Anda"
      />
      <main className="konten">
        <DaftarProduk daftarProduk={daftarProduk} onHapus={hapusProduk} />
      </main>
    </div>
  )
}

export default App