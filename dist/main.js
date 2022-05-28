/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/buttons */ \"./src/scripts/buttons.js\");\n/* harmony import */ var _scripts_squat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/squat */ \"./src/scripts/squat.js\");\n/* harmony import */ var _scripts_squat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_squat__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_bench__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/bench */ \"./src/scripts/bench.js\");\n/* harmony import */ var _scripts_deadlift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/deadlift */ \"./src/scripts/deadlift.js\");\n/* harmony import */ var _scripts_deadlift__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_deadlift__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconsole.log(\"webpack is working\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById(\"main-canvas\");\n  canvasEl.width = 1300;\n  canvasEl.height = 1000;\n  var ctx = canvasEl.getContext(\"2d\"); // ctx.fillStyle = \"grey\";\n  // ctx.fillRect(0, 0, 1300, 1000);\n  // const main = document.getElementById(\"main\")\n  // new Bench(main)\n\n  var img = new Image();\n  img.src = \"../src/images/00001.png\";\n\n  img.onload = function () {\n    ctx.drawImage(img, 240, 240);\n  }; // document.getElementById(\"main-canvas\").innerHTML='<img src=\"../src/images/strick_figure.png\" alt=\"sample\"'>;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07RUFFaEQsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBakI7RUFDQUQsUUFBUSxDQUFDRSxLQUFULEdBQWlCLElBQWpCO0VBQ0FGLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixJQUFsQjtFQUVBLElBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDSyxVQUFULENBQW9CLElBQXBCLENBQVosQ0FOZ0QsQ0FPaEQ7RUFDQTtFQUVBO0VBQ0E7O0VBQ0EsSUFBSUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBVjtFQUNBRCxHQUFHLENBQUNFLEdBQUosR0FBVSx5QkFBVjs7RUFDQUYsR0FBRyxDQUFDRyxNQUFKLEdBQWEsWUFBWTtJQUNyQkwsR0FBRyxDQUFDTSxTQUFKLENBQWNKLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEI7RUFDSCxDQUZELENBZGdELENBbUJoRDs7QUFDSCxDQXBCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25zIGZyb20gXCIuL3NjcmlwdHMvYnV0dG9uc1wiXG5pbXBvcnQgU3F1YXQgZnJvbSBcIi4vc2NyaXB0cy9zcXVhdFwiXG5pbXBvcnQgQmVuY2ggZnJvbSBcIi4vc2NyaXB0cy9iZW5jaFwiXG5pbXBvcnQgRGVhZGxpZnQgZnJvbSBcIi4vc2NyaXB0cy9kZWFkbGlmdFwiXG5cbmNvbnNvbGUubG9nKFwid2VicGFjayBpcyB3b3JraW5nXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKTtcbiAgICBjYW52YXNFbC53aWR0aCA9IDEzMDA7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gMTAwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIDEzMDAsIDEwMDApO1xuXG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxuICAgIC8vIG5ldyBCZW5jaChtYWluKVxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzLzAwMDAxLnBuZ1wiXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDI0MCwgMjQwKVxuICAgIH1cblxuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKS5pbm5lckhUTUw9JzxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9zdHJpY2tfZmlndXJlLnBuZ1wiIGFsdD1cInNhbXBsZVwiJz47XG59KTtcbiJdLCJuYW1lcyI6WyJCdXR0b25zIiwiU3F1YXQiLCJCZW5jaCIsIkRlYWRsaWZ0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bench.js":
/*!******************************!*\
  !*** ./src/scripts/bench.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Bench = /*#__PURE__*/function () {\n  function Bench(ele) {\n    _classCallCheck(this, Bench);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>benching</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  _createClass(Bench, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.ele.children[0].innerText = \"Ouch\";\n    }\n  }]);\n\n  return Bench;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bench);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iZW5jaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BO0VBQ0YsZUFBWUMsR0FBWixFQUFpQjtJQUFBOztJQUNiLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQixtQkFBckI7SUFHQSxLQUFLRCxHQUFMLENBQVNFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5DO0VBRUg7Ozs7V0FFRCx1QkFBYztNQUNWLEtBQUtKLEdBQUwsQ0FBU0ssUUFBVCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsR0FBaUMsTUFBakM7SUFDSDs7Ozs7O0FBR0wsK0RBQWVQLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvc2NyaXB0cy9iZW5jaC5qcz80MTMyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJlbmNoIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xyXG4gICAgICAgIHRoaXMuZWxlID0gZWxlXHJcbiAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+YmVuY2hpbmc8L2gxPlwiXHJcblxyXG5cclxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2hcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZW5jaDsiXSwibmFtZXMiOlsiQmVuY2giLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/bench.js\n");

/***/ }),

/***/ "./src/scripts/buttons.js":
/*!********************************!*\
  !*** ./src/scripts/buttons.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttons\": function() { return /* binding */ buttons; }\n/* harmony export */ });\nvar buttons = function buttons() {\n  var exercises = ['squat', 'bench', 'deadlift'];\n\n  for (var i = 0; i < exercises.length; i++) {\n    var button = document.getElementById(exercises[i]);\n    button.addEventListener(\"click\", function () {//problem here\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idXR0b25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0VBQ3pCLElBQUlDLFNBQVMsR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFVBQW5CLENBQWhCOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFRCxTQUFTLENBQUNFLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0lBQ3BDLElBQUlFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCTCxTQUFTLENBQUNDLENBQUQsQ0FBakMsQ0FBYjtJQUVBRSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU0sQ0FDbkM7SUFFSCxDQUhEO0VBSUg7QUFDSixDQVZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvYnV0dG9ucy5qcz9jNDFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXhlcmNpc2VzID0gWydzcXVhdCcsICdiZW5jaCcsICdkZWFkbGlmdCddXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGV4ZXJjaXNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChleGVyY2lzZXNbaV0pXHJcblxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL3Byb2JsZW0gaGVyZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImJ1dHRvbnMiLCJleGVyY2lzZXMiLCJpIiwibGVuZ3RoIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/buttons.js\n");

/***/ }),

/***/ "./src/scripts/deadlift.js":
/*!*********************************!*\
  !*** ./src/scripts/deadlift.js ***!
  \*********************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kZWFkbGlmdC5qcy5qcyIsIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2RlYWRsaWZ0LmpzP2YyOTYiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/deadlift.js\n");

/***/ }),

/***/ "./src/scripts/squat.js":
/*!******************************!*\
  !*** ./src/scripts/squat.js ***!
  \******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcXVhdC5qcy5qcyIsIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL3NxdWF0LmpzP2I3ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/squat.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;