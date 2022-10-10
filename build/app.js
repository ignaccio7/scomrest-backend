"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _persona = _interopRequireDefault(require("./routes/persona.routes"));

var _plato = _interopRequireDefault(require("./routes/plato.routes"));

var _ingrediente = _interopRequireDefault(require("./routes/ingrediente.router"));

var _pedido = _interopRequireDefault(require("./routes/pedido.routes"));

var _bebida = _interopRequireDefault(require("./routes/bebida.routes"));

var _mesa = _interopRequireDefault(require("./routes/mesa.routes"));

var _factura = _interopRequireDefault(require("./routes/factura.routes"));

var _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//minuto20 https://www.youtube.com/watch?v=lV7mxivGX_I&t=7125s
console.log(_config["default"].port);

var cors = require('cors');

var app = (0, _express["default"])(); //para el cors

app.use(cors());
app.set('pkg', _package["default"]);
app.set('port', _config["default"].port); //Middlewares   son intermedios entre una peticion y una respuesta

app.use((0, _morgan["default"])("dev")); //en la parte de la consola tendremos un listado de las peticiones
//utilizamos morgan en modo de desarrollo 
//para entender json

app.use(_express["default"].json()); //rutas

app.use('/api/persona/', _persona["default"]);
app.use('/api/plato/', _plato["default"]);
app.use('/api/ingrediente/', _ingrediente["default"]);
app.use('/api/pedido/', _pedido["default"]);
app.use('/api/bebida/', _bebida["default"]);
app.use('/api/mesa/', _mesa["default"]);
app.use('/api/factura/', _factura["default"]);
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
    name: app.get('pkg').name
  });
});
var _default = app;
exports["default"] = _default;