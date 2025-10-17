import { Router } from 'express';

import { getClientes } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', getClientes);

export default router;