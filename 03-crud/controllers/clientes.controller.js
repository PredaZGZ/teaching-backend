import { getAllClientes } from '../services/clientes.service.js';

export const getClientes = (req, res) => {
    getAllClientes().then((clientes) => {
        res.send(clientes);
    });
}