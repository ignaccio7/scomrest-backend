"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _platoController = require("../controllers/plato.controller.js");

var router = (0, _express.Router)();
router.get('/', _platoController.metodos.getPlatos); //obtener platos con stock mayor a 0

router.get('/pedido/', _platoController.metodos.getPlatosPedido);
router.get('/:idProducto', _platoController.metodos.getPlato);
router.get('/ingredientes/:idProducto', _platoController.metodos.getIngredientesPlato);
router.post('/', _platoController.metodos.addPlato); //agregar ingredientes a un plato

router.post('/ingredientesPlato/', _platoController.metodos.addIngredientesPlato); //actualizar ingredientes de un plato

router.post('/actuingredientesPlato/', _platoController.metodos.updateIngredientesPlato); //para actualizar el stock

router.put('/:idProducto', _platoController.metodos.addStock); //para eliminar el plato

router["delete"]('/:idProducto', _platoController.metodos.deletePlato); //para actualizar el plato

router.put('/', _platoController.metodos.updatePlato);
var _default = router;
exports["default"] = _default;