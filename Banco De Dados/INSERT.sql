INSERT INTO BonsFluidos.Usuarios (Login, HashSenha, Cookies) VALUES
('12345678901', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'cookie_monster_1'),
('98765432109', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', NULL),
('11223344556', 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d', 'chocolate_chip_2'),
('66554433221', 'b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79', NULL),
('12121212121', '481f6cc0511143ccdd7e2d1b1b94faf0a700a44422a39de2ae3b7f0156d3a8de', 'oatmeal_raisin_3');

INSERT INTO Posts (Titulo, Texto, Foto, Data) VALUES
('Os Benefícios da Hidratação', 'Beber água regularmente é crucial para a saúde. Ajuda na digestão, mantém a pele saudável e regula a temperatura corporal. Quantos litros você bebe por dia?', NULL, '2024-07-15'),
('Receita de Suco Verde Detox', 'Ingredientes: 1 folha de couve, 1/2 maçã, suco de 1 limão, 1 rodela de gengibre e 200ml de água de coco. Bata tudo no liquidificador e sirva gelado!', NULL, CURDATE());

INSERT INTO Comentarios (ID_Post, NomePessoa, Data, Comentario) VALUES
(1, 'Carlos Silva', '2024-07-16', 'Ótima dica! Tento beber pelo menos 2 litros por dia.'),
(1, 'Ana Pereira', '2024-07-16', 'Eu sempre esqueço de beber água. Vou colocar um alarme no celular para me lembrar.');

INSERT INTO Comentarios (ID_Post, NomePessoa, Data, Comentario) VALUES
(2, 'Mariana Costa', CURDATE(), 'Fiz essa receita e adorei! Super refrescante.'),
(2, 'João Alves', CURDATE(), 'Vou experimentar amanhã de manhã. Parece ótimo para começar o dia com energia!');
