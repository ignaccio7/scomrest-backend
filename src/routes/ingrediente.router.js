import { Router } from "express";
import { metodos as ingredienteController } from '../controllers/ingrediente.controller.js';

const router = Router();

router.get('/',ingredienteController.getIngredientes);


export default router;