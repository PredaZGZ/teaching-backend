import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

// Modo de uso de JSON
app.use(express.json());

// Endpoint raiz
app.get('/', (req, res) => { 
    res.send({
        "mensaje": 'Hola mundo desde mi primer servidor con Express'
    })
})

// Escuchar en el puerto 80
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ' + PORT);
})

