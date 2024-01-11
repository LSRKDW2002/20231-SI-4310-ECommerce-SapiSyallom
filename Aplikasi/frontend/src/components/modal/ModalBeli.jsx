import React, { useState } from 'react';
import '../../css/ModalBeli.css';

const ModalBeli = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    };

    return (
        <div>
            <div className="beli-box" onClick={handleModalToggle}>
                <h2>Bagaimana Cara Membelinya...?</h2>
            </div>

            {modalOpen && (
        <div className="beli-overlay">
            <div className="beli-content">
                <h2>Cara Pembelian di SyapiGo!</h2>
                    <p>
                        Ingin membeli hewan ternak sapi dengan mudah dan aman? SyapiGo
                        menyediakan pengalaman belanja yang nyaman. Berikut adalah cara
                        pembelian Anda:
                    </p>
                <ol>
                    <li>
                        <strong>Menuju Bagian Belanja: </strong> 
                        Pertama-tama, klik menu "Belanja" yang terdapat di navbar SyapiGo.
                    </li>
                    <li>
                        <strong>Temukan Produk: </strong> 
                        Cari produk hewan ternak sapi
                        yang Anda inginkan dengan cara menggulir halaman atau
                        menggunakan fitur pencarian untuk menemukan langsung produk
                        berdasarkan nama atau jenis sapi yang dicari.
                    </li>
                    <li>
                        <strong>Klik Produk:</strong> 
                        Setelah menemukan produk yang diinginkan, klik produk tersebut untuk melihat informasi lebih lanjut.
                    </li>
                    <li>
                        <strong>Kontak Penjual: </strong> 
                        Hubungi penjual langsung untuk melakukan pembelian atau mendapatkan informasi tambahan. Nomor telepon penjual tersedia di halaman detail produk.
                    </li>
                </ol>
                <p>
                    Selamat berbelanja di SyapiGo! Jika Anda memiliki pertanyaan
                    lebih lanjut atau memerlukan bantuan, tim dukungan pelanggan kami
                    siap membantu.
                </p>
            
                <button className='tombol-tutup' onClick={handleModalToggle}>Tutup</button>
            </div>
        </div>
        )}
        </div>
    );
};

export default ModalBeli;
