-- 1. Criar o banco de dados
CREATE DATABASE public;

-- 2. Criar tabela de itens
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INT
);

-- 3. Criar tabela de clientes
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);

-- 4. Inserir itens
INSERT INTO items (id, name, price) VALUES 
(1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);

-- 5. Inserir clientes
INSERT INTO customers (id, firstname, lastname) VALUES 
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');

-- 6. Consultas (Queries)
-- All the items
SELECT * FROM items;

-- All items with price > 80
SELECT * FROM items WHERE price > 80;
