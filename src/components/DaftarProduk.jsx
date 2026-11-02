import KartuProduk from './KartuProduk.jsx'

function DaftarProduk({ daftarProduk, onHapus }) {
  // Conditional rendering: tampilkan pesan jika daftar kosong
  if (daftarProduk.length === 0) {
    return (
      <section className="daftar">
        <h2>Daftar Produk</h2>
        <p className="kosong">Belum ada data produk</p>
      </section>
    )
  }

  return (
    <section className="daftar">
      <h2>Daftar Produk</h2>
      <div className="grid">
        {daftarProduk.map((produk) => (
          <KartuProduk
            key={produk.id}
            id={produk.id}
            nama={produk.nama}
            kategori={produk.kategori}
            harga={produk.harga}
            stok={produk.stok}
            onHapus={onHapus}
          />
        ))}
      </div>
    </section>
  )
}

export default DaftarProduk
