import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

function LoginRegister({ setIsAuthenticated }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState(''); // Tambahkan state untuk nama pengguna

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('authToken', data.token);
          setIsAuthenticated(true); // Menggunakan prop setIsAuthenticated
          navigate('/berhasil');
        } else {
          alert(data.message);
        }
      });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Pendaftaran berhasil') {
          alert(data.message);
          setIsLogin(true);
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div className="backgroundlogin">
        <div className="login-register-container">
        {loginSuccess ? (
            <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
        ) : isLogin ? (
            <div className="formLogin-container">
              <img src="https://i.imgur.com/uzx9P5L.png" alt="" width={80} />
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Tidak punya akun? <span onClick={() => setIsLogin(false)}>Daftar</span>
            </p>
            </div>
        ) : (
            <div className="formLogin-container">
              <img src="https://i.imgur.com/uzx9P5L.png" alt="" width={80} />
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                />
                <button type="submit">Register</button>
            </form>
            <p>
                Sudah punya akun? <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
            </div>
        )}
        </div>
    </div>
  );
}

export default LoginRegister;
