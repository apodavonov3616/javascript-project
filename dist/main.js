/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_bench__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/bench */ \"./src/scripts/bench.js\");\n\nconsole.log(\"webpack is working\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById(\"main-canvas\");\n  canvasEl.width = 600;\n  canvasEl.height = 800;\n  var ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, 600, 800);\n  var main = document.getElementById(\"main\");\n  new _scripts_bench__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0VBRWhELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWpCO0VBQ0FELFFBQVEsQ0FBQ0UsS0FBVCxHQUFpQixHQUFqQjtFQUNBRixRQUFRLENBQUNHLE1BQVQsR0FBa0IsR0FBbEI7RUFFQSxJQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQixJQUFwQixDQUFaO0VBQ0FELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixNQUFoQjtFQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCO0VBRUEsSUFBTUMsSUFBSSxHQUFHVixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtFQUNBLElBQUlOLHNEQUFKLENBQVVhLElBQVY7QUFDSCxDQVpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJlbmNoIGZyb20gXCIuL3NjcmlwdHMvYmVuY2hcIlxuXG5jb25zb2xlLmxvZyhcIndlYnBhY2sgaXMgd29ya2luZ1wiKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jYW52YXNcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSA2MDA7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gODAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNjAwLCA4MDApO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxuICAgIG5ldyBCZW5jaChtYWluKVxufSk7XG4iXSwibmFtZXMiOlsiQmVuY2giLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bench.js":
/*!******************************!*\
  !*** ./src/scripts/bench.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Bench = /*#__PURE__*/function () {\n  function Bench(ele) {\n    _classCallCheck(this, Bench);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>benching</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  _createClass(Bench, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.ele.children[0].innerText = \"Ouch\";\n    }\n  }]);\n\n  return Bench;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bench);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iZW5jaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BO0VBQ0YsZUFBWUMsR0FBWixFQUFpQjtJQUFBOztJQUNiLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQixtQkFBckI7SUFHQSxLQUFLRCxHQUFMLENBQVNFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5DO0VBRUg7Ozs7V0FFRCx1QkFBYztNQUNWLEtBQUtKLEdBQUwsQ0FBU0ssUUFBVCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsR0FBaUMsTUFBakM7SUFDSDs7Ozs7O0FBR0wsK0RBQWVQLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvc2NyaXB0cy9iZW5jaC5qcz80MTMyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJlbmNoIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xyXG4gICAgICAgIHRoaXMuZWxlID0gZWxlXHJcbiAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+YmVuY2hpbmc8L2gxPlwiXHJcblxyXG5cclxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2hcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZW5jaDsiXSwibmFtZXMiOlsiQmVuY2giLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/bench.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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