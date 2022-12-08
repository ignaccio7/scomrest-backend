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

var getProveedores = /*#__PURE__*/function () {
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
            return connection.query("SELECT idProveedor,nombre,direccion,contacto FROM proveedor");

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

  return function getProveedores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getProveedor = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var idProveedor, connection, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idProveedor = req.params.idProveedor;
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context2.sent;
            _context2.next = 7;
            return connection.query("SELECT nombre,direccion,contacto,idProveedor FROM proveedor WHERE idProveedor=?", idProveedor);

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

  return function getProveedor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var addProveedor = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, nombre, direccion, contacto, proveedor, connection, result;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, direccion = _req$body.direccion, contacto = _req$body.contacto;
            proveedor = {
              nombre: nombre,
              direccion: direccion,
              contacto: contacto
            };
            _context3.next = 5;
            return (0, _database.getConnection)();

          case 5:
            connection = _context3.sent;
            _context3.next = 8;
            return connection.query('INSERT INTO proveedor SET ?', proveedor);

          case 8:
            result = _context3.sent;
            console.log(result);
            res.json({
              message: "proveedor añadido"
            });
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context3.t0.message);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function addProveedor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteProveedor = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var idProveedor, connection, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            idProveedor = req.params.idProveedor;
            _context4.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context4.sent;
            _context4.next = 7;
            return connection.query("DELETE FROM proveedor WHERE idProveedor=?", idProveedor);

          case 7:
            result = _context4.sent;
            console.log(result);
            res.json({
              message: "Proveedor eliminado"
            });
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

  return function deleteProveedor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var updateProveedor = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, nombre, direccion, contacto, idProveedor, proveedor, connection, result;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body2 = req.body, nombre = _req$body2.nombre, direccion = _req$body2.direccion, contacto = _req$body2.contacto, idProveedor = _req$body2.idProveedor;
            proveedor = {
              nombre: nombre,
              direccion: direccion,
              contacto: contacto,
              idProveedor: idProveedor
            };
            _context5.next = 5;
            return (0, _database.getConnection)();

          case 5:
            connection = _context5.sent;
            _context5.next = 8;
            return connection.query("UPDATE proveedor SET ? WHERE idProveedor = ?", [proveedor, idProveedor]);

          case 8:
            result = _context5.sent;
            console.log(result);
            res.json({
              message: "Proveedor modificado"
            });
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context5.t0.message);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function updateProveedor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var addChefIngredienteProveedor = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, ciChef, idProveedor, idIng, cantidad, fechaCad, precio, registroCIP, connection, result;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, ciChef = _req$body3.ciChef, idProveedor = _req$body3.idProveedor, idIng = _req$body3.idIng, cantidad = _req$body3.cantidad, fechaCad = _req$body3.fechaCad, precio = _req$body3.precio;
            registroCIP = {
              ciChef: ciChef,
              idProveedor: idProveedor,
              idIng: idIng,
              cantidad: cantidad,
              fechaCad: fechaCad,
              precio: precio
            };
            _context6.next = 5;
            return (0, _database.getConnection)();

          case 5:
            connection = _context6.sent;
            _context6.next = 8;
            return connection.query('INSERT INTO solicitacip SET ?', registroCIP);

          case 8:
            result = _context6.sent;
            console.log(result);
            res.json({
              message: "pedido añadido"
            });
            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context6.t0.message);

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 13]]);
  }));

  return function addChefIngredienteProveedor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var getPedidosChefProveedorIngrediente = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context7.sent;
            _context7.next = 6;
            return connection.query("SELECT cip.ciChef,ch.nombre as nombrechef,cip.idProveedor,prov.nombre as nombreProveedor,cip.idIng,ing.nombre as nombreIngrediente,cip.cantidad,cip.fechaCad,cip.precio FROM solicitacip cip, usuario ch, proveedor prov, ingrediente ing WHERE cip.ciChef = ch.ci AND cip.idProveedor = prov.idProveedor AND cip.idIng = ing.idIng");

          case 6:
            result = _context7.sent;
            console.log(result);
            res.json(result);
            _context7.next = 15;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context7.t0.message);

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 11]]);
  }));

  return function getPedidosChefProveedorIngrediente(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var getPedidosChef = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var ci, connection, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            ci = req.params.ci;
            _context8.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context8.sent;
            _context8.next = 7;
            return connection.query("SELECT cip.ciChef,ch.nombre as nombrechef,cip.idProveedor,prov.nombre as nombreProveedor,cip.idIng,ing.nombre as nombreIngrediente,cip.cantidad,cip.fechaCad,cip.precio FROM solicitacip cip, usuario ch, proveedor prov, ingrediente ing WHERE cip.ciChef = ch.ci AND cip.idProveedor = prov.idProveedor AND cip.idIng = ing.idIng AND ch.ci =?", ci);

          case 7:
            result = _context8.sent;
            console.log(result);
            res.json(result);
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context8.t0.message);

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 12]]);
  }));

  return function getPedidosChef(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); //obteniendo pedidos POR RANGO


var postPedidoChefProveedorRango = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body4, fechaInicio, fechaFin, connection, result;

    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _req$body4 = req.body, fechaInicio = _req$body4.fechaInicio, fechaFin = _req$body4.fechaFin;
            _context9.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context9.sent;
            _context9.next = 7;
            return connection.query("SELECT cip.ciChef,ch.nombre as nombrechef,cip.idProveedor,prov.nombre as nombreProveedor,cip.idIng,ing.nombre as nombreIngrediente,cip.cantidad,cip.fechaCad,cip.precio FROM solicitacip cip, usuario ch, proveedor prov, ingrediente ing WHERE cip.ciChef = ch.ci AND cip.idProveedor = prov.idProveedor AND cip.idIng = ing.idIng AND cip.fechaCad BETWEEN ? AND ?", [fechaInicio, fechaFin]);

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

  return function postPedidoChefProveedorRango(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

var metodos = {
  postPedidoChefProveedorRango: postPedidoChefProveedorRango,
  getProveedores: getProveedores,
  getProveedor: getProveedor,
  addProveedor: addProveedor,
  deleteProveedor: deleteProveedor,
  updateProveedor: updateProveedor,
  addChefIngredienteProveedor: addChefIngredienteProveedor,
  getPedidosChefProveedorIngrediente: getPedidosChefProveedorIngrediente,
  getPedidosChef: getPedidosChef
};
exports.metodos = metodos;