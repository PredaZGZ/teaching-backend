import { getAllClientes, newClienteService, updateClienteService } from '../services/clientes.service.js';

export const getClientes = (req, res) => {
    getAllClientes().then((clientes) => {
        res.send(clientes);
    });
}

export const createCliente = (req, res) => {
    const data = req.body;

    if (data.nombre) {
        newClienteService(data)
            .then((newCliente) => {
                res.status(201).send(newCliente);
            })
            .catch((error) => {
                res.status(400).send({ error: error.message });
            });
    } else {
        res.status(400).send({ error: 'Faltan datos obligatorios' });
    }
}

export const updateCliente = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
    updateClienteService(id, data)
        .then((updatedCliente) => {
            res.status(200).send(updatedCliente);
        })
        .catch((error) => {
            res.status(400).send({ error: error.message });
        });
    
}