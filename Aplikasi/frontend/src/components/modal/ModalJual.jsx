import React, { useState } from 'react';
import '../../css/ModalJual.css';

const ModalJual = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    };

    return (
        <div>
            <div className="jual-box" onClick={handleModalToggle}>
                <h2>Bagaimana Cara Menjual Hewan Ternak...?</h2>
            </div>

            {modalOpen && (
        <div className="jual-overlay">
            <div className="jual-content">
                <h2>Cara Penjualan di SyapiGo</h2>
                    <p>
                        Ingin menjual sapi Anda dengan mudah dan cepat? SyapiGo adalah
                        tempatnya! Ikuti langkah-langkah sederhana di bawah ini:
                    </p>
                    <ol>
                        <li>
                            <strong>Menuju Bagian Jual: </strong> 
                            Pertama-tama, klik menu "Jual" yang terdapat di navbar SyapiGo.
                        </li>
                        <li>
                            <strong>Isi Informasi Produk: </strong>
                            Lengkapi informasi produk Anda dengan mengisi judul, harga, gambar (dengan
                            ketentuan resolusi 1080x1080), dan deskripsi. Pastikan untuk
                            menyertakan detail sapi selengkap-lengkapnya, termasuk nomor
                            telepon Anda sebagai penjual.
                        </li>
                        <li>
                            <strong>Klik "Jual":</strong> 
                            Setelah mengisi semua informasi dengan lengkap, klik tombol "Jual" untuk mengupload produk Anda.
                        </li>
                    </ol>
                <p>
                Tim kami akan segera meninjau dan memproses informasi produk Anda
                untuk memastikan kelancaran transaksi. Jangan ragu untuk
                menghubungi tim dukungan pelanggan jika Anda membutuhkan bantuan
                atau memiliki pertanyaan lebih lanjut.
                </p>
            
                <button className='tombol-tutup' onClick={handleModalToggle}>Tutup</button>
            </div>
        </div>
        )}
        </div>
    );
};

export default ModalJual;
