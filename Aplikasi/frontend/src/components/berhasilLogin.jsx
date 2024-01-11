import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BerhasilLogin() {
  const [countdown, setCountdown] = useState(3); // Countdown for redirection
  const navigate = useNavigate();

  // Use useEffect to automatically redirect after 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
      if (countdown === 0) {
        navigate('/');
      }
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [countdown, navigate]);

  return (
    <div className="background-login-success">
      <div className="login-success-container">
        <div className="success-icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <p className='gin'>Login berhasil ! Akan dialihkan ke halaman utama dalam {countdown} detik.</p>
      </div>
    </div>
  );
}

export default BerhasilLogin;
