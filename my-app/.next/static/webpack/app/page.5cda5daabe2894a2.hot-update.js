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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _today_page_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today_page/list/page */ \"(app-pages-browser)/./app/today_page/list/page.js\");\n/* harmony import */ var _today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today_page/nutrition_table/page */ \"(app-pages-browser)/./app/today_page/nutrition_table/page.js\");\n/* harmony import */ var _today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today_page/search_and_suggestions/page */ \"(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [foodObj, setFoodObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [buttonClicked, setButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [validResponse, setValidResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const buttonF = (value)=>{\n        setButtonClicked(value);\n    };\n    const inputF = (value)=>{\n        setInput(value);\n    };\n    const foodObjF = (value)=>{\n        setFoodObj(value);\n    };\n    const validResponseF = (value)=>{\n        setValidResponse(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-row overflow:hidden items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_list_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                foodObj: foodObj,\n                input: input,\n                buttonClicked: buttonClicked,\n                buttonF: buttonF,\n                validResponse: validResponse,\n                validResponseF: validResponseF\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col m-4 border-blue-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        foodObj: foodObj,\n                        buttonClicked: buttonClicked,\n                        foodObjF: foodObjF,\n                        inputF: inputF,\n                        buttonF: buttonF,\n                        validResponseF: validResponseF\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"DnYx+lRuXRF0k6qQpgp7+Z8UUpc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxQztBQUNTO0FBQ2lCO0FBQ1k7QUFFNUQsU0FBU0s7O0lBRXBCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNYSxVQUFVLENBQUNDO1FBQ2JKLGlCQUFpQkk7SUFDckI7SUFFQSxNQUFNQyxTQUFTLENBQUNEO1FBQ1pOLFNBQVNNO0lBQ2I7SUFFQSxNQUFNRSxXQUFXLENBQUNGO1FBQ2RSLFdBQVdRO0lBQ2Y7SUFFQSxNQUFNRyxpQkFBaUIsQ0FBQ0g7UUFDcEJGLGlCQUFpQkU7SUFDckI7SUFHSixxQkFDSSw4REFBQ0k7UUFBS0MsV0FBVTs7MEJBRVosOERBQUNsQiw2REFBUUE7Z0JBQ0xJLFNBQVNBO2dCQUNURSxPQUFRQTtnQkFDUkUsZUFBaUJBO2dCQUNqQkksU0FBV0E7Z0JBQ1hGLGVBQWlCQTtnQkFDakJNLGdCQUFrQkE7Ozs7OzswQkFHdEIsOERBQUNHO2dCQUFJRCxXQUFVOztrQ0FFWCw4REFBQ2hCLCtFQUFtQkE7d0JBQ2hCRSxTQUFXQTt3QkFDWEksZUFBaUJBO3dCQUNqQk8sVUFBVUE7d0JBQ1ZELFFBQVVBO3dCQUNWRixTQUFVQTt3QkFDVkksZ0JBQWtCQTs7Ozs7O2tDQUl0Qiw4REFBQ2Ysd0VBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQjtHQXREd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vZExpc3QgZnJvbSBcIi4vdG9kYXlfcGFnZS9saXN0L3BhZ2VcIjtcbmltcG9ydCBOdXRyaXRpb25UYWJsZSBmcm9tIFwiLi90b2RheV9wYWdlL251dHJpdGlvbl90YWJsZS9wYWdlXCI7XG5pbXBvcnQgU2VhcmNoQW5kU3VnZ2VzdGlvbiBmcm9tIFwiLi90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgY29uc3QgW2Zvb2RPYmosIHNldEZvb2RPYmpdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2J1dHRvbkNsaWNrZWQsIHNldEJ1dHRvbkNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt2YWxpZFJlc3BvbnNlLCBzZXRWYWxpZFJlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICBjb25zdCBidXR0b25GID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEJ1dHRvbkNsaWNrZWQodmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRGID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldElucHV0KHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZvb2RPYmpGID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEZvb2RPYmoodmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRSZXNwb25zZUYgPSAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0VmFsaWRSZXNwb25zZSh2YWx1ZSlcbiAgICB9XG5cblxucmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG92ZXJmbG93OmhpZGRlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgICAgey8qbGVmdCBzaWRlICovfVxuICAgICAgICA8Rm9vZExpc3QgXG4gICAgICAgICAgICBmb29kT2JqPXtmb29kT2JqfSBcbiAgICAgICAgICAgIGlucHV0PSB7aW5wdXR9IFxuICAgICAgICAgICAgYnV0dG9uQ2xpY2tlZCA9IHtidXR0b25DbGlja2VkfSBcbiAgICAgICAgICAgIGJ1dHRvbkYgPSB7YnV0dG9uRn1cbiAgICAgICAgICAgIHZhbGlkUmVzcG9uc2UgPSB7dmFsaWRSZXNwb25zZX1cbiAgICAgICAgICAgIHZhbGlkUmVzcG9uc2VGID0ge3ZhbGlkUmVzcG9uc2VGfS8+XG4gICAgICAgIFxuICAgICAgICB7LyogcmlnaHQgc2lkZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbS00IGJvcmRlci1ibHVlLTYwMCc+XG4gICAgICAgICAgICB7LyogcmlnaHQgc2lkZSB1cHBlciBoYWxmKi99XG4gICAgICAgICAgICA8U2VhcmNoQW5kU3VnZ2VzdGlvbiBcbiAgICAgICAgICAgICAgICBmb29kT2JqID0ge2Zvb2RPYmp9IFxuICAgICAgICAgICAgICAgIGJ1dHRvbkNsaWNrZWQgPSB7YnV0dG9uQ2xpY2tlZH0gXG4gICAgICAgICAgICAgICAgZm9vZE9iakY9e2Zvb2RPYmpGfSBcbiAgICAgICAgICAgICAgICBpbnB1dEYgPSB7aW5wdXRGfSBcbiAgICAgICAgICAgICAgICBidXR0b25GID17YnV0dG9uRn1cbiAgICAgICAgICAgICAgICB2YWxpZFJlc3BvbnNlRiA9IHt2YWxpZFJlc3BvbnNlRn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7LyogcmlnaHQgc2lkZSBsb3dlciBoYWxmKi99XG4gICAgICAgICAgICA8TnV0cml0aW9uVGFibGUvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPHA+e2Zvb2RPYmogKyBcIiwgXCIgKyBpbnB1dCArIFwiLCBcIiArIGJ1dHRvbkNsaWNrZWR9PC9wPiAqL31cbiAgICA8L21haW4+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb29kTGlzdCIsIk51dHJpdGlvblRhYmxlIiwiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsIkhvbWUiLCJmb29kT2JqIiwic2V0Rm9vZE9iaiIsImlucHV0Iiwic2V0SW5wdXQiLCJidXR0b25DbGlja2VkIiwic2V0QnV0dG9uQ2xpY2tlZCIsInZhbGlkUmVzcG9uc2UiLCJzZXRWYWxpZFJlc3BvbnNlIiwiYnV0dG9uRiIsInZhbHVlIiwiaW5wdXRGIiwiZm9vZE9iakYiLCJ2YWxpZFJlc3BvbnNlRiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});