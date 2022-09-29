import { Router } from "express";
import { metodos as pedidoController } from '../controllers/pedido.controller.js';

const router = Router();

router.get('/',pedidoController.getPedidos);
//para listar los productos del pedido
router.get('/productos/:nroPedido',pedidoController.getproductosPedido);
//para habilitar el pedido
router.put('/enabled/:nroPedido',pedidoController.enablePedido);

export default router;