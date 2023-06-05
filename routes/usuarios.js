import { Router } from 'express';
import { usuariosGet } from '../controllers/usuarios';

const router = Router();


router.get('/', usuariosGet);

router.put('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

export { router }