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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, setFoodObj, input, setInput, setButtonClicked, buttonClicked } = param;\n    let query = \"\";\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateArr = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const setInput = (q) => {\n    //     input = q\n    //     return input\n    // }\n    const handleClick = ()=>{\n        const updatedQuery = query;\n        if (query != \"\") {\n            setFoodObj(()=>updateArr(foodObj, query));\n            setInput(query);\n            setButtonClicked(true);\n            query = \"\";\n            document.getElementById(\"myInput\").value = \"\";\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            query = e.target.value;\n                        // console.log(query)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            handleClick();\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined));\n};\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVpQztBQUVqQyxNQUFNQyxzQkFBc0I7UUFBQyxFQUN6QkMsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFBQztJQUVkLElBQUlDLFFBQVE7SUFDWix1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1DLFlBQVksQ0FBQ0MsS0FBS0Y7UUFDcEIsSUFBR0UsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNILFFBQU87Z0JBQzFCRSxHQUFHLENBQUNGLE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNERSxHQUFHLENBQUNGLE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT0U7SUFDWDtJQUVBLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLElBQUk7SUFFSixNQUFNRSxjQUFjO1FBRWhCLE1BQU1DLGVBQWVMO1FBRXJCLElBQUdBLFNBQVMsSUFBRztZQUNYTCxXQUFXLElBQU1NLFVBQVVQLFNBQVNNO1lBQ3BDSCxTQUFTRztZQUNURixpQkFBaUI7WUFDakJFLFFBQVE7WUFDUk0sU0FBU0MsY0FBYyxDQUFDLFdBQVdDLEtBQUssR0FBRztRQUMvQztJQUNKO0lBR0EsT0FDSSx5Q0FBeUM7a0JBQ3pDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNaLDhEQUFDZDt3QkFDR2dCLElBQUs7d0JBQ0xGLFdBQVU7d0JBQ1ZHLFVBQVksQ0FBQ0M7NEJBQ1RkLFFBQVFjLEVBQUVDLE1BQU0sQ0FBQ1AsS0FBSzt3QkFDdEIscUJBQXFCO3dCQUNyQjs7Ozs7O2tDQUVSLDhEQUFDUTt3QkFDR04sV0FBVTt3QkFDVk8sTUFBSzt3QkFDTEMsU0FBVzs0QkFFUGQ7d0JBQ0o7a0NBQ0M7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQ0s7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUkzQjtLQXRFTWpCO0FBd0VOLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2Uvc2VhcmNoX2FuZF9zdWdnZXN0aW9ucy9wYWdlLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gPSAoe1xuICAgIGZvb2RPYmosIFxuICAgIHNldEZvb2RPYmosXG4gICAgaW5wdXQsIFxuICAgIHNldElucHV0LCBcbiAgICBzZXRCdXR0b25DbGlja2VkLCBcbiAgICBidXR0b25DbGlja2VkfSkgPT4ge1xuXG4gICAgbGV0IHF1ZXJ5ID0gXCJcIlxuICAgIC8vIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyeSkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gYXJyeS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnJ5LmluZGV4T2YoaXRlbSkgPT0gaW5kZXgpfVxuXG4gICAgY29uc3QgdXBkYXRlQXJyID0gKG9iaiwgcXVlcnkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocXVlcnkpKXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldID0gMVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgICBcbiAgICAvLyBjb25zdCBzZXRJbnB1dCA9IChxKSA9PiB7XG4gICAgLy8gICAgIGlucHV0ID0gcVxuICAgIC8vICAgICByZXR1cm4gaW5wdXRcbiAgICAvLyB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB1cGRhdGVkUXVlcnkgPSBxdWVyeVxuICAgICAgICBcbiAgICAgICAgaWYocXVlcnkgIT0gXCJcIil7XG4gICAgICAgICAgICBzZXRGb29kT2JqKCgpID0+IHVwZGF0ZUFycihmb29kT2JqLCBxdWVyeSkpXG4gICAgICAgICAgICBzZXRJbnB1dChxdWVyeSlcbiAgICAgICAgICAgIHNldEJ1dHRvbkNsaWNrZWQodHJ1ZSlcbiAgICAgICAgICAgIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKS52YWx1ZSA9ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBTZWFyY2ggYmFyLCBidXR0b24gd2l0aCBzdWdnZXN0aW9uIGJveFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgYm94LWJvcmRlciBiZy1ncmF5LTUwMCByb3VuZGVkLTJ4bCBib3JkZXItZ3JheS05NTAgYm9yZGVyLXItYmx1ZS02MDAnPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm15SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tMiB3LTEyMCBoLTggcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTIwIGgtOCBiZy13aGl0ZSBtLTIgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGaW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtNDggdy0xNDQgbS0yIGJnLWdyYXktMzAwIGJvcmRlci0xIHJvdW5kZWQtMnhsIGJnLWdyZXktMjAwJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFuZFN1Z2dlc3Rpb24iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsImZvb2RPYmoiLCJzZXRGb29kT2JqIiwiaW5wdXQiLCJzZXRJbnB1dCIsInNldEJ1dHRvbkNsaWNrZWQiLCJidXR0b25DbGlja2VkIiwicXVlcnkiLCJ1cGRhdGVBcnIiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImhhbmRsZUNsaWNrIiwidXBkYXRlZFF1ZXJ5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});