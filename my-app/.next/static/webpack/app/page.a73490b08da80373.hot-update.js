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

/***/ "(app-pages-browser)/./app/today_page/list/page.js":
/*!*************************************!*\
  !*** ./app/today_page/list/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonClicked, buttonF, validResponse, validResponseF } = param;\n    _s();\n    const [displayObj, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    let foodCount = 0;\n    let food = \"\";\n    let hasfoodExisted = false;\n    const getFoodCount = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj[index] > 0) {\n                nonZeroFoodCount = true;\n            }\n            return obj[index];\n        }\n    };\n    const getFoodName = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(index)) {\n                return index;\n            }\n        }\n    };\n    foodCount = getFoodCount(foodObj, input);\n    food = getFoodName(foodObj, input);\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n            children: food + \", \" + foodCount\n        }, void 0, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined)\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (validResponse) {\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            buttonF(false);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: displayObj\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"TO8FEm7yg4Jf3jFRqTpMQzIuDqI=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUM7O0lBQ3JGLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MsSUFBSVcsWUFBWTtJQUNoQixJQUFJQyxPQUFPO0lBQ1gsSUFBSUMsaUJBQWlCO0lBRXJCLE1BQU1DLGVBQWUsQ0FBQ0MsS0FBS0M7UUFDdkIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsR0FBRyxDQUFDQyxNQUFNLEdBQUcsR0FBRTtnQkFDZEMsbUJBQW1CO1lBQ3ZCO1lBQ0EsT0FBT0YsR0FBRyxDQUFDQyxNQUFNO1FBQ3JCO0lBQ0o7SUFDQSxNQUFNRSxjQUFjLENBQUNILEtBQUtDO1FBQ3RCLElBQUdELE9BQU8sT0FBT0EsUUFBUSxVQUFTO1lBQzlCLElBQUdBLElBQUlJLGNBQWMsQ0FBQ0gsUUFBTztnQkFDekIsT0FBT0E7WUFDWDtRQUNKO0lBQ0o7SUFFQUwsWUFBWUcsYUFBYVgsU0FBU0M7SUFDbENRLE9BQU9NLFlBQVlmLFNBQVNDO0lBRTVCLE1BQU1nQixVQUFVO3NCQUNaLDhEQUFDQztZQUFJQyxXQUFVO3NCQUNWVixPQUFPLE9BQU9EOzs7Ozs7S0FFdEI7SUFFRFYsZ0RBQVNBLENBQUM7UUFDTixJQUFHTSxlQUFjO1lBQ2JHLGNBQWMsQ0FBQ2EsVUFBWTt1QkFDcEJBO29CQUFTSDtpQkFDZjtZQUNEZCxRQUFRO1lBQ1JFLGVBQWU7UUFDbkI7SUFDSixHQUFHO1FBQUNEO0tBQWM7SUFFbEIscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7a0JBQ1ZiOzs7Ozs7QUFHYjtHQWhETVA7S0FBQUE7QUFrRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2UvbGlzdC9wYWdlLmpzPzNjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGb29kTGlzdCA9ICh7Zm9vZE9iaiwgaW5wdXQsIGJ1dHRvbkNsaWNrZWQsIGJ1dHRvbkYsIHZhbGlkUmVzcG9uc2UsIHZhbGlkUmVzcG9uc2VGfSkgPT4ge1xuICAgIGNvbnN0IFtkaXNwbGF5T2JqLCBzZXREaXNwbGF5T2JqXSA9IHVzZVN0YXRlKFtdKVxuICAgIC8vIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKDApXG4gICAgLy8gY29uc3QgZm9vZEl0ZW0gPSBmb29kT2JqW2Zvb2RBcnIubGVuZ3RoIC0gMV1cbiAgICBsZXQgZm9vZENvdW50ID0gMFxuICAgIGxldCBmb29kID0gXCJcIlxuICAgIGxldCBoYXNmb29kRXhpc3RlZCA9IGZhbHNlXG5cbiAgICBjb25zdCBnZXRGb29kQ291bnQgPSAob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgaWYob2JqW2luZGV4XSA+IDApe1xuICAgICAgICAgICAgICAgIG5vblplcm9Gb29kQ291bnQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqW2luZGV4XVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEZvb2ROYW1lID0gKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpbmRleCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9vZENvdW50ID0gZ2V0Rm9vZENvdW50KGZvb2RPYmosIGlucHV0KVxuICAgIGZvb2QgPSBnZXRGb29kTmFtZShmb29kT2JqLCBpbnB1dClcbiAgICBcbiAgICBjb25zdCBuZXdJdGVtID0gW1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTM2IG0tMiBiZy1jeWFuLTUwMCc+XG4gICAgICAgICAgICB7Zm9vZCArIFwiLCBcIiArIGZvb2RDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgXVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYodmFsaWRSZXNwb25zZSl7XG4gICAgICAgICAgICBzZXREaXNwbGF5T2JqKChwcmV2T2JqKSA9PiBbXG4gICAgICAgICAgICAgICAgLi4ucHJldk9iaiwgbmV3SXRlbVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIGJ1dHRvbkYoZmFsc2UpXG4gICAgICAgICAgICB2YWxpZFJlc3BvbnNlRihmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFt2YWxpZFJlc3BvbnNlXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtMTQwIHctMTQ0IHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy15LWF1dG8nPlxuICAgICAgICAgICAge2Rpc3BsYXlPYmp9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZExpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb2RMaXN0IiwiZm9vZE9iaiIsImlucHV0IiwiYnV0dG9uQ2xpY2tlZCIsImJ1dHRvbkYiLCJ2YWxpZFJlc3BvbnNlIiwidmFsaWRSZXNwb25zZUYiLCJkaXNwbGF5T2JqIiwic2V0RGlzcGxheU9iaiIsImZvb2RDb3VudCIsImZvb2QiLCJoYXNmb29kRXhpc3RlZCIsImdldEZvb2RDb3VudCIsIm9iaiIsImluZGV4Iiwibm9uWmVyb0Zvb2RDb3VudCIsImdldEZvb2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuZXdJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJldk9iaiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});