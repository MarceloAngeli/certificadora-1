CREATE DATABASE IF NOT EXISTS plataforma_noticia;
USE plataforma_noticia;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(225) NOT NULL UNIQUE,
    idade INT NOT NULL,
    telefone VARCHAR(20) NOT NULL UNIQUE,
    sobre TEXT,
    senha_hash CHAR(64) NOT NULL,
    tipo ENUM('admin', 'usuario') NOT NULL DEFAULT 'usuario'
);

CREATE TABLE noticia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    imagem MEDIUMBLOB,
    data_publicacao DATETIME NOT NULL,
    status ENUM('rascunho', 'publicada', 'arquivada') NOT NULL DEFAULT 'rascunho',
    text_noticia TEXT
);

CREATE TABLE insc_notificacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario)
        REFERENCES usuario (id),
    tipo_notificacao VARCHAR(50) NOT NULL
);
