import { Router } from "express";
import { metodos as facturaControllers } from '../controllers/factura.controller.js';

const router = Router();

router.get('/',facturaControllers.getFacturas);
//para obtener las facturas por ci del cliente
router.get('/:ciCliente',facturaControllers.getFacturasCliente);
//para adicionar los pedidos a una determinada factura
router.post('/',facturaControllers.addFactura);

export default router;