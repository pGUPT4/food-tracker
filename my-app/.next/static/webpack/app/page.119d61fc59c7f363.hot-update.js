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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _today_page_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today_page/list/page */ \"(app-pages-browser)/./app/today_page/list/page.js\");\n/* harmony import */ var _today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today_page/nutrition_table/page */ \"(app-pages-browser)/./app/today_page/nutrition_table/page.js\");\n/* harmony import */ var _today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today_page/search_and_suggestions/page */ \"(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [foodObj, setFoodObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [buttonClicked, setButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // // const [item, setItem] = useState(\"\")\n    // const [query, setQuery] = useState(\"\")\n    // let tempList = [\n    //     <div className='flex flex-row box-border h-20 w-120 bg-red-600'>\n    //         {/* {item} */}\n    //         Hello\n    //         <button/>\n    //     </div>\n    // ]\n    // const addItem = (item) => {\n    //     const foodItem = [\n    //         <div className='flex flex-row box-border h-20 w-120 bg-blue-600'>\n    //             {item}\n    //             <button/>\n    //         </div>\n    //     ]\n    //     setTodayList((oldArray) => {\n    //         [...oldArray, foodItem ]\n    //     })\n    //     console.log(todayList)\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-row overflow:hidden items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_list_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                foodObj: foodObj,\n                input: input,\n                buttonClicked: buttonClicked\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col m-4 border-blue-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_search_and_suggestions_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        foodObj: foodObj,\n                        setFoodObj: setFoodObj,\n                        input: input,\n                        setInput: setInput,\n                        setButtonClicked: setButtonClicked\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_today_page_nutrition_table_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"AWqgdkiBrK4rx/6SCHCThUJy740=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxQztBQUNTO0FBQ2lCO0FBQ1k7QUFFNUQsU0FBU0s7O0lBRXBCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNuRCwwQ0FBMEM7SUFDMUMseUNBQXlDO0lBRXpDLG1CQUFtQjtJQUNuQix1RUFBdUU7SUFDdkUseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLElBQUk7SUFFSiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLDRFQUE0RTtJQUM1RSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLElBQUk7SUFHUixxQkFDSSw4REFBQ1c7UUFBS0MsV0FBVTs7MEJBRVosOERBQUNYLDZEQUFRQTtnQkFBQ0ksU0FBU0E7Z0JBQVNFLE9BQVFBO2dCQUFPRSxlQUFpQkE7Ozs7OzswQkFHNUQsOERBQUNJO2dCQUFJRCxXQUFVOztrQ0FFWCw4REFBQ1QsK0VBQW1CQTt3QkFBQ0UsU0FBVUE7d0JBQVNDLFlBQVlBO3dCQUFZQyxPQUFRQTt3QkFBT0MsVUFBWUE7d0JBQVVFLGtCQUFvQkE7Ozs7OztrQ0FHekgsOERBQUNSLHdFQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0E3Q3dCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb2RMaXN0IGZyb20gXCIuL3RvZGF5X3BhZ2UvbGlzdC9wYWdlXCI7XG5pbXBvcnQgTnV0cml0aW9uVGFibGUgZnJvbSBcIi4vdG9kYXlfcGFnZS9udXRyaXRpb25fdGFibGUvcGFnZVwiO1xuaW1wb3J0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gZnJvbSBcIi4vdG9kYXlfcGFnZS9zZWFyY2hfYW5kX3N1Z2dlc3Rpb25zL3BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIGNvbnN0IFtmb29kT2JqLCBzZXRGb29kT2JqXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtidXR0b25DbGlja2VkLCBzZXRCdXR0b25DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyAvLyBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIC8vIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIilcblxuICAgIC8vIGxldCB0ZW1wTGlzdCA9IFtcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgYm94LWJvcmRlciBoLTIwIHctMTIwIGJnLXJlZC02MDAnPlxuICAgIC8vICAgICAgICAgey8qIHtpdGVtfSAqL31cbiAgICAvLyAgICAgICAgIEhlbGxvXG4gICAgLy8gICAgICAgICA8YnV0dG9uLz5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gXVxuICAgICAgICBcbiAgICAvLyBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgY29uc3QgZm9vZEl0ZW0gPSBbXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBib3gtYm9yZGVyIGgtMjAgdy0xMjAgYmctYmx1ZS02MDAnPlxuICAgIC8vICAgICAgICAgICAgIHtpdGVtfVxuICAgIC8vICAgICAgICAgICAgIDxidXR0b24vPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgIF1cbiAgICAvLyAgICAgc2V0VG9kYXlMaXN0KChvbGRBcnJheSkgPT4ge1xuICAgIC8vICAgICAgICAgWy4uLm9sZEFycmF5LCBmb29kSXRlbSBdXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRvZGF5TGlzdClcbiAgICAvLyB9XG5cblxucmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG92ZXJmbG93OmhpZGRlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgICAgey8qbGVmdCBzaWRlICovfVxuICAgICAgICA8Rm9vZExpc3QgZm9vZE9iaj17Zm9vZE9ian0gaW5wdXQ9IHtpbnB1dH0gYnV0dG9uQ2xpY2tlZCA9IHtidXR0b25DbGlja2VkfS8+XG4gICAgICAgIFxuICAgICAgICB7LyogcmlnaHQgc2lkZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbS00IGJvcmRlci1ibHVlLTYwMCc+XG4gICAgICAgICAgICB7LyogcmlnaHQgc2lkZSB1cHBlciBoYWxmKi99XG4gICAgICAgICAgICA8U2VhcmNoQW5kU3VnZ2VzdGlvbiBmb29kT2JqPSB7Zm9vZE9ian0gc2V0Rm9vZE9iaj17c2V0Rm9vZE9ian0gaW5wdXQgPXtpbnB1dH0gc2V0SW5wdXQgPSB7c2V0SW5wdXR9IHNldEJ1dHRvbkNsaWNrZWQgPSB7c2V0QnV0dG9uQ2xpY2tlZH0vPlxuXG4gICAgICAgICAgICB7LyogcmlnaHQgc2lkZSBsb3dlciBoYWxmKi99XG4gICAgICAgICAgICA8TnV0cml0aW9uVGFibGUvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb29kTGlzdCIsIk51dHJpdGlvblRhYmxlIiwiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsIkhvbWUiLCJmb29kT2JqIiwic2V0Rm9vZE9iaiIsImlucHV0Iiwic2V0SW5wdXQiLCJidXR0b25DbGlja2VkIiwic2V0QnV0dG9uQ2xpY2tlZCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});