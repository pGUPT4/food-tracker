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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, foodObjF, inputF, buttonF, validResponseF } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateObj = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    const handleClick = ()=>{\n        inputF(query);\n        if (query != \" \") {}\n        setQuery(\" \");\n        document.getElementById(\"myInput\").value = \"\";\n        console.log(foodObj);\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleClick();\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            setQuery(e.target.value);\n                        },\n                        onKeyDown: (e)=>handleKeyDown(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"281AlcyTFwVEnG9/wSFf/oqEPpQ=\");\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0M7QUFFaEMsTUFBTUMsc0JBQXNCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUM7O0lBRTdFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyx1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1TLFlBQVksQ0FBQ0MsS0FBS0g7UUFDcEIsSUFBR0csT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNKLFFBQU87Z0JBQzFCRyxHQUFHLENBQUNILE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNERyxHQUFHLENBQUNILE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT0c7SUFDWDtJQUdBLE1BQU1FLGNBQWM7UUFFaEJSLE9BQU9HO1FBRVAsSUFBR0EsU0FBUyxLQUFJLENBRWhCO1FBRUFDLFNBQVM7UUFDVEssU0FBU0MsY0FBYyxDQUFDLFdBQVdDLEtBQUssR0FBRztRQUMzQ0MsUUFBUUMsR0FBRyxDQUFDZjtJQUVoQjtJQUVBLE1BQU1nQixnQkFBZ0IsQ0FBQ0M7UUFDbkIsSUFBR0EsRUFBRUMsR0FBRyxLQUFLLFNBQVE7WUFDakJSO1FBQ0o7SUFDSjtJQUVBLE9BQ0kseUNBQXlDO2tCQUN6Qyw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUFLRCxXQUFVOztrQ0FFWiw4REFBQ0U7d0JBQ0dDLElBQUs7d0JBQ0xILFdBQVU7d0JBQ1ZJLFVBQVksQ0FBQ1A7NEJBQ1RYLFNBQVNXLEVBQUVRLE1BQU0sQ0FBQ1osS0FBSzt3QkFDM0I7d0JBRUFhLFdBQWEsQ0FBQ1QsSUFBTUQsY0FBY0M7Ozs7OztrQ0FFdEMsOERBQUNVO3dCQUNHUCxXQUFVO3dCQUNWUSxNQUFLO3dCQUNMQyxTQUFXbkI7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFNaEMsOERBQUNTO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7R0FsRU1yQjtLQUFBQTtBQW9FTiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcz85N2NmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gPSAoe2Zvb2RPYmosIGZvb2RPYmpGLCBpbnB1dEYsIGJ1dHRvbkYsIHZhbGlkUmVzcG9uc2VGfSkgPT4ge1xuXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIiBcIilcbiAgICAvLyBjb25zdCByZW1vdmVEdXBsaWNhdGVzID0gKGFycnkpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGFycnkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyeS5pbmRleE9mKGl0ZW0pID09IGluZGV4KX1cblxuICAgIGNvbnN0IHVwZGF0ZU9iaiA9IChvYmosIHF1ZXJ5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHF1ZXJ5KSl7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSA9IDFcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG9ialtxdWVyeV0rK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlucHV0RihxdWVyeSlcbiAgICAgICAgXG4gICAgICAgIGlmKHF1ZXJ5ICE9IFwiIFwiKXtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UXVlcnkoXCIgXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUlucHV0JykudmFsdWUgPSAnJ1xuICAgICAgICBjb25zb2xlLmxvZyhmb29kT2JqKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gU2VhcmNoIGJhciwgYnV0dG9uIHdpdGggc3VnZ2VzdGlvbiBib3hcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC13cmFwIGJveC1ib3JkZXIgYmctZ3JheS01MDAgcm91bmRlZC0yeGwgYm9yZGVyLWdyYXktOTUwIGJvcmRlci1yLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwibXlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbS0yIHctMTIwIGgtOCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvbktleURvd24gPSB7KGUpID0+IGhhbmRsZUtleURvd24oZSl9Lz5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yMCBoLTggYmctd2hpdGUgbS0yIHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTQ4IHctMTQ0IG0tMiBiZy1ncmF5LTMwMCBib3JkZXItMSByb3VuZGVkLTJ4bCBiZy1ncmV5LTIwMCc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hBbmRTdWdnZXN0aW9uIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsImZvb2RPYmoiLCJmb29kT2JqRiIsImlucHV0RiIsImJ1dHRvbkYiLCJ2YWxpZFJlc3BvbnNlRiIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1cGRhdGVPYmoiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImhhbmRsZUNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});