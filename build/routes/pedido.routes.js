"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pedidoController = require("../controllers/pedido.controller.js");

var router = (0, _express.Router)(); //para listar los pedidos por rango ESTE ES POST

router.post('/pedidosrango/', _pedidoController.metodos.postPedidosRango); //para listar los pedidos no habilitados

router.get('/', _pedidoController.metodos.getPedidos); //para listar los pedidos habilitados

router.get('/habilitados/', _pedidoController.metodos.getPedidosHabilitados); //para listar los productos del pedido

router.get('/productos/:nroPedido', _pedidoController.metodos.getproductosPedido); //para habilitar el pedido

router.put('/enabled/:nroPedido', _pedidoController.metodos.enablePedido); //para llenar datos en el pedido

router.post('/', _pedidoController.metodos.addPedido); //para listar los pedidos del cliente

router.get('/pedidosCliente/:ci', _pedidoController.metodos.getPedidosCliente); //para listar los pedidos para el chef

router.get('/pedidosChef/', _pedidoController.metodos.getPedidosChef); //para listar los pedidos para el camarero

router.get('/pedidosCamarero/', _pedidoController.metodos.getPedidosCamarero);
router.get('/:id', _pedidoController.metodos.getPedido);
router.post('/actualiza/', _pedidoController.metodos.actualizaPedido);
var _default = router;
exports["default"] = _default;