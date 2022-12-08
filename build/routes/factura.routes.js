"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _facturaController = require("../controllers/factura.controller.js");

var router = (0, _express.Router)(); //para listar los pedidos por rango ESTE ES POST

router.post('/facturasrango/', _facturaController.metodos.postFacturasRango); //PARA OBTENER EL PDF

router.get('/downPdf/:idFactura', _facturaController.metodos.getPdf);
router.get('/', _facturaController.metodos.getFacturas); //obteniendo facturas para el cajero

router.get('/pedidosCajero/', _facturaController.metodos.getPedidosCajero); //para obtener las facturas por ci del cliente

router.get('/:ciCliente', _facturaController.metodos.getFacturasCliente); //para adicionar los pedidos a una determinada factura

router.post('/', _facturaController.metodos.addFactura);
var _default = router;
exports["default"] = _default;