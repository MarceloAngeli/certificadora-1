CREATE DATABASE IF NOT EXISTS plataforma_noticia;
USE plataforma_noticia;

CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(225) NOT NULL UNIQUE,
    idade INT NOT NULL,
    telefone VARCHAR(20) NOT NULL UNIQUE,
    sobre TEXT,
    senha_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS noticia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    imagem MEDIUMBLOB,
    text_noticia TEXT
);

CREATE TABLE IF NOT EXISTS comentario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conteudo TEXT NOT NULL,
    id_usuario INT NOT NULL,
    id_noticia VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_usuario)
        REFERENCES usuario (id),
    FOREIGN KEY (id_noticia)
        REFERENCES noticia (id)
);

CREATE TABLE IF NOT EXISTS insc_notificacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_notificacao VARCHAR(50) NOT NULL
);
