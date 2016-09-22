'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _DataWraper = require('./components/DataWraper');

var _DataWraper2 = _interopRequireDefault(_DataWraper);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _route = require('./components/route');

var _route2 = _interopRequireDefault(_route);

var _reactDocumentMeta = require('react-document-meta');

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERoute = _express2.default.Router();
var app = new _express2.default();


var Home = ERoute.get('/foo/*', function (req, res) {
  (0, _reactRouter.match)({ routes: _route2.default, location: req.url }, function (err, redirect, props) {
    console.log('=============' + req.url + '==========');
    if (err) {
      res.status(500).send(error.message);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      // var initialProps = {};
      // initialProps['name'] = 'achyut';
      var initialProps = {
        name: 'achyut',
        address: 'sipajhar assam',
        age: 26
      };

      var initstate = JSON.stringify(initialProps);
      var x = _server2.default.renderToString(_react2.default.createElement(
        _DataWraper2.default,
        { data: initialProps },
        _react2.default.createElement(_reactRouter.RouterContext, props)
      ));

      // for meta tags

      var meta = _reactDocumentMeta2.default.renderAsHTML();

      res.render('index.ejs', { x: x, initstate: initstate, meta: meta });
    } else {
      res.status(404).render('nopage.ejs');
    }
  });
});
var Bar = ERoute.get('/bar/*', function (req, res) {
  res.end('dsdadad');
});

app.use(_express2.default.static(_path2.default.join(__dirname, '../public'))).use(Home).use(Bar);

app.listen(3000, function (req, res) {
  console.log('server is running');
});