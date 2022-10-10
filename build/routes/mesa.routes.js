"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mesaController = require("../controllers/mesa.controller.js");

var router = (0, _express.Router)();
router.get('/', _mesaController.metodos.getMesas);
router.get('/:idMesa', _mesaController.metodos.getMesa);
router.post('/', _mesaController.metodos.addMesa);
router["delete"]('/:idMesa', _mesaController.metodos.deleteMesa);
router.put('/', _mesaController.metodos.updateMesa);
var _default = router;
exports["default"] = _default;