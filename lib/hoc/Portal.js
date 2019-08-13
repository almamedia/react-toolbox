"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactStyleProptype = require("react-style-proptype");

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal(props) {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this.el = getContainer(props.container);
    return _this;
  }

  _createClass(Portal, [{
    key: "render",
    value: function render() {
      if (!this.props.children) return null;
      return _reactDom2.default.createPortal(_react2.default.createElement(
        "div",
        { className: this.props.className, style: this.props.style },
        this.props.children
      ), this.el);
    }
  }]);

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  container: _propTypes2.default.node,
  style: _reactStyleProptype2.default
};


function getContainer(container) {
  var _container = typeof container === "function" ? container() : container;
  return _reactDom2.default.findDOMNode(_container) || document.body;
}
/*
class Portal extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    container: PropTypes.node,
    style: styleShape
  };

  static defaultProps = {
    className: ""
  };

  componentDidMount() {
    this._renderOverlay();
  }

  componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = getContainer(nextProps.container);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  }

  componentDidUpdate() {
    this._renderOverlay();
  }

  componentWillUnmount() {
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  }

  getMountNode() {
    return this._overlayTarget;
  }

  getOverlayDOMNode() {
    if (!this.isMounted()) {
      // eslint-disable-line
      throw new Error(
        "getOverlayDOMNode(): A component must be mounted to have a DOM node."
      );
    }

    if (this._overlayInstance) {
      if (this._overlayInstance.getWrappedDOMNode) {
        return this._overlayInstance.getWrappedDOMNode();
      }
      return ReactDOM.findDOMNode(this._overlayInstance);
    }

    return null;
  }

  _getOverlay() {
    if (!this.props.children) return null;
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }

  _renderOverlay() {
    const overlay = this._getOverlay();
    if (overlay !== null) {
      this._mountOverlayTarget();
      this._overlayInstance = ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        overlay,
        this._overlayTarget
      );
    } else {
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    }
  }

  _unrenderOverlay() {
    if (this._overlayTarget) {
      ReactDOM.unmountComponentAtNode(this._overlayTarget);
      this._overlayInstance = null;
    }
  }

  _mountOverlayTarget() {
    if (!this._overlayTarget) {
      this._overlayTarget = document.createElement("div");
      this._portalContainerNode = getContainer(this.props.container);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  }

  _unmountOverlayTarget() {
    if (this._overlayTarget) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
    this._portalContainerNode = null;
  }

  render() {
    return null;
  }
}

function getContainer(container) {
  const _container = typeof container === "function" ? container() : container;
  return ReactDOM.findDOMNode(_container) || document.body;
}

*/

exports.default = Portal;