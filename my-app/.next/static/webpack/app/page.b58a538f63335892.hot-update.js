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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, setFoodObj, input, setInput, setButtonClicked, buttonClicked } = param;\n    let query = \"\";\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateArr = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const setInput = (q) => {\n    //     input = q\n    //     return input\n    // }\n    const handleClick = ()=>{\n        ()=>{\n            setFoodObj(()=>updateArr(foodObj, query));\n            setInput(query);\n            setButtonClicked(true);\n        };\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            query = e.target.value;\n                        // console.log(query)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            setFoodObj(()=>updateArr(foodObj, query));\n                            setInput(query);\n                            // console.log(input)\n                            query = \"\";\n                            document.getElementById(\"myInput\").value = \"\";\n                            setButtonClicked(true);\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined));\n};\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVpQztBQUVqQyxNQUFNQyxzQkFBc0I7UUFBQyxFQUN6QkMsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFBQztJQUVkLElBQUlDLFFBQVE7SUFDWix1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1DLFlBQVksQ0FBQ0MsS0FBS0Y7UUFDcEIsSUFBR0UsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNILFFBQU87Z0JBQzFCRSxHQUFHLENBQUNGLE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNERSxHQUFHLENBQUNGLE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT0U7SUFDWDtJQUVBLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLElBQUk7SUFFSixNQUFNRSxjQUFjO1FBQU07WUFDdEJULFdBQVcsSUFBTU0sVUFBVVAsU0FBU007WUFDcENILFNBQVNHO1lBQ1RGLGlCQUFpQjtRQUNyQjtJQUFDO0lBR0QsT0FDSSx5Q0FBeUM7a0JBQ3pDLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNaLDhEQUFDVjt3QkFDR1ksSUFBSzt3QkFDTEYsV0FBVTt3QkFDVkcsVUFBWSxDQUFDQzs0QkFDVFYsUUFBUVUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUN0QixxQkFBcUI7d0JBQ3JCOzs7Ozs7a0NBRVIsOERBQUNDO3dCQUNHUCxXQUFVO3dCQUNWUSxNQUFLO3dCQUNMQyxTQUFXOzRCQUNQcEIsV0FBVyxJQUFNTSxVQUFVUCxTQUFTTTs0QkFDcENILFNBQVNHOzRCQUNULHFCQUFxQjs0QkFDckJBLFFBQVE7NEJBQ1JnQixTQUFTQyxjQUFjLENBQUMsV0FBV0wsS0FBSyxHQUFHOzRCQUMzQ2QsaUJBQWlCO3dCQUNyQjtrQ0FDQzs7Ozs7Ozs7Ozs7OzBCQUtULDhEQUFDTztnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBSTNCO0tBbkVNYjtBQXFFTiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcz85N2NmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBTZWFyY2hBbmRTdWdnZXN0aW9uID0gKHtcbiAgICBmb29kT2JqLCBcbiAgICBzZXRGb29kT2JqLFxuICAgIGlucHV0LCBcbiAgICBzZXRJbnB1dCwgXG4gICAgc2V0QnV0dG9uQ2xpY2tlZCwgXG4gICAgYnV0dG9uQ2xpY2tlZH0pID0+IHtcblxuICAgIGxldCBxdWVyeSA9IFwiXCJcbiAgICAvLyBjb25zdCByZW1vdmVEdXBsaWNhdGVzID0gKGFycnkpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGFycnkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyeS5pbmRleE9mKGl0ZW0pID09IGluZGV4KX1cblxuICAgIGNvbnN0IHVwZGF0ZUFyciA9IChvYmosIHF1ZXJ5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHF1ZXJ5KSl7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSA9IDFcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG9ialtxdWVyeV0rK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gICAgXG4gICAgLy8gY29uc3Qgc2V0SW5wdXQgPSAocSkgPT4ge1xuICAgIC8vICAgICBpbnB1dCA9IHFcbiAgICAvLyAgICAgcmV0dXJuIGlucHV0XG4gICAgLy8gfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PnsoKSA9PiB7XG4gICAgICAgIHNldEZvb2RPYmooKCkgPT4gdXBkYXRlQXJyKGZvb2RPYmosIHF1ZXJ5KSlcbiAgICAgICAgc2V0SW5wdXQocXVlcnkpXG4gICAgICAgIHNldEJ1dHRvbkNsaWNrZWQodHJ1ZSlcbiAgICB9fVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gU2VhcmNoIGJhciwgYnV0dG9uIHdpdGggc3VnZ2VzdGlvbiBib3hcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC13cmFwIGJveC1ib3JkZXIgYmctZ3JheS01MDAgcm91bmRlZC0yeGwgYm9yZGVyLWdyYXktOTUwIGJvcmRlci1yLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJteUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLTIgdy0xMjAgaC04IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yMCBoLTggYmctd2hpdGUgbS0yIHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9vZE9iaigoKSA9PiB1cGRhdGVBcnIoZm9vZE9iaiwgcXVlcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXQocXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25DbGlja2VkKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRmluZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTQ4IHctMTQ0IG0tMiBiZy1ncmF5LTMwMCBib3JkZXItMSByb3VuZGVkLTJ4bCBiZy1ncmV5LTIwMCc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hBbmRTdWdnZXN0aW9uIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNlYXJjaEFuZFN1Z2dlc3Rpb24iLCJmb29kT2JqIiwic2V0Rm9vZE9iaiIsImlucHV0Iiwic2V0SW5wdXQiLCJzZXRCdXR0b25DbGlja2VkIiwiYnV0dG9uQ2xpY2tlZCIsInF1ZXJ5IiwidXBkYXRlQXJyIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});