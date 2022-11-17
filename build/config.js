"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  port: process.env.PORT || 4000,
  host: process.env.HOST || "localhost",
  database: process.env.DB_NAME || "dbscomrest",
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  db_port: process.env.DB_PORT || '3306',
  SECRET: 'scomrestGrupo8'
};
exports["default"] = _default;