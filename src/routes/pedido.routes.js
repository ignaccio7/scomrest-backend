import { Router } from "express";
import { metodos as pedidoController } from '../controllers/pedido.controller.js';

const router = Router();
//para listar los pedidos no habilitados
router.get('/',pedidoController.getPedidos);
//para listar los pedidos habilitados
router.get('/habilitados/',pedidoController.getPedidosHabilitados);
//para listar los productos del pedido
router.get('/productos/:nroPedido',pedidoController.getproductosPedido);
//para habilitar el pedido
router.put('/enabled/:nroPedido',pedidoController.enablePedido);
//para llenar datos en el pedido
router.post('/',pedidoController.addPedido);

export default router;