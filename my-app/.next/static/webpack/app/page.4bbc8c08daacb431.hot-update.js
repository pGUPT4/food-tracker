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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, setFoodObj, setInput, setButtonClicked, buttonClicked } = param;\n    _s();\n    let query = \"\";\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateArr = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const setInput = (q) => {\n    //     input = q\n    //     return input\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodObj(()=>updateArr(foodObj, query));\n        setInput(query);\n        setButtonClicked(true);\n    }, [\n        buttonClicked\n    ]);\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            query = e.target.value;\n                        // console.log(query)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            setFoodObj(()=>updateArr(foodObj, query));\n                            setInput(query);\n                            // console.log(input)\n                            query = \"\";\n                            document.getElementById(\"myInput\").value = \"\";\n                            setButtonClicked(true);\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFaUM7QUFFakMsTUFBTUMsc0JBQXNCO1FBQUMsRUFDekJDLE9BQU8sRUFDUEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLGdCQUFnQixFQUNoQkMsYUFBYSxFQUFDOztJQUVkLElBQUlDLFFBQVE7SUFDWix1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1DLFlBQVksQ0FBQ0MsS0FBS0Y7UUFDcEIsSUFBR0UsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNILFFBQU87Z0JBQzFCRSxHQUFHLENBQUNGLE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNERSxHQUFHLENBQUNGLE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT0U7SUFDWDtJQUVBLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLElBQUk7SUFFSlQsZ0RBQVNBLENBQUM7UUFDTkcsV0FBVyxJQUFNSyxVQUFVTixTQUFTSztRQUNwQ0gsU0FBU0c7UUFDVEYsaUJBQWlCO0lBQ3JCLEdBQUc7UUFBQ0M7S0FBYztJQUdsQixPQUNJLHlDQUF5QztrQkFDekMsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ1osOERBQUNFO3dCQUNHQyxJQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxVQUFZLENBQUNDOzRCQUNUVixRQUFRVSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ3RCLHFCQUFxQjt3QkFDckI7Ozs7OztrQ0FFUiw4REFBQ0M7d0JBQ0dSLFdBQVU7d0JBQ1ZTLE1BQUs7d0JBQ0xDLFNBQVc7NEJBQ1BuQixXQUFXLElBQU1LLFVBQVVOLFNBQVNLOzRCQUNwQ0gsU0FBU0c7NEJBQ1QscUJBQXFCOzRCQUNyQkEsUUFBUTs0QkFDUmdCLFNBQVNDLGNBQWMsQ0FBQyxXQUFXTCxLQUFLLEdBQUc7NEJBQzNDZCxpQkFBaUI7d0JBQ3JCO2tDQUNDOzs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNNO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7R0FsRU1YO0tBQUFBO0FBb0VOLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2Uvc2VhcmNoX2FuZF9zdWdnZXN0aW9ucy9wYWdlLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gPSAoe1xuICAgIGZvb2RPYmosIFxuICAgIHNldEZvb2RPYmosIFxuICAgIHNldElucHV0LCBcbiAgICBzZXRCdXR0b25DbGlja2VkLCBcbiAgICBidXR0b25DbGlja2VkfSkgPT4ge1xuXG4gICAgbGV0IHF1ZXJ5ID0gXCJcIlxuICAgIC8vIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyeSkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gYXJyeS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnJ5LmluZGV4T2YoaXRlbSkgPT0gaW5kZXgpfVxuXG4gICAgY29uc3QgdXBkYXRlQXJyID0gKG9iaiwgcXVlcnkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocXVlcnkpKXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldID0gMVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgICBcbiAgICAvLyBjb25zdCBzZXRJbnB1dCA9IChxKSA9PiB7XG4gICAgLy8gICAgIGlucHV0ID0gcVxuICAgIC8vICAgICByZXR1cm4gaW5wdXRcbiAgICAvLyB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRGb29kT2JqKCgpID0+IHVwZGF0ZUFycihmb29kT2JqLCBxdWVyeSkpXG4gICAgICAgIHNldElucHV0KHF1ZXJ5KVxuICAgICAgICBzZXRCdXR0b25DbGlja2VkKHRydWUpXG4gICAgfSwgW2J1dHRvbkNsaWNrZWRdKVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gU2VhcmNoIGJhciwgYnV0dG9uIHdpdGggc3VnZ2VzdGlvbiBib3hcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC13cmFwIGJveC1ib3JkZXIgYmctZ3JheS01MDAgcm91bmRlZC0yeGwgYm9yZGVyLWdyYXktOTUwIGJvcmRlci1yLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJteUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLTIgdy0xMjAgaC04IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yMCBoLTggYmctd2hpdGUgbS0yIHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9vZE9iaigoKSA9PiB1cGRhdGVBcnIoZm9vZE9iaiwgcXVlcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXQocXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25DbGlja2VkKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRmluZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTQ4IHctMTQ0IG0tMiBiZy1ncmF5LTMwMCBib3JkZXItMSByb3VuZGVkLTJ4bCBiZy1ncmV5LTIwMCc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hBbmRTdWdnZXN0aW9uIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNlYXJjaEFuZFN1Z2dlc3Rpb24iLCJmb29kT2JqIiwic2V0Rm9vZE9iaiIsInNldElucHV0Iiwic2V0QnV0dG9uQ2xpY2tlZCIsImJ1dHRvbkNsaWNrZWQiLCJxdWVyeSIsInVwZGF0ZUFyciIsIm9iaiIsImhhc093blByb3BlcnR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});