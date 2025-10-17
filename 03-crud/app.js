import express from 'express';

import logger from './middlewares/logger.js';
import mainRouter from './routes/mainRouter.js';
import pool from './db/db.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware para entender JSON 
app.use(express.json());

// Middleware de logueo
app.use(logger);

// Endpoint raiz
app.get('/', (req, res) => { 
    res.send({
        "mensaje": 'Hola mundo desde mi primer servidor con Express'
    })
})

// Cargar rutas
app.use('/api', mainRouter);

// Conectarse a la BD
pool.connect()
    .then(() => {
        console.log('✅ Conectado a la base de datos');
    })
    .catch((error) => {
        console.log('❌ Error al conectar a la base de datos: ', error);
    });


// Escuchar en el puerto 80
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ' + PORT);
})

