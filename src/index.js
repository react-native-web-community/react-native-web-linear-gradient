"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var _ref$start = _ref.start,
      start = _ref$start === void 0 ? {
    x: 0.5,
    y: 0
  } : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === void 0 ? {
    x: 0.5,
    y: 1
  } : _ref$end,
      _ref$locations = _ref.locations,
      locations = _ref$locations === void 0 ? [] : _ref$locations,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? [] : _ref$colors,
      style = _ref.style,
      children = _ref.children,
      className = _ref.className;

  var _useState = (0, _react.useState)({
    width: 1,
    height: 1
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var measure = function measure(nativeEvent) {
    console.log(nativeEvent);
    setState({
      width: nativeEvent.layout.width,
      height: nativeEvent.layout.height
    });
  };

  var getAngle = function getAngle() {
    var angle = Math.atan2(state.width * (end.y - start.y), state.height * (end.x - start.x)) + Math.PI / 2;
    return angle + 'rad';
  };

  var getColors = function getColors() {
    return colors.map(function (color, index) {
      var location = locations[index];
      var locationStyle = '';

      if (location) {
        locationStyle = ' ' + location * 100 + '%';
      }

      return color + locationStyle;
    }).join(',');
  };
  
  return _react.default.createElement(_reactNative.View, {
    className,
    style: {
      ...style, 
      backgroundImage: 'linear-gradient(' + getAngle() + ',' + getColors() + ')'
    },
    onLayout: e=> measure(e)
  }, children);
};

exports.default = _default;
