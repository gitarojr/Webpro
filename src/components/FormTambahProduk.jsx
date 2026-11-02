import { useState } from 'react'

function FormTambahProduk({ onTambah }) {
  // Controlled component: setiap input terhubung ke state
  const [nama, setNama] = useState('')
  const [kategori, setKategori] = useState('Biji Kopi')
  const [harga, setHarga] = useState('')
  const [stok, setStok] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nama.trim() === '' || harga === '' || stok === '') return

    onTambah({
      nama: nama.trim(),
      kategori,
      harga: Number(harga),
      stok: Number(stok),
    })

    // Reset form setelah menambah
    setNama('')
    setKategori('Biji Kopi')
    setHarga('')
    setStok('')
  }

  return (
    <section className="kartu-form">
      <h2>Tambah Produk Baru</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nama Produk
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="contoh: Kopi Luwak Premium 100g"
            required
          />
        </label>

        <label>
          Kategori
          <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
            <option>Biji Kopi</option>
            <option>Alat Seduh</option>
            <option>Aksesoris</option>
          </select>
        </label>

        <label>
          Harga (Rp)
          <input
            type="number"
            min="0"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="85000"
            required
          />
        </label>

        <label>
          Stok
          <input
            type="number"
            min="0"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            placeholder="10"
            required
          />
        </label>

        <button type="submit" className="tombol-tambah">
          Tambah
        </button>
      </form>
    </section>
  )
}

export default FormTambahProduk