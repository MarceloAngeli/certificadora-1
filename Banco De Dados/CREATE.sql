CREATE DATABASE IF NOT EXISTS plataforma_noticia;
USE plataforma_noticia;

CREATE TABLE IF NOT EXISTS usuario (
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(225) NOT NULL UNIQUE,
    telefone INT NOT NULL UNIQUE,
    senha_hash INT NOT NULL
);

CREATE TABLE IF NOT EXISTS noticia(
	 titulo VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS comentario(
	conteudo TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS insc_notificacao(
	 tipo_notificacao VARCHAR(50) NOT NULL
);
