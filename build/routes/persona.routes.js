"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _personaControlller = require("../controllers/persona.controlller.js");

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _personaControlller.metodos.getPersonas); //router.get('/:ci',verifyToken,personaController.getPersona);

router.get('/:ci', _personaControlller.metodos.getPersona);
router.post('/', _personaControlller.metodos.addPersona); //router.put('/:ci',personaController.updatePersona);

router.put('/', _personaControlller.metodos.updatePersona);
router["delete"]('/:ci', _personaControlller.metodos.deletePersona);
router.post('/login/', _personaControlller.metodos.loginUsuario); //para añadir un usuario cliente

router.post('/client/', _personaControlller.metodos.addClient);
var _default = router;
exports["default"] = _default;