import { Router } from 'express';

import { getAlumnos } from '../controllers/alumnos.controller.js';

const router = Router();

router.get('/alumnos', (req, res) => {
    const alumnos = getAlumnos();
    res.send(alumnos);
});

export default router;