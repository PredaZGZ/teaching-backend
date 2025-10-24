import { Router } from 'express';

import { listFilesWithStats } from '../services/file.service.js';

const router = Router();

router.get('/file', async (req, res) => {
    const files = await listFilesWithStats()
    res.json(files);
}) // listar archivos

//router.post('/file', ); // subir archivo

export default router;