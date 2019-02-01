"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("../models/party.js"));

var _partyControllers = _interopRequireDefault(require("../controllers/partyControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var partyRoutes = _express.default.Router();

partyRoutes.get("/parties", _partyControllers.default.getAllParties);
partyRoutes.get("/parties/:id", _partyControllers.default.getSingleParty);
partyRoutes.post("/parties", _partyControllers.default.createNewParty);
partyRoutes.patch("/parties/:id/name", _partyControllers.default.updatePartyName);
partyRoutes.delete("/parties/:id", _partyControllers.default.deleteParty);
var _default = partyRoutes; //

exports.default = _default;