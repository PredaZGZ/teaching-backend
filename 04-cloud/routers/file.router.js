import { Router } from 'express';

import { listFilesWithStats } from '../services/file.service.js';
import { upload } from '../utils/multer.js';

import ENV from '../utils/envLoader.js';

const router = Router();

router.get('/file', async (req, res) => {
    const files = await listFilesWithStats()
    res.json(files);
}) // listar archivos

router.post('/file', upload.single("fichero"), async (req, res) => {
    res.json({ message: 'File uploaded successfully' });
}); // subir archivo

router.get('/file/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = `${ENV.CLOUD_STORAGE_PATH}/${filename}`;
    res.download(filePath);
}); // 


export default router;