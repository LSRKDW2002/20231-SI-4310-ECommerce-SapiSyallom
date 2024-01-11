import React from 'react'
import InputProduct from '../components/inputProduct'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token otentikasi dari localStorage atau lakukan tindakan logout lainnya
    localStorage.removeItem('authToken');

    // Navigate kembali ke halaman login
    navigate('/login');
  };

  return (
    <div>
      <div className="NavbarContainer">
        <div className="logo">
          <div className="judulLogo">
            <img className='logs' src="https://i.imgur.com/uzx9P5L.png" alt="" width={60} />
            <p className='logoName'>SyapiGo!</p>
          </div>
        </div>

      <div>
      <div>
        <ul className='Menu'>
          <li className='subMenu'><Link to="/" className='link'>Home</Link></li>
          <li className='subMenu'><Link to="/belanja" className='link'>Belanja</Link></li>
          <li className='subMenu'><Link to="/jual" className='link'>Jual</Link></li>
          <li className='subMenu' onClick={handleLogout}>Logout</li>
        </ul>
    </div>
      </div>
    



      </div>
    </div>
  )
}

export default Navbar