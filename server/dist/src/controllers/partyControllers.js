"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _party = _interopRequireDefault(require("../models/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var partyController =
/*#__PURE__*/
function () {
  function partyController() {
    _classCallCheck(this, partyController);
  }

  _createClass(partyController, null, [{
    key: "getAllParties",
    // Get all parties
    value: function getAllParties(req, res) {
      return res.status(200).json({
        status: res.statusCode,
        data: _party.default
      });
    } // Get a single party

  }, {
    key: "getSingleParty",
    value: function getSingleParty(req, res) {
      var findParty = _party.default.find(function (partyobj) {
        return partyobj.id === parseInt(req.params.id, 10);
      });

      if (findParty) {
        return res.status(200).json({
          status: res.statusCode,
          data: findParty
        });
      }

      return res.status(404).json({
        message: 'Not Found'
      });
    } // Create new party

  }, {
    key: "createNewParty",
    value: function createNewParty(req, res) {
      if (!req.body.name) {
        return res.status(400).send({
          status: res.statusCode,
          message: "Party name is required"
        });
      }

      var newParty = {
        id: req.body.id,
        name: req.body.name,
        logoUrl: req.body.logoUrl
      };

      _party.default.push(newParty);

      return res.status(201).json({
        status: res.statusCode,
        data: [{
          id: newParty.id,
          name: newParty.name
        }]
      });
    } // Edit Party name

  }, {
    key: "updatePartyName",
    value: function updatePartyName(req, res) {
      var findParty = _party.default.find(function (party) {
        return party.id === parseInt(req.params.id, 10);
      });

      if (findParty) {
        delete findParty.name;
        findParty.name = req.body.name;
        return res.status(200).json({
          status: res.statusCode,
          data: [{
            id: findParty.id,
            name: findParty.name
          }]
        });
      }

      return res.status(404).json({
        status: res.statusCode,
        message: "Party id not found"
      });
    } //Delete party

  }, {
    key: "deleteParty",
    value: function deleteParty(req, res) {
      var findParty = _party.default.find(function (partyobt) {
        return partyobt.id === parseInt(req.params.id, 10);
      });

      if (!findParty) res.status(404).send("The record does not exist");

      var index = _party.default.indexOf(findParty);

      _party.default.splice(index, 1);

      res.status(200).json({
        status: res.statusCode,
        data: [{
          id: findParty.id,
          message: "Party has been deleted"
        }]
      });
    }
  }]);

  return partyController;
}();

var _default = partyController;
exports.default = _default;