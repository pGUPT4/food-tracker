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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, input, buttonClicked } = param;\n    let query = \"\";\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateArr = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    const setInput = (q)=>{\n        input = queqry;\n        return input;\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            query = e.target.value;\n                        // console.log(query)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: ()=>{\n                            foodObj = updateArr(foodObj, query);\n                            input = query;\n                            console.log(input);\n                            query = \"\";\n                            document.getElementById(\"myInput\").value = \"\";\n                            buttonClicked = true;\n                        },\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined));\n};\n_c = SearchAndSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFNQSxzQkFBc0I7UUFBQyxFQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFDO0lBQ3hELElBQUlDLFFBQVE7SUFDWix1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1DLFlBQVksQ0FBQ0MsS0FBS0Y7UUFDcEIsSUFBR0UsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNILFFBQU87Z0JBQzFCRSxHQUFHLENBQUNGLE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNERSxHQUFHLENBQUNGLE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT0U7SUFDWDtJQUVBLE1BQU1FLFdBQVcsQ0FBQ0M7UUFDZFAsUUFBUVE7UUFDUixPQUFPUjtJQUNYO0lBRUEsT0FDSSx5Q0FBeUM7a0JBQ3pDLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNaLDhEQUFDVjt3QkFDR1ksSUFBSzt3QkFDTEYsV0FBVTt3QkFDVkcsVUFBWSxDQUFDQzs0QkFDVFosUUFBUVksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUN0QixxQkFBcUI7d0JBQ3JCOzs7Ozs7a0NBRVIsOERBQUNDO3dCQUNHUCxXQUFVO3dCQUNWUSxNQUFLO3dCQUNMQyxTQUFXOzRCQUNQcEIsVUFBVUksVUFBVUosU0FBU0c7NEJBQzdCRixRQUFRRTs0QkFDUmtCLFFBQVFDLEdBQUcsQ0FBQ3JCOzRCQUNaRSxRQUFROzRCQUNSb0IsU0FBU0MsY0FBYyxDQUFDLFdBQVdQLEtBQUssR0FBRzs0QkFDM0NmLGdCQUFnQjt3QkFDcEI7a0NBQ0M7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQ1E7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUkzQjtLQXJETVo7QUF1RE4sK0RBQWVBLG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9zZWFyY2hfYW5kX3N1Z2dlc3Rpb25zL3BhZ2UuanM/OTdjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmNvbnN0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gPSAoe2Zvb2RPYmosIGlucHV0LCBidXR0b25DbGlja2VkfSkgPT4ge1xuICAgIGxldCBxdWVyeSA9IFwiXCJcbiAgICAvLyBjb25zdCByZW1vdmVEdXBsaWNhdGVzID0gKGFycnkpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGFycnkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyeS5pbmRleE9mKGl0ZW0pID09IGluZGV4KX1cblxuICAgIGNvbnN0IHVwZGF0ZUFyciA9IChvYmosIHF1ZXJ5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHF1ZXJ5KSl7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSA9IDFcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG9ialtxdWVyeV0rK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2V0SW5wdXQgPSAocSkgPT4ge1xuICAgICAgICBpbnB1dCA9IHF1ZXFyeVxuICAgICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBTZWFyY2ggYmFyLCBidXR0b24gd2l0aCBzdWdnZXN0aW9uIGJveFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgYm94LWJvcmRlciBiZy1ncmF5LTUwMCByb3VuZGVkLTJ4bCBib3JkZXItZ3JheS05NTAgYm9yZGVyLXItYmx1ZS02MDAnPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm15SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tMiB3LTEyMCBoLTggcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTIwIGgtOCBiZy13aGl0ZSBtLTIgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb29kT2JqID0gdXBkYXRlQXJyKGZvb2RPYmosIHF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBxdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUlucHV0JykudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xpY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGaW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtNDggdy0xNDQgbS0yIGJnLWdyYXktMzAwIGJvcmRlci0xIHJvdW5kZWQtMnhsIGJnLWdyZXktMjAwJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFuZFN1Z2dlc3Rpb24iXSwibmFtZXMiOlsiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsImZvb2RPYmoiLCJpbnB1dCIsImJ1dHRvbkNsaWNrZWQiLCJxdWVyeSIsInVwZGF0ZUFyciIsIm9iaiIsImhhc093blByb3BlcnR5Iiwic2V0SW5wdXQiLCJxIiwicXVlcXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});