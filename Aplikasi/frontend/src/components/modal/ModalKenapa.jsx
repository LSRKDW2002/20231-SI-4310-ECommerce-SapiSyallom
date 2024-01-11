import React, { useState } from 'react';
import '../../css/ModalKenapa.css'

const ModalKenapa = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    };

    return (
        <div>
            <div className="kenapa-box" onClick={handleModalToggle}>
                <h2>
                    Kenapa Harus <p className='icon-kenapa'>SyapiGo!</p> ?
                </h2>
            </div>

        {modalOpen && (
        <div className="kenapa-overlay">
            <div className="kenapa-content">
                <h2>Kenapa Harus "SyapiGo!" ?</h2>
                    <p>
                        Selamat datang di SyapiGo, merupakan sebuah forum atau tempat terbaik untuk menjual dan
                        membeli hewan ternak sapi secara online. Kami memiliki beberapa
                        alasan mengapa SyapiGo menjadi pilihan utama para peternak dan
                        pecinta sapi:
                    </p>
                <ul>
                    <li>
                        <strong>Kualitas Terbaik: </strong>
                        SyapiGo menyediakan hewan ternak sapi dengan kualitas
                        terbaik, sehat, dan sesuai dengan standar keamanan.
                    </li>
                    <li>
                        <strong>Pilihan Luas: </strong> 
                        Temukan berbagai macam sapi sesuai dengan kebutuhan Anda.
                        SyapiGo memiliki pilihan luas yang memungkinkan Anda menemukan sapi
                        yang sesuai dengan kriteria Anda.
                    </li>
                    <li>
                        <strong>Informasi Detail: </strong> 
                        Dapatkan informasi detail tentang setiap sapi,
                        mulai dari berat badan, kesehatan, hingga riwayat vaksinasi.
                        Jika anda anggap kurang lengkap, silahkan hubungi penjual yang 
                        mencantumkan No Telp agar dapat menanyakan lebih dalam dan detail.
                    </li>
                    <li>
                        <strong>Dukungan Pelanggan: </strong> 
                        Tim dukungan pelanggan SyapiGo siap membantu Anda. 
                        Jangan ragu untuk menghubungi kami ika Anda memiliki pertanyaan atau masalah.
                    </li>
                </ul>
                {/* Tambahkan penjelasan lebih lanjut sesuai kebutuhan */}
                <button className='tombol-tutup' onClick={handleModalToggle}>Tutup</button>
            </div>
        </div>
        )}
    </div>
    );
};

export default ModalKenapa;
