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

/***/ "(app-pages-browser)/./app/today_page/search_and_suggestions/page.js":
/*!*******************************************************!*\
  !*** ./app/today_page/search_and_suggestions/page.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst SearchAndSuggestion = (param)=>{\n    let { foodObj } = param;\n    let query = \"\";\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateArr = (obj, query)=>{\n        if (typeof obj === \"object\" && Object.keys(obj).length == 0) {\n            obj[query] = 1;\n        }\n        if (query in obj) {\n            obj[query]++;\n        } else {\n            obj[query] = 1;\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            query = e.target.value;\n                            console.log(query);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            foodObj = updateArr(foodObj, query);\n                            query = \"\";\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\",\n                children: \"Suggestion Box\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined));\n};\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFNQSxzQkFBc0I7UUFBQyxFQUFDQyxPQUFPLEVBQUM7SUFDbEMsSUFBSUMsUUFBUTtJQUNaLHVDQUF1QztJQUN2Qyx3RUFBd0U7SUFFeEUsTUFBTUMsWUFBWSxDQUFDQyxLQUFLRjtRQUNwQixJQUFHLE9BQU9FLFFBQVEsWUFBWUMsT0FBT0MsSUFBSSxDQUFDRixLQUFLRyxNQUFNLElBQUksR0FBRTtZQUN2REgsR0FBRyxDQUFDRixNQUFNLEdBQUc7UUFDakI7UUFFQSxJQUFHQSxTQUFTRSxLQUFJO1lBQ1pBLEdBQUcsQ0FBQ0YsTUFBTTtRQUNkLE9BQUs7WUFDREUsR0FBRyxDQUFDRixNQUFNLEdBQUc7UUFDakI7SUFDSjtJQUdBLE9BQ0kseUNBQXlDO2tCQUN6Qyw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFLRCxXQUFVOztrQ0FDWiw4REFBQ0U7d0JBQ0dGLFdBQVU7d0JBQ1ZHLFVBQVksQ0FBQ0M7NEJBQ1RYLFFBQVFXLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDdEJDLFFBQVFDLEdBQUcsQ0FBQ2Y7d0JBQ1o7Ozs7OztrQ0FFUiw4REFBQ2dCO3dCQUNHVCxXQUFVO3dCQUNWVSxNQUFLO3dCQUNMQyxTQUFXOzRCQUNQbkIsVUFBVUUsVUFBVUYsU0FBU0M7NEJBQzdCQSxRQUFRO3dCQUNaO2tDQU9DOzs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNNO2dCQUFJQyxXQUFVOzBCQUF5RTs7Ozs7Ozs7Ozs7O0FBS3BHO0tBcERNVDtBQXNETiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcz85N2NmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuY29uc3QgU2VhcmNoQW5kU3VnZ2VzdGlvbiA9ICh7Zm9vZE9ian0pID0+IHtcbiAgICBsZXQgcXVlcnkgPSBcIlwiXG4gICAgLy8gY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IChhcnJ5KSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBhcnJ5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFycnkuaW5kZXhPZihpdGVtKSA9PSBpbmRleCl9XG5cbiAgICBjb25zdCB1cGRhdGVBcnIgPSAob2JqLCBxdWVyeSkgPT4ge1xuICAgICAgICBpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIG9ialtxdWVyeV0gPSAxXG4gICAgICAgIH1cblxuICAgICAgICBpZihxdWVyeSBpbiBvYmope1xuICAgICAgICAgICAgb2JqW3F1ZXJ5XSsrXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb2JqW3F1ZXJ5XSA9IDFcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIFNlYXJjaCBiYXIsIGJ1dHRvbiB3aXRoIHN1Z2dlc3Rpb24gYm94XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBib3gtYm9yZGVyIGJnLWdyYXktNTAwIHJvdW5kZWQtMnhsIGJvcmRlci1ncmF5LTk1MCBib3JkZXItci1ibHVlLTYwMCc+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tMiB3LTEyMCBoLTggcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTIwIGgtOCBiZy13aGl0ZSBtLTIgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb29kT2JqID0gdXBkYXRlQXJyKGZvb2RPYmosIHF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWRkSXRlbShxdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGaW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtNDggdy0xNDQgbS0yIGJnLWdyYXktMzAwIGJvcmRlci0xIHJvdW5kZWQtMnhsIGJnLWdyZXktMjAwJz5cbiAgICAgICAgICAgICAgICAgICAgU3VnZ2VzdGlvbiBCb3hcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFuZFN1Z2dlc3Rpb24iXSwibmFtZXMiOlsiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsImZvb2RPYmoiLCJxdWVyeSIsInVwZGF0ZUFyciIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});