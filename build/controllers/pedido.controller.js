"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metodos = void 0;

var _database = require("../database/database.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPedidos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '0'");

          case 6:
            result = _context.sent;
            console.log(result);
            res.json(result);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context.t0.message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getPedidos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getPedido = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, connection, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context2.sent;
            _context2.next = 7;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xped.ciCliente FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '0' AND xped.nroPedido = ?", id);

          case 7:
            result = _context2.sent;
            console.log(result);
            res.json(result);
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function getPedido(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getPedidosHabilitados = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context3.sent;
            _context3.next = 6;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '1'");

          case 6:
            result = _context3.sent;
            console.log(result);
            res.json(result);
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getPedidosHabilitados(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getproductosPedido = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var nroPedido, connection, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            nroPedido = req.params.nroPedido;
            _context4.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context4.sent;
            _context4.next = 7;
            return connection.query("SELECT xpro.idproducto,xpro.nombre,xpro.precio,xadqui.cantidad FROM adquiere xadqui, producto xpro WHERE xadqui.idproducto = xpro.idproducto AND xadqui.nropedido =?", nroPedido);

          case 7:
            result = _context4.sent;
            console.log(result);
            res.json(result);
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context4.t0.message);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function getproductosPedido(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var enablePedido = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var nroPedido, _req$body, habilitado, ci, pedido, connection, resultChef, rch, resultCamarero, rca, result;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            nroPedido = req.params.nroPedido;
            _req$body = req.body, habilitado = _req$body.habilitado, ci = _req$body.ci;
            console.log("datos pedido:", nroPedido, "-", habilitado, "-", ci);
            pedido = {
              habilitado: habilitado,
              nroPedido: nroPedido
            };
            _context5.next = 7;
            return (0, _database.getConnection)();

          case 7:
            connection = _context5.sent;
            _context5.next = 10;
            return connection.query("SELECT ciChef FROM chef");

          case 10:
            resultChef = _context5.sent;
            console.log(resultChef);
            rch = Object.values(JSON.parse(JSON.stringify(resultChef)));
            console.log(rch);
            rch.forEach(function (element) {
              if (element.ciChef === ci) {
                pedido.ciChef = ci;
                console.log(pedido);
              }
            });
            _context5.next = 17;
            return connection.query("SELECT ciCamarero FROM camarero");

          case 17:
            resultCamarero = _context5.sent;
            console.log(resultCamarero);
            rca = Object.values(JSON.parse(JSON.stringify(resultCamarero)));
            console.log(rca);
            rca.forEach(function (element) {
              if (element.ciCamarero === ci) {
                pedido.ciCamarero = ci;
                console.log(pedido);
              }
            });
            _context5.next = 24;
            return connection.query("UPDATE pedido SET ? WHERE nroPedido = ?", [pedido, nroPedido]);

          case 24:
            result = _context5.sent;
            console.log(result);
            res.json({
              message: "Pedido Actualizado"
            });
            _context5.next = 33;
            break;

          case 29:
            _context5.prev = 29;
            _context5.t0 = _context5["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context5.t0.message);

          case 33:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 29]]);
  }));

  return function enablePedido(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // const addPedido = async (req, res) => {
//     try {
//         const connection = await getConnection();
//         const { fecha, idMesa, products, hora, ci } = req.body;
//         console.log("Datos para registro del pedido");
//         console.log(fecha);
//         console.log(idMesa);
//         console.log(hora);
//         console.log(ci);
//         const pedido = {
//             fecha, hora, idMesa, habilitado: 0, ciCliente: ci
//         }
//         const result = await connection.query('INSERT INTO pedido SET ?', pedido);
//         console.log(result);
//         const busca = await connection.query('SELECT nroPedido FROM pedido WHERE fecha LIKE ? AND hora LIKE ? AND idMesa LIKE ?', [fecha, hora, idMesa]);
//         console.log("busca");
//         console.log(busca);
//         console.log("aaa");
//         let nroPedido = busca[0].nroPedido;
//         console.log(nroPedido);
//         /*products.forEach(element => {
//             console.log(element.idProducto,element.cantidad); 
//         });*/
//         let pay = {
//             idProducto: "",
//             nroPedido: "",
//             cantidad: ""
//         }
//         let result2;
//         let qstockproductobuscado;
//         let stockproductobuscado;
//         let verificandoStock;
//         let actuali;
//         products.forEach(async element => {
//             console.log("asigna");
//             pay.idProducto = element.idProducto;
//             pay.cantidad = element.cantidad;
//             pay.nroPedido = nroPedido;
//             console.log(pay);
//             console.log("asigna222");
//             /**PARA DISMINUIR EL STOCK DEL PLATO SEGUN LA CANTIDAD*/
//             qstockproductobuscado = await connection.query('SELECT stock FROM plato WHERE idProducto = ?', element.idProducto);
//             console.log("STOCK producto buscado");
//             stockproductobuscado = qstockproductobuscado[0].stock;
//             console.log(stockproductobuscado);
//             verificandoStock = stockproductobuscado - element.cantidad;
//             //registramos el pedido en la tabla adquiere
//             result2 = await connection.query('INSERT INTO adquiere SET ?', pay);
//             console.log(result2);
//             //actualizando el stock en la tabla de platos
//             actuali = await connection.query('UPDATE plato SET stock=? WHERE idProducto=?', [verificandoStock, element.idProducto]);
//             console.log("ACTUALIZANDO EL STOCK");
//             console.log(actuali);
//             console.log("TERMINA PROCESSSSSSSSSS-------------------------------------");
//         });
//         res.json({ message: "pedido añadido" });
//     } catch (error) {
//         res.status(500);//error de lado del servidor
//         res.send(error.message);
//     }
// }


var addPedido = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var connection, _req$body2, fecha, idMesa, products, productsb, hora, ci, pedido, result, busca, nroPedido, pay, result2, result3, result4, pay2, result22;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context8.sent;
            _req$body2 = req.body, fecha = _req$body2.fecha, idMesa = _req$body2.idMesa, products = _req$body2.products, productsb = _req$body2.productsb, hora = _req$body2.hora, ci = _req$body2.ci;
            console.log("Datos para registro del pedido");
            console.log(fecha);
            console.log(idMesa);
            console.log(hora);
            console.log(ci);
            console.log(products);
            console.log(productsb);
            pedido = {
              fecha: fecha,
              hora: hora,
              idMesa: idMesa,
              habilitado: 0,
              ciCliente: ci
            };
            _context8.next = 15;
            return connection.query('INSERT INTO pedido SET ?', pedido);

          case 15:
            result = _context8.sent;
            console.log(result);
            _context8.next = 19;
            return connection.query('SELECT nroPedido FROM pedido WHERE fecha LIKE ? AND hora LIKE ? AND idMesa LIKE ?', [fecha, hora, idMesa]);

          case 19:
            busca = _context8.sent;
            console.log("busca");
            nroPedido = busca[0].nroPedido;
            console.log(nroPedido);
            /*products.forEach(element => {
                console.log(element.idProducto,element.cantidad); 
            });*/

            pay = {
              idProducto: "",
              nroPedido: "",
              cantidad: ""
            };
            products.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(element) {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        pay.idProducto = element.idProducto;
                        pay.cantidad = element.cantidad;
                        pay.nroPedido = nroPedido;
                        console.log(pay);
                        _context6.next = 6;
                        return connection.query('INSERT INTO adquiere SET ?', pay);

                      case 6:
                        result2 = _context6.sent;
                        console.log(result2);
                        _context6.next = 10;
                        return connection.query('SELECT stock FROM plato WHERE idProducto = ?', element.idProducto);

                      case 10:
                        result3 = _context6.sent;
                        console.log("Stock del producto ", result3[0].stock);
                        _context6.next = 14;
                        return connection.query('UPDATE plato SET stock=? WHERE idProducto=?', [result3[0].stock - element.cantidad, element.idProducto]);

                      case 14:
                        result4 = _context6.sent;
                        console.log(result4);

                      case 16:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x13) {
                return _ref7.apply(this, arguments);
              };
            }());
            pay2 = {
              idProducto: "",
              nroPedido: "",
              cantidad: ""
            };
            productsb.forEach( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(element) {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        pay2.idProducto = element.idProducto;
                        pay2.cantidad = element.cantidad;
                        pay2.nroPedido = nroPedido;
                        console.log(pay2);
                        _context7.next = 6;
                        return connection.query('INSERT INTO adquiere SET ?', pay2);

                      case 6:
                        result22 = _context7.sent;
                        console.log(result22);

                      case 8:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x14) {
                return _ref8.apply(this, arguments);
              };
            }());
            res.json({
              message: "pedido añadido"
            });
            _context8.next = 34;
            break;

          case 30:
            _context8.prev = 30;
            _context8.t0 = _context8["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context8.t0.message);

          case 34:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 30]]);
  }));

  return function addPedido(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //desde aqui alv todo haha
//obteniendo pedidos del cliente por su ci


var getPedidosCliente = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var ci, connection, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            ci = req.params.ci;
            _context9.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context9.sent;
            _context9.next = 7;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.idMesa,xmes.nrosillas,xped.ciCliente,xped.habilitado FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND ciCliente =  ? AND xped.fecha = (SELECT DATE(NOW()) AS fecha)", ci);

          case 7:
            result = _context9.sent;
            console.log(result);
            res.json(result);
            _context9.next = 16;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context9.t0.message);

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 12]]);
  }));

  return function getPedidosCliente(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}(); //obteniendo pedidos para el camarero y este los pueda habilitar


