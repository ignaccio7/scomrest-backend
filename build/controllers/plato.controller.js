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

var getPlatos = /*#__PURE__*/function () {
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
            return connection.query("SELECT xpro.idProducto,xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto");

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

  return function getPlatos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getPlato = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var idProducto, connection, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idProducto = req.params.idProducto;
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context2.sent;
            _context2.next = 7;
            return connection.query("SELECT xpla.idProducto,xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto and xpla.idProducto=?", idProducto);

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

  return function getPlato(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getIngredientesPlato = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var idProducto, connection, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            idProducto = req.params.idProducto;
            _context3.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context3.sent;
            _context3.next = 7;
            return connection.query("SELECT xing.idIng,xing.nombre,xing.tipo FROM contiene xcont,ingrediente xing WHERE xcont.idIng = xing.idIng  AND idProducto =?", idProducto);

          case 7:
            result = _context3.sent;
            console.log(result);
            res.json(result);
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context3.t0.message);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getIngredientesPlato(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var addIngredientesPlato = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body, idProducto, ingredients, connection, pay, result;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body = req.body, idProducto = _req$body.idProducto, ingredients = _req$body.ingredients;
            _context5.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context5.sent;
            pay = {
              idProducto: idProducto,
              idIng: ""
            };
            ingredients.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(element) {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        pay.idIng = element.idIng;
                        console.log(pay);
                        _context4.next = 4;
                        return connection.query('INSERT INTO contiene SET ?', pay);

                      case 4:
                        result = _context4.sent;
                        console.log(result);

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x9) {
                return _ref5.apply(this, arguments);
              };
            }());
            res.json({
              message: "Ingredientes añadidos"
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context5.t0.message);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function addIngredientesPlato(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var updateIngredientesPlato = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, idProducto, ingredients, connection, eli1, pay, result;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _req$body2 = req.body, idProducto = _req$body2.idProducto, ingredients = _req$body2.ingredients;
            _context7.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context7.sent;
            _context7.next = 7;
            return connection.query('DELETE FROM contiene WHERE idProducto = ?', idProducto);

          case 7:
            eli1 = _context7.sent;
            console.log(eli1);
            pay = {
              idProducto: idProducto,
              idIng: ""
            };
            ingredients.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(element) {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        pay.idIng = element.idIng;
                        console.log(pay);
                        _context6.next = 4;
                        return connection.query('INSERT INTO contiene SET ?', pay);

                      case 4:
                        result = _context6.sent;
                        console.log(result);

                      case 6:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x12) {
                return _ref7.apply(this, arguments);
              };
            }());
            res.json({
              message: "Ingredientes actualizados"
            });
            _context7.next = 18;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context7.t0.message);

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 14]]);
  }));

  return function updateIngredientesPlato(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

var addPlato = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var connection, _req$body3, nombre, precio, descripcion, stock, ciudadProv, image, idProducto, producto, result, busca, plato, result2;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context8.sent;
            _req$body3 = req.body, nombre = _req$body3.nombre, precio = _req$body3.precio, descripcion = _req$body3.descripcion, stock = _req$body3.stock, ciudadProv = _req$body3.ciudadProv, image = _req$body3.image;
            console.log(nombre, precio, descripcion, stock, ciudadProv);
            idProducto = "";
            producto = {
              precio: precio,
              descripcion: descripcion,
              nombre: nombre
            };
            _context8.next = 10;
            return connection.query('INSERT INTO producto SET ?', producto);

          case 10:
            result = _context8.sent;
            console.log(result);
            console.log("inserto producto");
            _context8.next = 15;
            return connection.query('SELECT idProducto FROM producto WHERE nombre LIKE ? AND precio LIKE ? AND descripcion LIKE ?', [nombre, precio, descripcion]);

          case 15:
            busca = _context8.sent;
            idProducto = busca[0].idProducto;
            plato = {
              stock: stock,
              ciudadProv: ciudadProv,
              idProducto: idProducto,
              image: image
            };
            _context8.next = 20;
            return connection.query('INSERT INTO plato SET ?', plato);

          case 20:
            result2 = _context8.sent;
            console.log(result2);
            res.json({
              message: "plato añadido"
            });
            _context8.next = 29;
            break;

          case 25:
            _context8.prev = 25;
            _context8.t0 = _context8["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context8.t0.message);

          case 29:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 25]]);
  }));

  return function addPlato(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

var addStock = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var idProducto, stock, plato, connection, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            idProducto = req.params.idProducto;
            stock = req.body.stock;
            plato = {
              stock: stock,
              idProducto: idProducto
            };
            _context9.next = 6;
            return (0, _database.getConnection)();

          case 6:
            connection = _context9.sent;
            _context9.next = 9;
            return connection.query("UPDATE plato SET ? WHERE idProducto = ?", [plato, idProducto]);

          case 9:
            result = _context9.sent;
            console.log(result);
            res.json({
              message: "stock del plato actualizado"
            });
            _context9.next = 18;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context9.t0.message);

          case 18:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 14]]);
  }));

  return function addStock(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

var deletePlato = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var idProducto, connection, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            idProducto = req.params.idProducto;
            _context10.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context10.sent;
            _context10.next = 7;
            return connection.query("DELETE FROM producto WHERE idProducto=?", idProducto);

          case 7:
            result = _context10.sent;
            console.log(result);
            res.json(result);
            _context10.next = 16;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context10.t0.message);

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 12]]);
  }));

  return function deletePlato(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();

var updatePlato = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body4, nombre, precio, descripcion, stock, ciudadProv, idProducto, image, producto, plato, connection, result, result2;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _req$body4 = req.body, nombre = _req$body4.nombre, precio = _req$body4.precio, descripcion = _req$body4.descripcion, stock = _req$body4.stock, ciudadProv = _req$body4.ciudadProv, idProducto = _req$body4.idProducto, image = _req$body4.image;
            producto = {
              nombre: nombre,
              precio: precio,
              descripcion: descripcion,
              idProducto: idProducto
            };
            plato = {
              stock: stock,
              ciudadProv: ciudadProv,
              idProducto: idProducto,
              image: image
            }; //const result=await connection.query("UPDATE usuario SET ? WHERE ci = ?",[usuario, ci]);

            _context11.next = 6;
            return (0, _database.getConnection)();

          case 6:
            connection = _context11.sent;
            _context11.next = 9;
            return connection.query('UPDATE producto SET ? WHERE idProducto=?', [producto, idProducto]);

          case 9:
            result = _context11.sent;
            _context11.next = 12;
            return connection.query('UPDATE plato SET ? WHERE idProducto=?', [plato, idProducto]);

          case 12:
            result2 = _context11.sent;
            console.log(result);
            console.log(result2);
            res.json({
              message: "plato actualizado"
            });
            _context11.next = 22;
            break;

          case 18:
            _context11.prev = 18;
            _context11.t0 = _context11["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context11.t0.message);

          case 22:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 18]]);
  }));

  return function updatePlato(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}();

var getPlatosPedido = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            console.log("OBTENIENDO : getPlatosPedido");
            _context12.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context12.sent;
            _context12.next = 7;
            return connection.query("SELECT xpla.idProducto,xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto AND xpla.stock>0");

          case 7:
            result = _context12.sent;
            console.log(result);
            res.json(result);
            _context12.next = 16;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](0);
            res.status(500); //error de lado del servidor

            res.send(_context12.t0.message);

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 12]]);
  }));

  return function getPlatosPedido(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}();

var metodos = {
  getPlatos: getPlatos,
  getPlato: getPlato,
  getIngredientesPlato: getIngredientesPlato,
  addPlato: addPlato,
  addStock: addStock,
  deletePlato: deletePlato,
  updatePlato: updatePlato,
  getPlatosPedido: getPlatosPedido,
  addIngredientesPlato: addIngredientesPlato,
  updateIngredientesPlato: updateIngredientesPlato
};
exports.metodos = metodos;