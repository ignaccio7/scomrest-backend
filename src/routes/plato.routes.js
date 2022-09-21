import { Router } from "express";
import { metodos as platoControllers } from '../controllers/plato.controller.js';

const router = Router();

router.get('/',platoControllers.getPlatos);
router.get('/:idProducto',platoControllers.getPlato);


export default router;