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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _today_page_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today_page/list/page */ \"(app-pages-browser)/./app/today_page/list/page.js\");\n/* harmony import */ var _today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today_page/nutrition_table/page */ \"(app-pages-browser)/./app/today_page/nutrition_table/page.js\");\n/* harmony import */ var _today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today_page/search_and_suggestions/page */ \"(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [foodObj, setFoodObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [buttonClicked, setButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const buttonF = (value1)=>{\n        setButtonClicked(value1);\n    };\n    const inputF = ()=>{\n        setInput(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-row overflow:hidden items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_list_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                foodObj: foodObj,\n                input: input,\n                buttonClicked: buttonClicked\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col m-4 border-blue-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        foodObj: foodObj,\n                        setFoodObj: setFoodObj,\n                        input: input,\n                        setInput: setInput,\n                        setButtonClicked: setButtonClicked,\n                        buttonClicked: buttonClicked\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"AWqgdkiBrK4rx/6SCHCThUJy740=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxQztBQUNTO0FBQ2lCO0FBQ1k7QUFFNUQsU0FBU0s7O0lBRXBCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNVyxVQUFVLENBQUNDO1FBQ2JGLGlCQUFpQkU7SUFDckI7SUFFQSxNQUFNQyxTQUFTO1FBQ1hMLFNBQVNJO0lBQ2I7SUFHSixxQkFDSSw4REFBQ0U7UUFBS0MsV0FBVTs7MEJBRVosOERBQUNkLDZEQUFRQTtnQkFBQ0ksU0FBU0E7Z0JBQVNFLE9BQVFBO2dCQUFPRSxlQUFpQkE7Ozs7OzswQkFHNUQsOERBQUNPO2dCQUFJRCxXQUFVOztrQ0FFWCw4REFBQ1osK0VBQW1CQTt3QkFBQ0UsU0FBVUE7d0JBQVNDLFlBQVlBO3dCQUFZQyxPQUFRQTt3QkFBT0MsVUFBWUE7d0JBQVVFLGtCQUFvQkE7d0JBQWtCRCxlQUFlQTs7Ozs7O2tDQUcxSiw4REFBQ1Asd0VBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtHQTlCd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vZExpc3QgZnJvbSBcIi4vdG9kYXlfcGFnZS9saXN0L3BhZ2VcIjtcbmltcG9ydCBOdXRyaXRpb25UYWJsZSBmcm9tIFwiLi90b2RheV9wYWdlL251dHJpdGlvbl90YWJsZS9wYWdlXCI7XG5pbXBvcnQgU2VhcmNoQW5kU3VnZ2VzdGlvbiBmcm9tIFwiLi90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgY29uc3QgW2Zvb2RPYmosIHNldEZvb2RPYmpdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2J1dHRvbkNsaWNrZWQsIHNldEJ1dHRvbkNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbkYgPSAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0QnV0dG9uQ2xpY2tlZCh2YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEYgPSAoKSA9PiB7XG4gICAgICAgIHNldElucHV0KHZhbHVlKVxuICAgIH1cblxuXG5yZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgb3ZlcmZsb3c6aGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgICB7LypsZWZ0IHNpZGUgKi99XG4gICAgICAgIDxGb29kTGlzdCBmb29kT2JqPXtmb29kT2JqfSBpbnB1dD0ge2lucHV0fSBidXR0b25DbGlja2VkID0ge2J1dHRvbkNsaWNrZWR9Lz5cbiAgICAgICAgXG4gICAgICAgIHsvKiByaWdodCBzaWRlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtLTQgYm9yZGVyLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIHsvKiByaWdodCBzaWRlIHVwcGVyIGhhbGYqL31cbiAgICAgICAgICAgIDxTZWFyY2hBbmRTdWdnZXN0aW9uIGZvb2RPYmo9IHtmb29kT2JqfSBzZXRGb29kT2JqPXtzZXRGb29kT2JqfSBpbnB1dCA9e2lucHV0fSBzZXRJbnB1dCA9IHtzZXRJbnB1dH0gc2V0QnV0dG9uQ2xpY2tlZCA9IHtzZXRCdXR0b25DbGlja2VkfSBidXR0b25DbGlja2VkPXtidXR0b25DbGlja2VkfS8+XG5cbiAgICAgICAgICAgIHsvKiByaWdodCBzaWRlIGxvd2VyIGhhbGYqL31cbiAgICAgICAgICAgIDxOdXRyaXRpb25UYWJsZS8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvb2RMaXN0IiwiTnV0cml0aW9uVGFibGUiLCJTZWFyY2hBbmRTdWdnZXN0aW9uIiwiSG9tZSIsImZvb2RPYmoiLCJzZXRGb29kT2JqIiwiaW5wdXQiLCJzZXRJbnB1dCIsImJ1dHRvbkNsaWNrZWQiLCJzZXRCdXR0b25DbGlja2VkIiwiYnV0dG9uRiIsInZhbHVlIiwiaW5wdXRGIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});