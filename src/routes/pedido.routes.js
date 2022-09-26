import { Router } from "express";
import { metodos as pedidoController } from '../controllers/pedido.controller.js';

const router = Router();

router.get('/',pedidoController.getPedidos);

export default router;