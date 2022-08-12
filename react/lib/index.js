"use strict";

var _HelloMessage = _interopRequireDefault(require("./components/HelloMessage"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

require("./index.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_HelloMessage["default"], {
  name: "Taylor"
}), document.getElementById('root')); // ECMAscript: syntax standard; ES5, ES6, ES7...
// Javascript: ECMAscript + WebAPI(DOM, fetch...)
// Node: EMCAscript + NodeAPI(require, fs, http...)