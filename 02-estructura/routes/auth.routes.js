import { Router } from 'express';

import { getUsuarios } from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/users', (req, res) => {
    
    const usuarios = getUsuarios();
    res.send(usuarios);

});

export default router;