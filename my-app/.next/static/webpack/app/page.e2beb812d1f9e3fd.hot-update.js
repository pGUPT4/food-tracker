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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _today_page_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today_page/list/page */ \"(app-pages-browser)/./app/today_page/list/page.js\");\n/* harmony import */ var _today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today_page/nutrition_table/page */ \"(app-pages-browser)/./app/today_page/nutrition_table/page.js\");\n/* harmony import */ var _today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today_page/search_and_suggestions/page */ \"(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [foodObj, setFoodObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [buttonClicked, setButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [validResponse, setValidResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const buttonF = (value) => {\n    //     setButtonClicked(value)\n    // }\n    const inputF = (value)=>{\n        setInput(value);\n    };\n    const foodObjF = (value)=>{\n        setFoodObj(value);\n    };\n    const validResponseF = (value)=>{\n        setValidResponse(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-row overflow:hidden items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_list_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                foodObj: foodObj,\n                input: input,\n                // buttonF = {buttonF}\n                validResponse: validResponse,\n                validResponseF: validResponseF\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col m-4 border-blue-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        foodObj: foodObj,\n                        foodObjF: foodObjF,\n                        inputF: inputF,\n                        // buttonF ={buttonF}\n                        validResponseF: validResponseF\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"DnYx+lRuXRF0k6qQpgp7+Z8UUpc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxQztBQUNTO0FBQ2lCO0FBQ1k7QUFFNUQsU0FBU0s7O0lBRXBCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuRCwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLElBQUk7SUFFSixNQUFNYSxTQUFTLENBQUNDO1FBQ1pOLFNBQVNNO0lBQ2I7SUFFQSxNQUFNQyxXQUFXLENBQUNEO1FBQ2RSLFdBQVdRO0lBQ2Y7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ0Y7UUFDcEJGLGlCQUFpQkU7SUFDckI7SUFHSixxQkFDSSw4REFBQ0c7UUFBS0MsV0FBVTs7MEJBRVosOERBQUNqQiw2REFBUUE7Z0JBQ0xJLFNBQVNBO2dCQUNURSxPQUFRQTtnQkFDUixzQkFBc0I7Z0JBQ3RCSSxlQUFpQkE7Z0JBQ2pCSyxnQkFBa0JBOzs7Ozs7MEJBR3RCLDhEQUFDRztnQkFBSUQsV0FBVTs7a0NBRVgsOERBQUNmLCtFQUFtQkE7d0JBQ2hCRSxTQUFXQTt3QkFDWFUsVUFBVUE7d0JBQ1ZGLFFBQVVBO3dCQUNWLHFCQUFxQjt3QkFDckJHLGdCQUFrQkE7Ozs7OztrQ0FJdEIsOERBQUNkLHdFQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0I7R0FwRHdCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb2RMaXN0IGZyb20gXCIuL3RvZGF5X3BhZ2UvbGlzdC9wYWdlXCI7XG5pbXBvcnQgTnV0cml0aW9uVGFibGUgZnJvbSBcIi4vdG9kYXlfcGFnZS9udXRyaXRpb25fdGFibGUvcGFnZVwiO1xuaW1wb3J0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gZnJvbSBcIi4vdG9kYXlfcGFnZS9zZWFyY2hfYW5kX3N1Z2dlc3Rpb25zL3BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIGNvbnN0IFtmb29kT2JqLCBzZXRGb29kT2JqXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtidXR0b25DbGlja2VkLCBzZXRCdXR0b25DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdmFsaWRSZXNwb25zZSwgc2V0VmFsaWRSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgLy8gY29uc3QgYnV0dG9uRiA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vICAgICBzZXRCdXR0b25DbGlja2VkKHZhbHVlKVxuICAgIC8vIH1cblxuICAgIGNvbnN0IGlucHV0RiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRJbnB1dCh2YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBmb29kT2JqRiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRGb29kT2JqKHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkUmVzcG9uc2VGID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbGlkUmVzcG9uc2UodmFsdWUpXG4gICAgfVxuXG5cbnJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBvdmVyZmxvdzpoaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICAgIHsvKmxlZnQgc2lkZSAqL31cbiAgICAgICAgPEZvb2RMaXN0IFxuICAgICAgICAgICAgZm9vZE9iaj17Zm9vZE9ian0gXG4gICAgICAgICAgICBpbnB1dD0ge2lucHV0fVxuICAgICAgICAgICAgLy8gYnV0dG9uRiA9IHtidXR0b25GfVxuICAgICAgICAgICAgdmFsaWRSZXNwb25zZSA9IHt2YWxpZFJlc3BvbnNlfVxuICAgICAgICAgICAgdmFsaWRSZXNwb25zZUYgPSB7dmFsaWRSZXNwb25zZUZ9Lz5cbiAgICAgICAgXG4gICAgICAgIHsvKiByaWdodCBzaWRlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtLTQgYm9yZGVyLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIHsvKiByaWdodCBzaWRlIHVwcGVyIGhhbGYqL31cbiAgICAgICAgICAgIDxTZWFyY2hBbmRTdWdnZXN0aW9uIFxuICAgICAgICAgICAgICAgIGZvb2RPYmogPSB7Zm9vZE9ian1cbiAgICAgICAgICAgICAgICBmb29kT2JqRj17Zm9vZE9iakZ9IFxuICAgICAgICAgICAgICAgIGlucHV0RiA9IHtpbnB1dEZ9IFxuICAgICAgICAgICAgICAgIC8vIGJ1dHRvbkYgPXtidXR0b25GfVxuICAgICAgICAgICAgICAgIHZhbGlkUmVzcG9uc2VGID0ge3ZhbGlkUmVzcG9uc2VGfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiByaWdodCBzaWRlIGxvd2VyIGhhbGYqL31cbiAgICAgICAgICAgIDxOdXRyaXRpb25UYWJsZS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8cD57Zm9vZE9iaiArIFwiLCBcIiArIGlucHV0ICsgXCIsIFwiICsgYnV0dG9uQ2xpY2tlZH08L3A+ICovfVxuICAgIDwvbWFpbj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvb2RMaXN0IiwiTnV0cml0aW9uVGFibGUiLCJTZWFyY2hBbmRTdWdnZXN0aW9uIiwiSG9tZSIsImZvb2RPYmoiLCJzZXRGb29kT2JqIiwiaW5wdXQiLCJzZXRJbnB1dCIsImJ1dHRvbkNsaWNrZWQiLCJzZXRCdXR0b25DbGlja2VkIiwidmFsaWRSZXNwb25zZSIsInNldFZhbGlkUmVzcG9uc2UiLCJpbnB1dEYiLCJ2YWx1ZSIsImZvb2RPYmpGIiwidmFsaWRSZXNwb25zZUYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});