var getPedidosCamarero = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context10.sent;
            _context10.next = 6;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '0' AND xped.fecha = (SELECT DATE(NOW()) AS fecha)");

          case 6:
            result = _context10.sent;
            console.log(result);
            res.json(result);
            _context10.next = 15;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context10.t0.message);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 11]]);
  }));

  return function getPedidosCamarero(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}(); //obteniendo pedidos para el chef y este los pueda despachar


var getPedidosChef = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context11.sent;
            _context11.next = 6;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '1' AND xped.fecha = (SELECT DATE(NOW()) AS fecha)");

          case 6:
            result = _context11.sent;
            console.log(result);
            res.json(result);
            _context11.next = 15;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context11.t0.message);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 11]]);
  }));

  return function getPedidosChef(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}(); //para actualizar el pedido que el camarero adicionara o eliminara


var actualizaPedido = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var connection, _req$body3, fecha, idMesa, products, productsb, hora, ciCliente, ciCamarero, nroPedido, eli1, eli2, pedido, result, pay, result2, result3, result4, pay2, result22;

    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context14.sent;
            _req$body3 = req.body, fecha = _req$body3.fecha, idMesa = _req$body3.idMesa, products = _req$body3.products, productsb = _req$body3.productsb, hora = _req$body3.hora, ciCliente = _req$body3.ciCliente, ciCamarero = _req$body3.ciCamarero, nroPedido = _req$body3.nroPedido;
            console.log("Datos para registro del pedido");
            console.log(fecha);
            console.log(idMesa);
            console.log(hora);
            console.log(ciCliente, ciCamarero);
            console.log(products);
            console.log(productsb);
            console.log(nroPedido); //eliminamos los registros tenidos anteriormente y creamos un nuevo pedido

            _context14.next = 15;
            return connection.query('DELETE FROM adquiere WHERE nroPedido = ?', nroPedido);

          case 15:
            eli1 = _context14.sent;
            console.log(eli1);
            _context14.next = 19;
            return connection.query('DELETE FROM pedido WHERE nroPedido = ?', nroPedido);

          case 19:
            eli2 = _context14.sent;
            console.log(eli2);
            console.log("despues de eliminar"); //---------------------------------------------------------------------------

            pedido = {
              fecha: fecha,
              hora: hora,
              idMesa: idMesa,
              habilitado: 1,
              ciCliente: ciCliente,
              ciCamarero: ciCamarero,
              nroPedido: nroPedido
            };
            _context14.next = 25;
            return connection.query('INSERT INTO pedido SET ?', pedido);

          case 25:
            result = _context14.sent;
            console.log(result);
            /*products.forEach(element => {
                console.log(element.idProducto,element.cantidad); 
            });*/

            pay = {
              idProducto: "",
              nroPedido: "",
              cantidad: ""
            };
            products.forEach( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(element) {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        pay.idProducto = element.idproducto;
                        pay.cantidad = element.cantidad;
                        pay.nroPedido = nroPedido;
                        console.log(pay);
                        _context12.next = 6;
                        return connection.query('INSERT INTO adquiere SET ?', pay);

                      case 6:
                        result2 = _context12.sent;
                        console.log(result2);
                        _context12.next = 10;
                        return connection.query('SELECT stock FROM plato WHERE idProducto = ?', element.idproducto);

                      case 10:
                        result3 = _context12.sent;
                        console.log("Stock del producto ", result3[0].stock);
                        _context12.next = 14;
                        return connection.query('UPDATE plato SET stock=? WHERE idProducto=?', [result3[0].stock - element.cantidad, element.idproducto]);

                      case 14:
                        result4 = _context12.sent;
                        console.log(result4);

                      case 16:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));

              return function (_x23) {
                return _ref13.apply(this, arguments);
              };
            }());
            pay2 = {
              idProducto: "",
              nroPedido: "",
              cantidad: ""
            };
            productsb.forEach( /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(element) {
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        pay2.idProducto = element.idproducto;
                        pay2.cantidad = element.cantidad;
                        pay2.nroPedido = nroPedido;
                        console.log(pay2);
                        _context13.next = 6;
                        return connection.query('INSERT INTO adquiere SET ?', pay2);

                      case 6:
                        result22 = _context13.sent;
                        console.log(result22);

                      case 8:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));

              return function (_x24) {
                return _ref14.apply(this, arguments);
              };
            }());
            res.json({
              message: "pedido modificado"
            });
            _context14.next = 38;
            break;

          case 34:
            _context14.prev = 34;
            _context14.t0 = _context14["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context14.t0.message);

          case 38:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 34]]);
  }));

  return function actualizaPedido(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}(); //obteniendo pedidos POR RANGO


