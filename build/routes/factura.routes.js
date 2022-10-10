"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _facturaController = require("../controllers/factura.controller.js");

var router = (0, _express.Router)();
router.get('/', _facturaController.metodos.getFacturas); //para obtener las facturas por ci del cliente

router.get('/:ciCliente', _facturaController.metodos.getFacturasCliente); //para adicionar los pedidos a una determinada factura

router.post('/', _facturaController.metodos.addFactura);
var _default = router;
exports["default"] = _default;