import {Router} from 'express';
import { methodsPokemones as controller} from '../controllers/pokemones.controller.js';

const router = Router();
//saludo
router.get("/hola", controller.getSaludo);
//listar pokemones
router.get("/pokemones", controller.getPokemones);
export default router;