var postPedidosRango = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body4, fechaInicio, fechaFin, connection, result;

    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _req$body4 = req.body, fechaInicio = _req$body4.fechaInicio, fechaFin = _req$body4.fechaFin;
            _context15.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context15.sent;
            _context15.next = 7;
            return connection.query("SELECT xped.fecha,xped.nroPedido,xped.idMesa,xped.ciChef,xusu.nombre as nombreChef,xped.idFactura,xped.ciCliente,TMP.nombre as nombreCliente,xped.ciCamarero,TMP2.nombre as nombreCamarero FROM pedido xped,usuario xusu,(SELECT ci,nombre FROM usuario) TMP,(SELECT ci,nombre FROM usuario) TMP2 WHERE habilitado = '2' AND xped.ciChef = xusu.ci AND xped.ciCliente = TMP.ci AND xped.ciCamarero = TMP2.ci AND xped.fecha BETWEEN ? AND ?", [fechaInicio, fechaFin]);

          case 7:
            result = _context15.sent;
            console.log(result);
            res.json(result);
            _context15.next = 16;
            break;

          case 12:
            _context15.prev = 12;
            _context15.t0 = _context15["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context15.t0.message);

          case 16:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 12]]);
  }));

  return function postPedidosRango(_x25, _x26) {
    return _ref15.apply(this, arguments);
  };
}();

var metodos = {
  postPedidosRango: postPedidosRango,
  getPedidos: getPedidos,
  getPedidosHabilitados: getPedidosHabilitados,
  getproductosPedido: getproductosPedido,
  enablePedido: enablePedido,
  addPedido: addPedido,
  getPedidosCliente: getPedidosCliente,
  getPedidosCamarero: getPedidosCamarero,
  getPedidosChef: getPedidosChef,
  getPedido: getPedido,
  actualizaPedido: actualizaPedido
};
exports.metodos = metodos;