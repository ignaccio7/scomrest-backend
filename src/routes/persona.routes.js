import { Router } from "express";
import { metodos as personaController } from '../controllers/persona.controlller.js';

const router = Router();

router.get('/',personaController.getPersonas);
router.get('/:ci',personaController.getPersona);
router.post('/',personaController.addPersona);
router.put('/:ci',personaController.updatePersona);
router.delete('/:ci',personaController.deletePersona);

router.post('/login/',personaController.loginUsuario);

export default router;