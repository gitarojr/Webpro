function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(angka)
}

function KartuProduk({ id, nama, kategori, harga, stok, onHapus }) {
  const habis = stok === 0

  return (
    <article className="kartu-produk">
      <span className="badge-kategori">{kategori}</span>
      <h3>{nama}</h3>
      <p className="harga">{formatRupiah(harga)}</p>
      <p className={habis ? 'stok stok-habis' : 'stok'}>
        {habis ? 'Stok habis' : `Stok: ${stok}`}
      </p>
      <button className="tombol-hapus" onClick={() => onHapus(id)}>
        Hapus
      </button>
    </article>
  )
}

export default KartuProduk
