import { Router } from "express";
import { metodos as ingredienteController } from '../controllers/ingrediente.controller.js';

const router = Router();

router.get('/',ingredienteController.getIngredientes);
router.get('/:idIng',ingredienteController.getIngrediente);
router.post('/',ingredienteController.addIngrediente);
router.delete('/:idIng',ingredienteController.deleteIngrediente);


export default router;