"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ingredienteController = require("../controllers/ingrediente.controller.js");

var router = (0, _express.Router)();
router.get('/', _ingredienteController.metodos.getIngredientes);
router.get('/:idIng', _ingredienteController.metodos.getIngrediente);
router.post('/', _ingredienteController.metodos.addIngrediente);
router["delete"]('/:idIng', _ingredienteController.metodos.deleteIngrediente);
router.put('/', _ingredienteController.metodos.updateIngrediente);
var _default = router;
exports["default"] = _default;