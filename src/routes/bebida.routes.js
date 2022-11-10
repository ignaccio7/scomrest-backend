import { Router } from "express";
import { metodos as bebidaControllers } from '../controllers/bebida.controller.js';

const router = Router();

//obtener bebidas para el pedido
router.get('/pedido/',bebidaControllers.getBebidasPedido);

router.get('/',bebidaControllers.getBebidas);
router.get('/:idProducto',bebidaControllers.getBebida);
router.post('/',bebidaControllers.addBebida);
//para eliminar el plato
router.delete('/:idProducto',bebidaControllers.deleteBebida);
//para actualizar el plato
router.put('/',bebidaControllers.updateBebida);

export default router;