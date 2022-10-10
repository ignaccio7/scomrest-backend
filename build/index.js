"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para que se mantenga ejecutando
_app["default"].listen(_app["default"].get("port"));

console.log("Servidor en puerto : ".concat(_app["default"].get("port")));