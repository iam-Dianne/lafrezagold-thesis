<?php 

$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'lafrezagold_db';

// DSN (DATA SOURCE NAME)
$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}
    
    

