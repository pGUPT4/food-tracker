"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/today_page/list/page.js":
/*!*************************************!*\
  !*** ./app/today_page/list/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst FoodList = (param)=>{\n    let { foodObj, validResponse, validResponseF } = param;\n    array.forEach((element)=>{\n        if (validResponse) {\n            console.log(\"bruh\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>{\n            let [food, foodCount] = param;\n            if (validResponse) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl text-center text-white justify-center\",\n                        children: food + \" - \" + foodCount\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                        lineNumber: 15,\n                        columnNumber: 29\n                    }, undefined)\n                }, food, false, {\n                    fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                    lineNumber: 14,\n                    columnNumber: 33\n                }, undefined);\n            }\n            valid;\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFNQSxXQUFXO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRTtJQUV4REMsTUFBTUMsT0FBTyxDQUFDQyxDQUFBQTtRQUNWLElBQUdKLGVBQWM7WUFDYkssUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFUEMsT0FBT0MsT0FBTyxDQUFDWCxTQUFTWSxHQUFHLENBQUMsUUFBb0JDO2dCQUFuQixDQUFDQyxNQUFNQyxVQUFVO1lBQzFDLElBQUdkLGVBQWM7Z0JBQ2IscUJBQVEsOERBQUNPO29CQUFpQkMsV0FBWTs4QkFDbEMsNEVBQUNPO3dCQUFFUCxXQUFVO2tDQUFrREssT0FBTyxRQUFRQzs7Ozs7O21CQUQ5REQ7Ozs7O1lBR3hCO1lBQ0FHO1FBQ1I7Ozs7OztBQUlaO0tBckJNbEI7QUF1Qk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2UvbGlzdC9wYWdlLmpzPzNjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBGb29kTGlzdCA9ICh7IGZvb2RPYmosIHZhbGlkUmVzcG9uc2UsIHZhbGlkUmVzcG9uc2VGIH0pID0+IHtcblxuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmKHZhbGlkUmVzcG9uc2Upe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJicnVoXCIpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTE0MCB3LTE0NCBwLTQgYmctZ3JheS0yMDAgcm91bmRlZC0yeGwgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhmb29kT2JqKS5tYXAoKFtmb29kLCBmb29kQ291bnRdLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbGlkUmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleSA9IHtmb29kfSBjbGFzc05hbWUgPSBcImJveCBib3gtYm9yZGVyIHJvdW5kZWQteGwgaC0zNiBtLTIgYmctY3lhbi01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtM3hsIHRleHQtY2VudGVyIHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXInPntmb29kICsgXCIgLSBcIiArIGZvb2RDb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIkZvb2RMaXN0IiwiZm9vZE9iaiIsInZhbGlkUmVzcG9uc2UiLCJ2YWxpZFJlc3BvbnNlRiIsImFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImkiLCJmb29kIiwiZm9vZENvdW50IiwicCIsInZhbGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});