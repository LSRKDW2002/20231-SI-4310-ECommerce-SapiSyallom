import React from 'react';
import '../../css/ModalDetail.css';

const ModalDetail = ({ selectedProduct, showModal, setShowModal }) => {
  if (!showModal || !selectedProduct) {
    return null;
  }

  const openWhatsApp = () => {
    // Pastikan nomor telepon memiliki format yang sesuai, misalnya, +62 untuk Indonesia
    let phoneNumber = selectedProduct.nomor_telepon;

    if (!phoneNumber) {
      // Handle jika nomor telepon tidak tersedia
      alert('Nomor telepon tidak tersedia.');
      return;
    }

    // Cek apakah nomor telepon sudah dimulai dengan karakter '+'
    if (!phoneNumber.startsWith('+')) {
      // Tambahkan kode negara (+62) jika belum ada
      phoneNumber = `+62${phoneNumber}`;
    }

    // Ganti karakter '-' dan spasi dengan karakter kosong
    phoneNumber = phoneNumber.replace(/[-\s]/g, '');

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    // Buka WhatsApp dalam tab baru
    window.open(whatsappURL, '_blank');
  };


  return (
    <div className="modal">
      <div className="modal-content">
        <div className='gambar-harga'>
          <img className='gambar-detail' src={selectedProduct.gambar_barang} alt="Product" />
        </div>
        <p>IDR {selectedProduct.harga_barang}</p>
        <div className='detail'>
          <h2>{selectedProduct.judul_barang}</h2>
          <p>{selectedProduct.deskripsi_barang}</p>
          <p>No Hp: {selectedProduct.nomor_telepon}</p>
        </div>
        <div className='tombol'>
          <button className='tombol-tutup' onClick={() => setShowModal(false)}>TUTUP</button>
          <button className='tombol-buy' onClick={openWhatsApp}>Beli</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
