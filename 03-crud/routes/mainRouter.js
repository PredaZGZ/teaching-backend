import { Router } from 'express';
import clientesRoutes from './clientes.routes.js';

const router = Router();

router.use(clientesRoutes);

export default router;