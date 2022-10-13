import { Router } from "express";
import { metodos as personaController } from '../controllers/persona.controlller.js';
import { verifyToken } from "../middlewares";

const router = Router();

//para listar los clientes
router.get('/clientes/',personaController.getClientes);

router.get('/',personaController.getPersonas);
//router.get('/:ci',verifyToken,personaController.getPersona);
router.get('/:ci',personaController.getPersona);
router.post('/',personaController.addPersona);
//router.put('/:ci',personaController.updatePersona);
router.put('/',personaController.updatePersona);
router.delete('/:ci',personaController.deletePersona);

router.post('/login/',personaController.loginUsuario);

//para añadir un usuario cliente
router.post('/client/',personaController.addClient);

//para asignar un rol al cliente
router.post('/asignarol/',personaController.asignaRol);

export default router;