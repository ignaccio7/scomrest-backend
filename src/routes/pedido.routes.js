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

//para listar los pedidos del cliente
router.get('/pedidosCliente/:ci',pedidoController.getPedidosCliente);
//para listar los pedidos para el chef
router.get('/pedidosChef/',pedidoController.getPedidosChef);

//para listar los pedidos para el camarero
router.get('/pedidosCamarero/',pedidoController.getPedidosCamarero);
router.get('/:id',pedidoController.getPedido);
router.post('/actualiza/',pedidoController.actualizaPedido);


export default router;