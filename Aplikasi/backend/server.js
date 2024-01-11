const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');



const app = express()
app.use(cors())

app.use(bodyParser.json({ limit: '10mb', extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'tokoss'
})

// Fungsi untuk membuat token
function generateToken(username) {
  return jwt.sign({ username }, 'rahasia', { expiresIn: '3h' });
}

// Middleware untuk memeriksa token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Token tidak tersedia" });
  }

  jwt.verify(token, 'rahasia', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token tidak valid" });
    }
    req.decoded = decoded;
    next();
  });
}

//login

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Pastikan semua data login ada
  if (!username || !password) {
    return res.status(400).json({ message: "Username dan password harus diisi" });
  }

  // Periksa data login di database
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Terjadi kesalahan saat mencoba login" });
    }
    if (result.length > 0) {
      return res.status(200).json({ success: true, message: "Login berhasil" });
    } else {
      return res.status(401).json({ success: false, message: "Login gagal" });
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Pastikan semua data registrasi ada
  if (!username || !password) {
    return res.status(400).json({ message: "Username dan password harus diisi" });
  }

  // Cek apakah username sudah digunakan
  const checkUsernameSQL = "SELECT * FROM login WHERE username = ?";
  db.query(checkUsernameSQL, [username], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Terjadi kesalahan saat memeriksa username" });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: "Username sudah digunakan" });
    } else {
      // Tambahkan data registrasi ke database
      const registerSQL = "INSERT INTO login (username, password) VALUES (?, ?)";
      db.query(registerSQL, [username, password], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Terjadi kesalahan saat mendaftarkan akun" });
        }
        return res.status(200).json({ message: "Pendaftaran berhasil" });
      });
    }
  });
});

//login

app.get('/products', (req, res)=> {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

//menambah product

app.use(express.json()); // Middleware untuk mengurai JSON

app.post('/add-product', (req, res) => {
  const { judul_barang, harga_barang, gambar_barang, deskripsi_barang, nomor_telepon } = req.body;

  // Pastikan semua data produk ada
  if (!judul_barang || !harga_barang || !gambar_barang || !deskripsi_barang || !nomor_telepon) {
    return res.status(400).json({ message: "Semua data produk harus diisi" });
  }

  const sql = "INSERT INTO products (judul_barang, harga_barang, gambar_barang, deskripsi_barang, nomor_telepon) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [judul_barang, harga_barang, gambar_barang, deskripsi_barang, nomor_telepon], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Terjadi kesalahan saat menambahkan produk" });
    }
    return res.status(200).json({ message: "Produk berhasil ditambahkan" });
  });
});

//menambah product


app.get('/', (re, res)=> {
    return res.json("cekkk");
})

app.listen(8081, ()=> {
    console.log("listening");
})