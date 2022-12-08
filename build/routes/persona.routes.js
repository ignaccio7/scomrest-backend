"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _personaControlller = require("../controllers/persona.controlller.js");

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //para listar los clientes

router.get('/clientes/', _personaControlller.metodos.getClientes);
router.get('/cajeros/', _personaControlller.metodos.getCajeros);
router.get('/chefs/', _personaControlller.metodos.getChefs);
router.get('/camareros/', _personaControlller.metodos.getCamareros);
router.get('/administradores/', _personaControlller.metodos.getAdministradores);
router.get('/', _personaControlller.metodos.getPersonas); //router.get('/:ci',verifyToken,personaController.getPersona);

router.get('/:ci', _personaControlller.metodos.getPersona);
router.post('/', _personaControlller.metodos.addPersona); //router.put('/:ci',personaController.updatePersona);

router.put('/', _personaControlller.metodos.updatePersona);
router["delete"]('/:ci', _personaControlller.metodos.deletePersona);
router.post('/login/', _personaControlller.metodos.loginUsuario); //para añadir un usuario cliente

router.post('/client/', _personaControlller.metodos.addClient); //para asignar un rol al cliente

router.post('/asignarol/', _personaControlller.metodos.asignaRol);
var _default = router;
exports["default"] = _default;