"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _bebidaController = require("../controllers/bebida.controller.js");

var router = (0, _express.Router)();
router.get('/', _bebidaController.metodos.getBebidas);
router.get('/:idProducto', _bebidaController.metodos.getBebida);
router.post('/', _bebidaController.metodos.addBebida); //para eliminar el plato

router["delete"]('/:idProducto', _bebidaController.metodos.deleteBebida); //para actualizar el plato

router.put('/', _bebidaController.metodos.updateBebida);
var _default = router;
exports["default"] = _default;