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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, setFoodObj, input, setInput, setButtonClicked, buttonClicked } = param;\n    let query = \"\";\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateArr = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const setInput = (q) => {\n    //     input = q\n    //     return input\n    // }\n    const handleClick = ()=>{\n        const updatedQuery = query;\n        if (updatedQuery) {\n            setFoodObj(()=>updateArr(foodObj, query));\n            setInput(query);\n            setButtonClicked(true);\n            query = \"\";\n            document.getElementById(\"myInput\").value = \"\";\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            query = e.target.value;\n                        // console.log(query)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            setFoodObj(()=>updateArr(foodObj, query));\n                            setInput(query);\n                            // console.log(input)\n                            query = \"\";\n                            document.getElementById(\"myInput\").value = \"\";\n                            setButtonClicked(true);\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined));\n};\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVpQztBQUVqQyxNQUFNQyxzQkFBc0I7UUFBQyxFQUN6QkMsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFBQztJQUVkLElBQUlDLFFBQVE7SUFDWix1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1DLFlBQVksQ0FBQ0MsS0FBS0Y7UUFDcEIsSUFBR0UsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNILFFBQU87Z0JBQzFCRSxHQUFHLENBQUNGLE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNERSxHQUFHLENBQUNGLE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT0U7SUFDWDtJQUVBLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLElBQUk7SUFFSixNQUFNRSxjQUFjO1FBRWhCLE1BQU1DLGVBQWVMO1FBRXJCLElBQUdLLGNBQWE7WUFDWlYsV0FBVyxJQUFNTSxVQUFVUCxTQUFTTTtZQUNwQ0gsU0FBU0c7WUFDVEYsaUJBQWlCO1lBQ2pCRSxRQUFRO1lBQ1JNLFNBQVNDLGNBQWMsQ0FBQyxXQUFXQyxLQUFLLEdBQUc7UUFDL0M7SUFDSjtJQUdBLE9BQ0kseUNBQXlDO2tCQUN6Qyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFLRCxXQUFVOztrQ0FDWiw4REFBQ2Q7d0JBQ0dnQixJQUFLO3dCQUNMRixXQUFVO3dCQUNWRyxVQUFZLENBQUNDOzRCQUNUZCxRQUFRYyxFQUFFQyxNQUFNLENBQUNQLEtBQUs7d0JBQ3RCLHFCQUFxQjt3QkFDckI7Ozs7OztrQ0FFUiw4REFBQ1E7d0JBQ0dOLFdBQVU7d0JBQ1ZPLE1BQUs7d0JBQ0xDLFNBQVc7NEJBQ1B2QixXQUFXLElBQU1NLFVBQVVQLFNBQVNNOzRCQUNwQ0gsU0FBU0c7NEJBQ1QscUJBQXFCOzRCQUNyQkEsUUFBUTs0QkFDUk0sU0FBU0MsY0FBYyxDQUFDLFdBQVdDLEtBQUssR0FBRzs0QkFDM0NWLGlCQUFpQjt3QkFDckI7a0NBQ0M7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQ1c7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUkzQjtLQTFFTWpCO0FBNEVOLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2Uvc2VhcmNoX2FuZF9zdWdnZXN0aW9ucy9wYWdlLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gPSAoe1xuICAgIGZvb2RPYmosIFxuICAgIHNldEZvb2RPYmosXG4gICAgaW5wdXQsIFxuICAgIHNldElucHV0LCBcbiAgICBzZXRCdXR0b25DbGlja2VkLCBcbiAgICBidXR0b25DbGlja2VkfSkgPT4ge1xuXG4gICAgbGV0IHF1ZXJ5ID0gXCJcIlxuICAgIC8vIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyeSkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gYXJyeS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnJ5LmluZGV4T2YoaXRlbSkgPT0gaW5kZXgpfVxuXG4gICAgY29uc3QgdXBkYXRlQXJyID0gKG9iaiwgcXVlcnkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocXVlcnkpKXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldID0gMVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgICBcbiAgICAvLyBjb25zdCBzZXRJbnB1dCA9IChxKSA9PiB7XG4gICAgLy8gICAgIGlucHV0ID0gcVxuICAgIC8vICAgICByZXR1cm4gaW5wdXRcbiAgICAvLyB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB1cGRhdGVkUXVlcnkgPSBxdWVyeVxuICAgICAgICBcbiAgICAgICAgaWYodXBkYXRlZFF1ZXJ5KXtcbiAgICAgICAgICAgIHNldEZvb2RPYmooKCkgPT4gdXBkYXRlQXJyKGZvb2RPYmosIHF1ZXJ5KSlcbiAgICAgICAgICAgIHNldElucHV0KHF1ZXJ5KVxuICAgICAgICAgICAgc2V0QnV0dG9uQ2xpY2tlZCh0cnVlKVxuICAgICAgICAgICAgcXVlcnkgPSBcIlwiXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlJbnB1dCcpLnZhbHVlID0gJydcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIFNlYXJjaCBiYXIsIGJ1dHRvbiB3aXRoIHN1Z2dlc3Rpb24gYm94XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBib3gtYm9yZGVyIGJnLWdyYXktNTAwIHJvdW5kZWQtMnhsIGJvcmRlci1ncmF5LTk1MCBib3JkZXItci1ibHVlLTYwMCc+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwibXlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbS0yIHctMTIwIGgtOCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMjAgaC04IGJnLXdoaXRlIG0tMiByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvb2RPYmooKCkgPT4gdXBkYXRlQXJyKGZvb2RPYmosIHF1ZXJ5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0KHF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUlucHV0JykudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uQ2xpY2tlZCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEZpbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1ib3JkZXIgaC00OCB3LTE0NCBtLTIgYmctZ3JheS0zMDAgYm9yZGVyLTEgcm91bmRlZC0yeGwgYmctZ3JleS0yMDAnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQW5kU3VnZ2VzdGlvbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJTZWFyY2hBbmRTdWdnZXN0aW9uIiwiZm9vZE9iaiIsInNldEZvb2RPYmoiLCJpbnB1dCIsInNldElucHV0Iiwic2V0QnV0dG9uQ2xpY2tlZCIsImJ1dHRvbkNsaWNrZWQiLCJxdWVyeSIsInVwZGF0ZUFyciIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaGFuZGxlQ2xpY2siLCJ1cGRhdGVkUXVlcnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});