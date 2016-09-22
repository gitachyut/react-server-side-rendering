'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('./About');

var _About2 = _interopRequireDefault(_About);

var _Features = require('./Features');

var _Features2 = _interopRequireDefault(_Features);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/foo/', component: _App2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { path: '/foo/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/foo/about/:index', component: _About2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/foo/features', component: _Features2.default })
);