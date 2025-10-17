import pg from 'pg';

const { Pool } = pg;

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'granja_abejas',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

const pool = new Pool(config);

export default pool;