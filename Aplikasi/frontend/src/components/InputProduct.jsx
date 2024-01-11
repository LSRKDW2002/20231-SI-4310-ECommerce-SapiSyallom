import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function InputProduct() {
  const [product, setProduct] = useState({
    judul_barang: '',
    harga_barang: '',
    gambar_barang: '',
    deskripsi_barang: '',
    nomor_telepon: '', // Tambahkan field untuk nomor telepon
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        if (
          image.width >= 1080 &&
          image.width <= 1085 &&
          image.height >= 1080 &&
          image.height <= 1085
        ) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 300;
          canvas.height = (300 / image.width) * image.height;
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          setProduct({
            ...product,
            gambar_barang: canvas.toDataURL('image/jpeg'),
          });
        } else {
          alert('Ukuran gambar harus antara 1080 x 1080px hingga 1085 x 1085px');
        }
      };
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek apakah semua bidang sudah diisi
    if (!product.judul_barang || !product.harga_barang || !product.gambar_barang || !product.deskripsi_barang || !product.nomor_telepon) {
      alert('Silahkan Lengkapi Form Terlebih Dahulu');
      return;
    }

    fetch('http://localhost:8081/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
        navigate('/login');
      })
      .catch((err) => console.error(err));

      // Reset form atau lakukan langkah lain sesuai kebutuhan
    setProduct({
      judul_barang: '',
      harga_barang: '',
      gambar_barang: '',
      deskripsi_barang: '',
      nomor_telepon: '',
    });
  };
    

  return (
    <div>
      <Navbar />
      <div className="input-container">
        <div className="input-product">
          <h2>Jual Barang</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <p className="jd">Judul Barang:</p>
              <input
                type="text"
                name="judul_barang"
                value={product.judul_barang}
                onChange={handleChange}
              />
            </label>
            <label>
              <p className="jd">Harga :</p>
              <input
                type="number"
                name="harga_barang"
                value={product.harga_barang}
                onChange={handleChange}
              />
            </label>
            <label>
              <p className="jd">Gambar :</p>
              <input
                type="file"
                name="gambar_barang"
                onChange={handleImageUpload}
              />
              {product.gambar_barang && (
                <img
                  src={product.gambar_barang}
                  alt="Product"
                  style={{ width: '100px' }}
                />
              )}
            </label>
            <label>
              <p className="jd">Deskripsi Barang:</p>
              <textarea
                name="deskripsi_barang"
                value={product.deskripsi_barang}
                onChange={handleChange}
              />
            </label>
            <label>
              <p className="jd">Nomor Telepon:</p>
              <input
                type="tel"
                name="nomor_telepon"
                value={product.nomor_telepon}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Jual</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputProduct;