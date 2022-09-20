import { Router } from "express";
import { metodos as personaController } from '../controllers/persona.controlller.js';

const router = Router();

router.get('/',personaController.getPersonas);


export default router;