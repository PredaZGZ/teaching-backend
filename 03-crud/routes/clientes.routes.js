import { Router } from 'express';

import { getClientes, createCliente, updateCliente } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', getClientes);
router.post('/clientes', createCliente);
router.put('/clientes/:id', updateCliente);

export default router;