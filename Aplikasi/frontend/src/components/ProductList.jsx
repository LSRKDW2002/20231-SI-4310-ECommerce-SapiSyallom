import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ModalDetail from './modal/ModalDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ProductList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Initialize filteredData with all products
      })
      .catch((err) => console.log(err));
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDetail = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredProducts = data.filter((product) =>
      product.judul_barang.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredProducts);
  };

  return (
    <div className="fullProduk">
      {/* navbar section */}
      <Navbar />

      {/* search bar */}
      <div className="search-bar-container">
        <p className='cariBarang'>Cari Disini</p>
        <div className="searchBoxContainer">
          <div className="search-box">
              <button className="btn-search"><i className="fas fa-search"></i></button>
                  <input
                  className='input-search'
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
            </div>
        </div>
          

        
      </div>

      {/* list produk */}
    <div className="productRapi">
      <div className="product-container">
        <div className="product-list">
          {filteredData.map((d, i) => (
            <div className="product-card" key={i}>
              <h2 className="product-title">{d.judul_barang}</h2>
              <p className="product-price">IDR {d.harga_barang}</p>
              <img className="product-image" src={d.gambar_barang} alt="Product" />
              <button className="cek-detail" onClick={() => handleDetail(d)}>
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* modal detail */}
      <ModalDetail
        selectedProduct={selectedProduct}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default ProductList;
