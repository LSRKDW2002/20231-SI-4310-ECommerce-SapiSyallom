<?php

$host = 'syaifur.id';
$port = '3306';
$database = 'u1429916_samaya-rtube';
$username = 'u1429916_samaya-rtube';
$password = 'IJjT}m)Vd=93';

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$database;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Database connected successfully!";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
