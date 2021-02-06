"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _HomeScreen = _interopRequireDefault(require("./src/screens/HomeScreen"));

var _ComponentScreen = _interopRequireDefault(require("./src/screens/ComponentScreen"));

var _ListScreen = _interopRequireDefault(require("./src/screens/ListScreen"));

var _ImageScreen = _interopRequireDefault(require("./src/screens/ImageScreen"));

var _CounterScreen = _interopRequireDefault(require("./src/screens/CounterScreen"));

var _ColorScreen = _interopRequireDefault(require("./src/screens/ColorScreen"));

var _ColorList = _interopRequireDefault(require("./src/screens/ColorList"));

var _ColorModifierList = _interopRequireDefault(require("./src/screens/ColorModifierList"));

var _ColorModifierListRed = _interopRequireDefault(require("./src/screens/ColorModifierListRed"));

var _TextScreen = _interopRequireDefault(require("./src/screens/TextScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var navigator = (0, _reactNavigationStack.createStackNavigator)({
  Home: _HomeScreen["default"],
  Components: _ComponentScreen["default"],
  List: _ListScreen["default"],
  Image: _ImageScreen["default"],
  Counter: _CounterScreen["default"],
  ClrSrc: _ColorScreen["default"],
  ClrList: _ColorList["default"],
  ClrModifierList: _ColorModifierList["default"],
  ClrModListRed: _ColorModifierListRed["default"],
  TxtScreen: _TextScreen["default"]
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
});

var _default = (0, _reactNavigation.createAppContainer)(navigator);

exports["default"] = _default;