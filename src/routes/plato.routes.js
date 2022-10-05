import { Router } from "express";
import { metodos as platoControllers } from '../controllers/plato.controller.js';

const router = Router();

router.get('/',platoControllers.getPlatos);
//obtener platos con stock mayor a 0
router.get('/pedido/',platoControllers.getPlatosPedido);

router.get('/:idProducto',platoControllers.getPlato);
router.get('/ingredientes/:idProducto',platoControllers.getIngredientesPlato);
router.post('/',platoControllers.addPlato);
//para actualizar el stock
router.put('/:idProducto',platoControllers.addStock);
//para eliminar el plato
router.delete('/:idProducto',platoControllers.deletePlato);
//para actualizar el plato
router.put('/',platoControllers.updatePlato);

export default router;