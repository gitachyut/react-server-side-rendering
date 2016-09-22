'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDocumentMeta = require('react-document-meta');

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props, context) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props, context));

    _this.state = {
      name: context.data.name,
      age: context.data.age,
      address: context.data.address
    };
    return _this;
  }

  //  componentDidMount(){
  //      this.setState({
  //        name  :this.props.name,
  //        age : this.props.age
  //      });
  //  }

  _createClass(Home, [{
    key: 'btnClickd',
    value: function btnClickd(data) {
      alert('hello ' + data);
    }
  }, {
    key: 'render',
    value: function render() {
      var meta = {
        title: 'Some Meta Title',
        description: 'I am a description, and I can create multiple tags',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactDocumentMeta2.default, meta),
        _react2.default.createElement(
          'p',
          null,
          'Hello   ',
          this.state.name
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.btnClickd.bind(this, this.state.name) },
          'Click Me Here '
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
;
Home.contextTypes = {
  data: _react2.default.PropTypes.object.isRequired
};