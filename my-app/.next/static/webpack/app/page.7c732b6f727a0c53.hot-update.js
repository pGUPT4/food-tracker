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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst FoodList = (param)=>{\n    let { foodObj, validResponse, validResponseF } = param;\n    array.forEach((element)=>{\n        if (validResponse) {\n            console.log(\"bruh\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>{\n            let [food, foodCount] = param;\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-3xl text-center text-white justify-center\",\n                    children: food + \" - \" + foodCount\n                }, void 0, false, {\n                    fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                    lineNumber: 16,\n                    columnNumber: 25\n                }, undefined)\n            }, food, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 15,\n                columnNumber: 21\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFNQSxXQUFXO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRTtJQUV4REMsTUFBTUMsT0FBTyxDQUFDQyxDQUFBQTtRQUNWLElBQUdKLGVBQWM7WUFDYkssUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFUEMsT0FBT0MsT0FBTyxDQUFDWCxTQUFTWSxHQUFHLENBQUMsUUFBb0JDO2dCQUFuQixDQUFDQyxNQUFNQyxVQUFVOzBCQUcxQyw4REFBQ1A7Z0JBQWlCQyxXQUFZOzBCQUMxQiw0RUFBQ087b0JBQUVQLFdBQVU7OEJBQWtESyxPQUFPLFFBQVFDOzs7Ozs7ZUFEdEVEOzs7OztRQUlwQjs7Ozs7O0FBSVo7S0FyQk1mO0FBdUJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcz8zYzJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgRm9vZExpc3QgPSAoeyBmb29kT2JqLCB2YWxpZFJlc3BvbnNlLCB2YWxpZFJlc3BvbnNlRiB9KSA9PiB7XG5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZih2YWxpZFJlc3BvbnNlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnJ1aFwiKVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1ib3JkZXIgaC0xNDAgdy0xNDQgcC00IGJnLWdyYXktMjAwIHJvdW5kZWQtMnhsIG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZm9vZE9iaikubWFwKChbZm9vZCwgZm9vZENvdW50XSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtmb29kfSBjbGFzc05hbWUgPSBcImJveCBib3gtYm9yZGVyIHJvdW5kZWQteGwgaC0zNiBtLTIgYmctY3lhbi01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlcic+e2Zvb2QgKyBcIiAtIFwiICsgZm9vZENvdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZExpc3QiXSwibmFtZXMiOlsiRm9vZExpc3QiLCJmb29kT2JqIiwidmFsaWRSZXNwb25zZSIsInZhbGlkUmVzcG9uc2VGIiwiYXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaSIsImZvb2QiLCJmb29kQ291bnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});