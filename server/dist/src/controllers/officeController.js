"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _office = _interopRequireDefault(require("../models/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OfficeController =
/*#__PURE__*/
function () {
  function OfficeController() {
    _classCallCheck(this, OfficeController);
  }

  _createClass(OfficeController, null, [{
    key: "getAllOffices",
    // Get all offices
    value: function getAllOffices(req, res) {
      return res.status(200).json({
        status: res.statusCode,
        data: _office.default
      });
    }
  }, {
    key: "getSingleOffice",
    value: function getSingleOffice(req, res) {
      var findOffice = _office.default.find(function (officeobj) {
        return officeobj.id === parseInt(req.params.id, 10);
      });

      if (findOffice) {
        return res.status(200).json({
          status: res.statusCode,
          data: findOffice
        });
      }

      return res.status(404).json({
        message: "Not Found"
      });
    }
  }]);

  return OfficeController;
}();

var _default = OfficeController;
exports.default = _default;