"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _officeController = _interopRequireDefault(require("../controllers/officeController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var officeRoutes = (0, _express.Router)();
officeRoutes.get("/office", _officeController.default.getAllOffices);
officeRoutes.get("/office/:id", _officeController.default.getSingleOffice);
var _default = officeRoutes;
exports.default = _default;