"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pedidoController = require("../controllers/pedido.controller.js");

var router = (0, _express.Router)(); //para listar los pedidos no habilitados

router.get('/', _pedidoController.metodos.getPedidos); //para listar los pedidos habilitados

router.get('/habilitados/', _pedidoController.metodos.getPedidosHabilitados); //para listar los productos del pedido

router.get('/productos/:nroPedido', _pedidoController.metodos.getproductosPedido); //para habilitar el pedido

router.put('/enabled/:nroPedido', _pedidoController.metodos.enablePedido); //para llenar datos en el pedido

router.post('/', _pedidoController.metodos.addPedido);
var _default = router;
exports["default"] = _default;