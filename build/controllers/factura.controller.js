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

//PARA DESCARGAR EL PDF 
var pdf = require('html-pdf'); //PARA LA CONEXION


var getPdf = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.delegateYield( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var connection, idFactura, result, result2, result3, result4, result5, vecNroPedidos, content, index, el;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return (0, _database.getConnection)();

                    case 2:
                      connection = _context2.sent;
                      idFactura = req.params.idFactura;
                      _context2.next = 6;
                      return connection.query("SELECT xfac.* FROM factura xfac WHERE idFactura = ?", idFactura);

                    case 6:
                      result = _context2.sent;
                      _context2.next = 9;
                      return connection.query("SELECT xusu.apPaterno as patCliente FROM factura xfac,usuario xusu WHERE xusu.ci = xfac.ciCliente AND idFactura = ?", idFactura);

                    case 9:
                      result2 = _context2.sent;
                      _context2.next = 12;
                      return connection.query("SELECT xusu.apPaterno as patCajero FROM factura xfac,usuario xusu WHERE xusu.ci = xfac.ciCajero AND idFactura = ?", idFactura);

                    case 12:
                      result3 = _context2.sent;
                      _context2.next = 15;
                      return connection.query("SELECT xped.nroPedido FROM pedido xped WHERE idFactura = ?", idFactura);

                    case 15:
                      result4 = _context2.sent;
                      vecNroPedidos = [];
                      console.log(result);
                      console.log(JSON.stringify(result[0]));
                      content = "<html>\n        <img src=\"archivePdf/logoscomSinfondo.png\" alt=\"no hay imagen\"> </br>\n        <h1>Factura NRO\xBA ".concat(idFactura, " </h1>\n        -------------------------------------------------------------<br/>\n            FECHA : ").concat(result[0].fecha, "<br/>\n            HORA : ").concat(result[0].hora, "<br/>\n            SE\xD1OR(ES)  : ").concat(result2[0].patCliente, "<br/>\n        -------------------------------------------------------------<br/>");
                      console.log("LOS NUMEROS DE PEDIDOS SON");
                      console.log(result4);
                      result4.forEach( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(element) {
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log(element.nroPedido);
                                  vecNroPedidos.push(element.nroPedido); //content = content + `-${element.nroPedido}-<br/>`;

                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x3) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                      console.log("LOS NUMEROS DE PEDIDOS SON");
                      console.log("VECTOR DE PEDIDOS:", vecNroPedidos);
                      content = content + "<table> <tr> <td>DESCRIPCION</td> <td>PRECIO</td> <td>CANTIDAD</td> <td>TOTAL</td> </tr>";
                      index = 0;

                    case 27:
                      if (!(index < vecNroPedidos.length)) {
                        _context2.next = 38;
                        break;
                      }

                      el = vecNroPedidos[index];
                      console.log("------NUMERO DE PEDIDO :", el);
                      _context2.next = 32;
                      return connection.query("SELECT xpro.nombre,xpro.precio,xadqui.cantidad FROM adquiere xadqui, producto xpro WHERE xadqui.idproducto = xpro.idproducto AND xadqui.nropedido = ?", el);

                    case 32:
                      result5 = _context2.sent;
                      console.log(result5);
                      result5.forEach(function (element) {
                        console.log(element.nombre); //content = content + `-${element.nombre}-<br/>`;

                        content = content + "<tr><td>-".concat(element.nombre, "</td><td>").concat(element.precio, "</td><td>").concat(element.cantidad, "</td><td>").concat(element.cantidad * element.precio, "</td></tr>");
                      });

                    case 35:
                      index++;
                      _context2.next = 27;
                      break;

                    case 38:
                      content = content + "</table><br/>";
                      content = content + "-------------------------------------------------------------<br/>\n            TOTAL A PAGAR  : ".concat(result[0].total, "<br/> \n            CAMBIO  : ").concat(result[0].cambio, "<br/> \n            USUARIO  : ").concat(result3[0].patCajero, "<br/> \n            </html>\n        ");
                      _context2.t0 = pdf;
                      _context2.next = 43;
                      return content;

                    case 43:
                      _context2.t1 = _context2.sent;

                      _context2.t0.create.call(_context2.t0, _context2.t1).toFile('./html-pdf.pdf', function (err, res) {
                        if (err) {
                          console.log(err);
                        } else {
                          console.log(res);
                        }
                      });

                      _context2.next = 47;
                      return console.log("hola");

                    case 47:
                      _context2.next = 49;
                      return res.json({
                        message: "hola mundo"
                      });

                    case 49:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })(), "t0", 2);

          case 2:
            _context3.next = 7;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t1 = _context3["catch"](0);
            console.log(_context3.t1);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 4]]);
  }));

  return function getPdf(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getFacturas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context4.sent;
            _context4.next = 6;
            return connection.query("SELECT * FROM factura");

          case 6:
            result = _context4.sent;
            console.log(result);
            res.json(result);
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context4.t0.message);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function getFacturas(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var getFacturasCliente = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var ciCliente, connection, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            ciCliente = req.params.ciCliente;
            _context5.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context5.sent;
            _context5.next = 7;
            return connection.query("SELECT xfac.*,xcli.*,xusu.* FROM factura xfac, cliente xcli,usuario xusu WHERE xcli.ciCliente = xfac.ciCliente AND xusu.ci=?", ciCliente);

          case 7:
            result = _context5.sent;
            console.log(result);
            res.json(result);
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context5.t0.message);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function getFacturasCliente(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}(); //OBTENIENDO PEDIDOS CON UN ESTADO 2 PARA SER FACTURADOS
//obteniendo pedidos para que el CAJERO pueda facturar


