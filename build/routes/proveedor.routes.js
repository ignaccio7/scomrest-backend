"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proveedorController = require("../controllers/proveedor.controller.js");

var router = (0, _express.Router)(); //para listar los pedidos por rango ESTE ES POST

router.post('/proveedoresrango/', _proveedorController.metodos.postPedidoChefProveedorRango);
router.get('/', _proveedorController.metodos.getProveedores);
router.get('/pedidos/', _proveedorController.metodos.getPedidosChefProveedorIngrediente);
router.get('/:idProveedor', _proveedorController.metodos.getProveedor);
router.get('/pedidos/:ci', _proveedorController.metodos.getPedidosChef);
router.post('/pedidos/', _proveedorController.metodos.addChefIngredienteProveedor);
router.post('/', _proveedorController.metodos.addProveedor);
router["delete"]('/:idProveedor', _proveedorController.metodos.deleteProveedor);
router.put('/', _proveedorController.metodos.updateProveedor);
var _default = router;
exports["default"] = _default;