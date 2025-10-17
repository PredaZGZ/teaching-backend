import pool from '../db/db.js';

export const getAllClientes = async () => {
    const result = await pool.query('SELECT * FROM clientes');
    return result.rows;
}

export const newClienteService = async (data) => {
    // descomponer un json en variables
    const { nombre, telefono, ubicacion } = data;

    const result = await pool.query(
        'INSERT INTO clientes (nombre, telefono, ubicacion) VALUES ($1, $2, $3) RETURNING *',
        [nombre, telefono, ubicacion]
    );
    return result.rows[0];
}
