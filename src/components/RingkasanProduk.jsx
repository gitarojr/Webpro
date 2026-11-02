function RingkasanProduk({ daftarProduk }) {
  const totalProduk = daftarProduk.length
  const totalStok = daftarProduk.reduce((jumlah, p) => jumlah + p.stok, 0)
  const stokHabis = daftarProduk.filter((p) => p.stok === 0).length

  return (
    <section className="ringkasan">
      <div className="ringkasan-item">
        <span className="ringkasan-angka">{totalProduk}</span>
        <span className="ringkasan-label">Total Produk</span>
      </div>
      <div className="ringkasan-item">
        <span className="ringkasan-angka">{totalStok}</span>
        <span className="ringkasan-label">Total Stok</span>
      </div>
      <div className="ringkasan-item">
        <span className="ringkasan-angka">{stokHabis}</span>
        <span className="ringkasan-label">Stok Habis</span>
      </div>
    </section>
  )
}

export default RingkasanProduk