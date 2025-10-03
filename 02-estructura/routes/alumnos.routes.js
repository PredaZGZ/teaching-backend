import { Router } from 'express';

const router = Router();

router.get('/alumnos', (req, res) => {
    res.send({
        "alumnos": []
    })
});

export default router;