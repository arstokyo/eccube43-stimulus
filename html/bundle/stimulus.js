(self["webpackChunkeccube"] = self["webpackChunkeccube"] || []).push([["stimulus"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.ts": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.ts",
	"./made-with-love_controller.tsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/made-with-love_controller.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./node_modules/@symfony/ux-live-component/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./node_modules/@symfony/ux-live-component/dist/live.min.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.ts":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es6.object.get-prototype-of.js */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es6.reflect.construct.js */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var stimulus_1 = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var default_1 = /*#__PURE__*/function (_stimulus_1$Controlle) {
  function default_1() {
    _classCallCheck(this, default_1);
    return _callSuper(this, default_1, arguments);
  }
  _inherits(default_1, _stimulus_1$Controlle);
  return _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(stimulus_1.Controller);
exports["default"] = default_1;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/made-with-love_controller.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/made-with-love_controller.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es6.object.get-prototype-of.js */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es6.reflect.construct.js */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var stimulus_1 = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
var MadeWithLove_1 = __importDefault(__webpack_require__(/*! ../components/MadeWithLove */ "./assets/components/MadeWithLove.tsx"));
var client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
var default_1 = /*#__PURE__*/function (_stimulus_1$Controlle) {
  function default_1() {
    _classCallCheck(this, default_1);
    return _callSuper(this, default_1, arguments);
  }
  _inherits(default_1, _stimulus_1$Controlle);
  return _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      client_1.default.createRoot(this.element).render((0, jsx_runtime_1.jsx)(MadeWithLove_1.default, {}));
    }
  }]);
}(stimulus_1.Controller);
exports["default"] = default_1;

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/MadeWithLove.tsx":
/*!********************************************!*\
  !*** ./assets/components/MadeWithLove.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es6.string.repeat.js */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function MadeWithLove() {
  var _ref = (0, react_1.useState)(1),
    _ref2 = _slicedToArray(_ref, 2),
    heart = _ref2[0],
    setHeart = _ref2[1];
  var incrementHeart = function incrementHeart() {
    return setHeart(function (prevHeart) {
      return prevHeart + 1;
    });
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    children: [(0, jsx_runtime_1.jsx)("span", {
      children: "Build with "
    }), (0, jsx_runtime_1.jsx)("span", {
      onClick: incrementHeart,
      children: '❤️'.repeat(heart)
    })]
  });
}
exports["default"] = MadeWithLove;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es6_a-3c42a6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtJQUFBLE9BQVNELFFBQVEsQ0FBQyxVQUFDRSxTQUFTO01BQUEsT0FBS0EsU0FBUyxHQUFHLENBQUM7SUFBQSxFQUFDO0VBQUE7RUFDbkUsT0FBUSxDQUFDLENBQUMsRUFBRTNDLGFBQWEsQ0FBQzRDLElBQUksRUFBRSxLQUFLLEVBQUU7SUFBRUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU3QyxhQUFhLENBQUNLLEdBQUcsRUFBRSxNQUFNLEVBQUU7TUFBRXdDLFFBQVEsRUFBRTtJQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFN0MsYUFBYSxDQUFDSyxHQUFHLEVBQUUsTUFBTSxFQUFFO01BQUV5QyxPQUFPLEVBQUVKLGNBQWM7TUFBRUcsUUFBUSxFQUFFLElBQUksQ0FBQ0UsTUFBTSxDQUFDUCxLQUFLO0lBQUUsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQ2xOO0FBQ0FyRCxrQkFBZSxHQUFHaUQsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2VjY3ViZS8gXFwuW2p0XXN4Iiwid2VicGFjazovL2VjY3ViZS8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovL2VjY3ViZS8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLnRzIiwid2VicGFjazovL2VjY3ViZS8uL2Fzc2V0cy9jb250cm9sbGVycy9tYWRlLXdpdGgtbG92ZV9jb250cm9sbGVyLnRzeCIsIndlYnBhY2s6Ly9lY2N1YmUvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL2VjY3ViZS8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vZWNjdWJlLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFkZVdpdGhMb3ZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci50c1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIudHNcIixcblx0XCIuL21hZGUtd2l0aC1sb3ZlX2NvbnRyb2xsZXIudHN4XCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbWFkZS13aXRoLWxvdmVfY29udHJvbGxlci50c3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzJztcbmltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlLm1pbi5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdGltdWx1c18xID0gcmVxdWlyZShcIkBob3R3aXJlZC9zdGltdWx1c1wiKTtcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBzdGltdWx1c18xLkNvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3Qgc3RpbXVsdXNfMSA9IHJlcXVpcmUoXCJAaG90d2lyZWQvc3RpbXVsdXNcIik7XG5jb25zdCBNYWRlV2l0aExvdmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9NYWRlV2l0aExvdmVcIikpO1xuY29uc3QgY2xpZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbS9jbGllbnRcIikpO1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgc3RpbXVsdXNfMS5Db250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjbGllbnRfMS5kZWZhdWx0LmNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KS5yZW5kZXIoKDAsIGpzeF9ydW50aW1lXzEuanN4KShNYWRlV2l0aExvdmVfMS5kZWZhdWx0LCB7fSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG4vLyBpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuZnVuY3Rpb24gTWFkZVdpdGhMb3ZlKCkge1xuICAgIGNvbnN0IFtoZWFydCwgc2V0SGVhcnRdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKDEpO1xuICAgIGNvbnN0IGluY3JlbWVudEhlYXJ0ID0gKCkgPT4gc2V0SGVhcnQoKHByZXZIZWFydCkgPT4gcHJldkhlYXJ0ICsgMSk7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgeyBjaGlsZHJlbjogXCJCdWlsZCB3aXRoIFwiIH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCB7IG9uQ2xpY2s6IGluY3JlbWVudEhlYXJ0LCBjaGlsZHJlbjogJ+KdpO+4jycucmVwZWF0KGhlYXJ0KSB9KV0gfSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFkZVdpdGhMb3ZlO1xuIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInJlcXVpcmUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInQiLCJfdG9QcmltaXRpdmUiLCJyIiwiZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJzZWxmIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsInZhbHVlIiwiX3NldFByb3RvdHlwZU9mIiwicCIsImV4cG9ydHMiLCJzdGltdWx1c18xIiwiZGVmYXVsdF8xIiwiX3N0aW11bHVzXzEkQ29udHJvbGxlIiwiYXJndW1lbnRzIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIkNvbnRyb2xsZXIiLCJkZWZhdWx0IiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImpzeF9ydW50aW1lXzEiLCJNYWRlV2l0aExvdmVfMSIsImNsaWVudF8xIiwiY3JlYXRlUm9vdCIsInJlbmRlciIsImpzeCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJzbGljZSIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsImwiLCJ1IiwiYSIsImYiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJyZXR1cm4iLCJpc0FycmF5IiwicmVhY3RfMSIsIk1hZGVXaXRoTG92ZSIsIl9yZWYiLCJ1c2VTdGF0ZSIsIl9yZWYyIiwiaGVhcnQiLCJzZXRIZWFydCIsImluY3JlbWVudEhlYXJ0IiwicHJldkhlYXJ0IiwianN4cyIsImNoaWxkcmVuIiwib25DbGljayIsInJlcGVhdCJdLCJzb3VyY2VSb290IjoiIn0=