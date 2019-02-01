"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _partyRoutes = _interopRequireDefault(require("./routes/partyRoutes"));

var _officeRoutes = _interopRequireDefault(require("./routes/officeRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
var port = process.env.PORT || 5000;
app.get("/", function (req, res) {
  res.send("hello world");
});
app.use("/api/v1/", _partyRoutes.default);
app.use("/api/v1/", _officeRoutes.default);
app.listen(port, function () {
  console.log("App started and listening on port: ".concat(port));
});
var _default = app;
exports.default = _default;