/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index.js */ \"./modules/index.js\");\n\n\nlet dog = {\n  name: '犬',\n  age: 2,\n};\nlet cat = {\n  name: '猫',\n};\n\n//has\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"has\"](dog, 'name'));\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"has\"](dog, 'gender'));\n//size\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"size\"](dog));\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"size\"](cat));\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"size\"]());\n//toMap\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"toMap\"](dog));\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"toMap\"](cat));\nconsole.log(_modules_index_js__WEBPACK_IMPORTED_MODULE_0__[\"toMap\"]());\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/_has.js":
/*!*************************!*\
  !*** ./modules/_has.js ***!
  \*************************/
/*! exports provided: has */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return has; });\nfunction has(obj, key) {\n  if (obj === undefined || obj === null) return false;\n  return obj.hasOwnProperty(key);\n}\n\n\n//# sourceURL=webpack:///./modules/_has.js?");

/***/ }),

/***/ "./modules/_size.js":
/*!**************************!*\
  !*** ./modules/_size.js ***!
  \**************************/
/*! exports provided: size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"size\", function() { return size; });\nfunction size(obj) {\n  if (obj === undefined || obj === null) return 0;\n  return Object.keys(obj).length;\n}\n\n\n//# sourceURL=webpack:///./modules/_size.js?");

/***/ }),

/***/ "./modules/_toMap.js":
/*!***************************!*\
  !*** ./modules/_toMap.js ***!
  \***************************/
/*! exports provided: toMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toMap\", function() { return toMap; });\nfunction toMap(obj) {\n  if (obj === undefined || obj === null) return false;\n  const map = new Map();\n  let keys = Object.keys(obj);\n  for (let i = 0; i < keys.length; i++) {\n    let value = obj[keys[i]];\n    map.set(keys[i], value);\n  }\n  return map;\n}\n\n\n//# sourceURL=webpack:///./modules/_toMap.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! exports provided: has, size, toMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ \"./modules/_has.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return _has_js__WEBPACK_IMPORTED_MODULE_0__[\"has\"]; });\n\n/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_size.js */ \"./modules/_size.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"size\", function() { return _size_js__WEBPACK_IMPORTED_MODULE_1__[\"size\"]; });\n\n/* harmony import */ var _toMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toMap.js */ \"./modules/_toMap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toMap\", function() { return _toMap_js__WEBPACK_IMPORTED_MODULE_2__[\"toMap\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ })

/******/ });