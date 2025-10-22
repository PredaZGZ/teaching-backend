
CREATE DATABASE granja_abejas IF NOT EXISTS;
\c granja_abejas;

DROP TABLE IF EXISTS clientes;
CREATE TABLE clientes  (
	id_cliente SERIAL PRIMARY KEY ON DELETE CASCADE,
	nombre VARCHAR(100) NOT NULL, 
	telefono VARCHAR(20),
	ubicacion TEXT
);

DROP TABLE IF EXISTS pedidos;
CREATE TABLE pedidos (
	id_pedido SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL REFERENCES clientes(id_cliente) ON DELETE CASCADE,
	fecha_pedido DATE NOT NULL DEFAULT CURRENT_DATE,
	descripcion TEXT,
	cantidad INT CHECK (cantidad >  0)
)