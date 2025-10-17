import { Router } from 'express';

import { getClientes, createCliente } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', getClientes);
router.post('/clientes', createCliente);

export default router;