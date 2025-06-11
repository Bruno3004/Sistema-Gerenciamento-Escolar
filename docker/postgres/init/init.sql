
CREATE TABLE Professor (
    id_professor SERIAL PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE Turma (
    id_turma SERIAL PRIMARY KEY,
    nome_turma VARCHAR(50) NOT NULL,
    id_professor INT NOT NULL REFERENCES Professor(id_professor),
    horario VARCHAR(100) NOT NULL
);

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    id_turma INT NOT NULL REFERENCES Turma(id_turma),
    nome_responsavel VARCHAR(255) NOT NULL,
    telefone_responsavel VARCHAR(20) NOT NULL,
    email_responsavel VARCHAR(100) NOT NULL,
    informacoes_adicionais TEXT,
);

CREATE TABLE Pagamentos (
    id SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    data_pagamento DATE NOT NULL,
    valor NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('Pago', 'Pendente'))
);

CREATE TABLE Presencas (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES alunos(id),
    data_presenca DATE NOT NULL
);

CREATE TABLE Atividades (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES alunos(id),
    descricao TEXT NOT NULL,
    data_atividade DATE NOT NULL,
    link_atividade TEXT,
);

-- Inserção de dados de exemplo
 INSERT INTO Professor (nome_completo, email, telefone) VALUES 
    ('Alexandre', 'teste@exemplo.com', '41414212'),
    ('Beatriz', 'beatriz@email.com', '41414213'),
    ('Carlos', 'carlos@email.com', '41414214'),
    ('Daniela', 'daniela@email.com', '41414215'),
    ('Eduardo', 'eduardo@email.com', '41414216'),
    ('Fernanda', 'fernanda@email.com', '41414217'),
    ('Gabriel', 'gabriel@email.com', '41414218'),
    ('Helena', 'helena@email.com', '41414219'),
    ('Isabela', 'isabela@email.com', '41414220'),
    ('João', 'joao@email.com', '41414221'),
    ('Karina', 'karina@email.com', '41414222'),
    ('Leonardo', 'leonardo@email.com', '41414223'),
    ('Mariana', 'mariana@email.com', '41414224'),
    ('Nicolas', 'nicolas@email.com', '41414225'),
    ('Olivia', 'olivia@email.com', '41414226'),
    ('Paulo', 'paulo@email.com', '41414227'),
    ('Rafaela', 'rafaela@email.com', '41414228'),
    ('Samuel', 'samuel@email.com', '41414229'),
    ('Tatiana', 'tatiana@email.com', '41414230'),
    ('Vinícius', 'vinicius@email.com', '41414231'),
    ('Aline', 'aline@email.com', '41414232'),
    ('Bruno', 'bruno@email.com', '41414233'),
    ('Carolina', 'carolina@email.com', '41414234'),
    ('Diego', 'diego@email.com', '41414235'),
    ('Elisa', 'elisa@email.com', '41414236'),
    ('Felipe', 'felipe@email.com', '41414237'),
    ('Gustavo', 'gustavo@email.com', '41414238'),
    ('Heloísa', 'heloisa@email.com', '41414239'),
    ('Igor', 'igor@email.com', '41414240'),
    ('Juliana', 'juliana@email.com', '41414241'),
    ('Katia', 'katia@email.com', '41414242'),
    ('Lucas', 'lucas@email.com', '41414243'),
    ('Marcela', 'marcela@email.com', '41414244'),
    ('Nelson', 'nelson@email.com', '41414245'),
    ('Otávio', 'otavio@email.com', '41414246'),
    ('Patrícia', 'patricia@email.com', '41414247'),
    ('Renato', 'renato@email.com', '41414248'),
    ('Silvia', 'silvia@email.com', '41414249'),
    ('Thiago', 'thiago@email.com', '41414250'),
    ('Valéria', 'valeria@email.com', '41414251'),
    ('Alexandre', 'teste1@exemplo.com', '41414252'),
    ('Beatriz', 'teste2@exemplo.com', '41414253'),
    ('Carlos', 'teste3@exemplo.com', '41414254'),
    ('Daniela', 'teste4@exemplo.com', '41414255'),
    ('Eduardo', 'teste5@exemplo.com', '41414256'),
    ('Fernanda', 'teste6@exemplo.com', '41414257'),
    ('Gabriel', 'teste7@exemplo.com', '41414258'),
    ('Helena', 'teste8@exemplo.com', '41414259'),
    ('Isabela', 'teste9@exemplo.com', '41414260'),
    ('João', 'teste10@exemplo.com', '41414261');

    