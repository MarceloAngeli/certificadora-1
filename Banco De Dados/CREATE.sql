CREATE DATABASE IF NOT EXISTS BonsFluidos;

CREATE TABLE BonsFluidos.Usuarios(
	Login CHAR(11),
    HashSenha CHAR(64),
    Cookies VARCHAR(64) NULL,
    PRIMARY KEY (Login)
);

CREATE TABLE BonsFluidos.Posts(
    ID_Post INT AUTO_INCREMENT,
    Titulo VARCHAR(100),
    Texto TEXT,
    Foto MEDIUMBLOB,
    Data DATE NOT NULL,
    PRIMARY KEY(ID_Post)
);

CREATE TABLE BonsFluidos.Comentarios(
    ID_Comentario INT AUTO_INCREMENT,
    ID_Post INT,
    NomePessoa VARCHAR(40),
    Data DATE NOT NULL,
    Comentario VARCHAR(255),
    PRIMARY KEY (ID_Comentario),
    FOREIGN KEY (ID_Post) REFERENCES BonsFluidos.Posts(ID_Post)
    ON DELETE CASCADE
);
