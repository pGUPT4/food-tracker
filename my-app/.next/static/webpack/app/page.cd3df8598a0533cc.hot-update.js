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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, foodObjF, inputF, buttonF } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateObj = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    const handleClick = ()=>{\n        foodObjF(updateObj(foodObj, query));\n        buttonF(true);\n        setQuery(\" \");\n        document.getElementById(\"myInput\").value = \"\";\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            inputF(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            handleClick;\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"281AlcyTFwVEnG9/wSFf/oqEPpQ=\");\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0M7QUFFaEMsTUFBTUMsc0JBQXNCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFDOztJQUU3RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLHdFQUF3RTtJQUV4RSxNQUFNUSxZQUFZLENBQUNDLEtBQUtIO1FBQ3BCLElBQUdHLE9BQU8sT0FBT0EsUUFBUSxVQUFTO1lBQzlCLElBQUcsQ0FBQ0EsSUFBSUMsY0FBYyxDQUFDSixRQUFPO2dCQUMxQkcsR0FBRyxDQUFDSCxNQUFNLEdBQUc7WUFDakIsT0FBSztnQkFDREcsR0FBRyxDQUFDSCxNQUFNO1lBQ2Q7UUFDSjtRQUNBLE9BQU9HO0lBQ1g7SUFHQSxNQUFNRSxjQUFjO1FBRWhCUixTQUFTSyxVQUFVTixTQUFTSTtRQUM1QkQsUUFBUTtRQUNSRSxTQUFTO1FBQ1RLLFNBQVNDLGNBQWMsQ0FBQyxXQUFXQyxLQUFLLEdBQUc7SUFFL0M7SUFFQSxPQUNJLHlDQUF5QztrQkFDekMsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ1osOERBQUNFO3dCQUNHQyxJQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxVQUFZLENBQUNDOzRCQUNUakIsT0FBT2lCLEVBQUVDLE1BQU0sQ0FBQ1IsS0FBSzt3QkFDekI7Ozs7OztrQ0FFSiw4REFBQ1M7d0JBQ0dQLFdBQVU7d0JBQ1ZRLE1BQUs7d0JBQ0xDLFNBQVc7NEJBQ1BkO3dCQUNKO2tDQUNDOzs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNJO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7R0FyRE1mO0tBQUFBO0FBdUROLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2Uvc2VhcmNoX2FuZF9zdWdnZXN0aW9ucy9wYWdlLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgU2VhcmNoQW5kU3VnZ2VzdGlvbiA9ICh7Zm9vZE9iaiwgZm9vZE9iakYsIGlucHV0RiwgYnV0dG9uRn0pID0+IHtcblxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCIgXCIpXG4gICAgLy8gY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IChhcnJ5KSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBhcnJ5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFycnkuaW5kZXhPZihpdGVtKSA9PSBpbmRleCl9XG5cbiAgICBjb25zdCB1cGRhdGVPYmogPSAob2JqLCBxdWVyeSkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShxdWVyeSkpe1xuICAgICAgICAgICAgICAgIG9ialtxdWVyeV0gPSAxXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuIFxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBmb29kT2JqRih1cGRhdGVPYmooZm9vZE9iaiwgcXVlcnkpKVxuICAgICAgICBidXR0b25GKHRydWUpXG4gICAgICAgIHNldFF1ZXJ5KFwiIFwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlJbnB1dCcpLnZhbHVlID0gJydcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gU2VhcmNoIGJhciwgYnV0dG9uIHdpdGggc3VnZ2VzdGlvbiBib3hcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC13cmFwIGJveC1ib3JkZXIgYmctZ3JheS01MDAgcm91bmRlZC0yeGwgYm9yZGVyLWdyYXktOTUwIGJvcmRlci1yLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJteUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLTIgdy0xMjAgaC04IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEYoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTIwIGgtOCBiZy13aGl0ZSBtLTIgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEZpbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1ib3JkZXIgaC00OCB3LTE0NCBtLTIgYmctZ3JheS0zMDAgYm9yZGVyLTEgcm91bmRlZC0yeGwgYmctZ3JleS0yMDAnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQW5kU3VnZ2VzdGlvbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNlYXJjaEFuZFN1Z2dlc3Rpb24iLCJmb29kT2JqIiwiZm9vZE9iakYiLCJpbnB1dEYiLCJidXR0b25GIiwicXVlcnkiLCJzZXRRdWVyeSIsInVwZGF0ZU9iaiIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaGFuZGxlQ2xpY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});