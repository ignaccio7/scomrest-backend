import { Router } from "express";
import { metodos as mesaController } from '../controllers/mesa.controller.js';

const router = Router();

router.get('/',mesaController.getMesas);
router.get('/:idMesa',mesaController.getMesa);
router.post('/',mesaController.addMesa);
router.delete('/:idMesa',mesaController.deleteMesa);
router.put('/',mesaController.updateMesa);


export default router;