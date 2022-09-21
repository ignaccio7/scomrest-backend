import { Router } from "express";
import { metodos as personaController } from '../controllers/persona.controlller.js';
import { verifyToken } from "../middlewares";

const router = Router();

router.get('/',personaController.getPersonas);
router.get('/:ci',verifyToken,personaController.getPersona);
router.post('/',personaController.addPersona);
router.put('/:ci',personaController.updatePersona);
router.delete('/:ci',personaController.deletePersona);

router.post('/login/',personaController.loginUsuario);

export default router;