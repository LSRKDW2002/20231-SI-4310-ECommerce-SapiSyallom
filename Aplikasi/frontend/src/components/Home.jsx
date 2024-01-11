import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import Slider from './Slider';
import ModalKenapa from './modal/ModalKenapa';
import ModalJual from './modal/ModalJual'
import ModalBeli from './modal/ModalBeli'
import '../css/Home.css'


const Home = () => {
return (
    <div>
        <Navbar/>

        <Slider />

        {/* Section Sambutan */}
        <div className="sambutan-container">
        <div className="sambutan">
            <div className="gambarSambutan">
                <img className='sapi' src='https://i.imgur.com/NRiDSxZ.png'/>
            </div>

            <div className="kataSambutan">
                <h2>
                    Selamat Datang di <p className='icon'>SyapiGo!</p>
                </h2>
                <div className='kata-kata'>
                    <p>Disini tempatnya jual beli sapi gemuk dan sehat. Temukan sapi pilihan terbaik, sesuai dengan kriteria anda! Info lebih lanjut tentang detail sapi, silahkan klik bagian "Cek Detail"</p>
                </div>
            </div>
        </div>
        </div>

        <ModalKenapa />

        <ModalJual />

        <ModalBeli />

        {/* Section Yuk Beli */}
        <div className='yuk-beli'>
            <h4>
                Tunggu Apa Lagi? Yuk Langsung <Link to="/belanja" className='link-beli'>Beli !</Link>
            </h4>
        </div>

        {/* Copyright */}
        <div className="copyright">
        &copy; 2023 SyapiGo! . All rights reserved.
      </div>
    </div>
    );
};

export default Home;