var getPedidosCajero = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context6.sent;
            _context6.next = 6;
            return connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '2' AND xped.fecha = (SELECT DATE(NOW()) AS fecha)");

          case 6:
            result = _context6.sent;
            console.log(result);
            res.json(result);
            _context6.next = 15;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context6.t0.message);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 11]]);
  }));

  return function getPedidosCajero(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

var addFactura = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var connection, _req$body, total, cambio, fecha, hora, ciCliente, ciCajero, pedidos, factura, result, busca, idFactura, nroPedido, result2;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context8.sent;
            _req$body = req.body, total = _req$body.total, cambio = _req$body.cambio, fecha = _req$body.fecha, hora = _req$body.hora, ciCliente = _req$body.ciCliente, ciCajero = _req$body.ciCajero, pedidos = _req$body.pedidos;
            console.log("Datos para registro de la factura");
            /*console.log(fecha);
            console.log(idMesa);
            console.log(hora);*/

            console.log(ciCajero);
            factura = {
              total: total,
              cambio: cambio,
              fecha: fecha,
              hora: hora,
              ciCliente: ciCliente,
              ciCajero: ciCajero
            };
            _context8.next = 10;
            return connection.query('INSERT INTO factura SET ?', factura);

          case 10:
            result = _context8.sent;
            console.log(result);
            _context8.next = 14;
            return connection.query('SELECT idFactura FROM factura WHERE fecha LIKE ? AND hora LIKE ?', [fecha, hora]);

          case 14:
            busca = _context8.sent;
            idFactura = busca[0].idFactura;
            console.log(idFactura);
            nroPedido = "";
            pedidos.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(element) {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        nroPedido = element.nroPedido;
                        _context7.next = 3;
                        return connection.query("UPDATE pedido SET idFactura = ? WHERE nroPedido = ?", [idFactura, nroPedido]);

                      case 3:
                        result2 = _context7.sent;
                        console.log(result2);

                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x12) {
                return _ref7.apply(this, arguments);
              };
            }());
            res.json({
              message: "Factura Registrada",
              idFactura: idFactura
            });
            _context8.next = 26;
            break;

          case 22:
            _context8.prev = 22;
            _context8.t0 = _context8["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context8.t0.message);

          case 26:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 22]]);
  }));

  return function addFactura(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

var metodos = {
  getPdf: getPdf,
  getFacturas: getFacturas,
  getFacturasCliente: getFacturasCliente,
  addFactura: addFactura,
  getPedidosCajero: getPedidosCajero
};
exports.metodos = metodos;