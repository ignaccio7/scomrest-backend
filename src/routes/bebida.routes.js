import { Router } from "express";
import { metodos as bebidaControllers } from '../controllers/bebida.controller.js';

const router = Router();

router.get('/',bebidaControllers.getBebidas);
/*router.get('/:idProducto',platoControllers.getPlato);
router.get('/ingredientes/:idProducto',platoControllers.getIngredientesPlato);
router.post('/',platoControllers.addPlato);
//para actualizar el stock
router.put('/:idProducto',platoControllers.addStock);
//para eliminar el plato
router.delete('/:idProducto',platoControllers.deletePlato);
//para actualizar el plato
router.put('/',platoControllers.updatePlato);*/

export default router;