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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonF, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    const [foodCount, setFoodCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getFoodCount = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            return obj[index];\n        }\n    };\n    const getFoodName = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(index)) {\n                return index;\n            }\n        }\n    };\n    let i = 0;\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n            children: food + \", \" + foodCount\n        }, i.toString(), false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined)\n    ];\n    let hasFoodExisted = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n        return false;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodCount(()=>getFoodCount(foodObj, input));\n        setFood(()=>getFoodName(foodObj, input));\n        if (validResponse) {\n            if (hasFoodExisted) {\n                displayObjArr.find((object, index)=>{\n                    if (object.food === input) {\n                        displayObjArr[index] = {\n                            food: foodCount\n                        };\n                    }\n                });\n            } else {\n                setDisplayObj((prevObj)=>[\n                        ...prevObj,\n                        newItem\n                    ]);\n                // buttonF(false)\n                validResponseF(false);\n            }\n        }\n        i++;\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: displayObjArr\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"UbYfZOxZgYBBiDKAJn/NMYGeexk=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFDOztJQUN0RSxNQUFNLENBQUNDLGVBQWVDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNsRCxzQ0FBc0M7SUFDdEMsK0NBQStDO0lBQy9DLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFFakMsTUFBTWMsZUFBZSxDQUFDQyxLQUFLQztRQUN2QixJQUFHRCxPQUFPLE9BQU9BLFFBQVEsVUFBUztZQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU07UUFDckI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixRQUFPO2dCQUN6QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBLElBQUlHLElBQUk7SUFFUixNQUFNQyxVQUFVO3NCQUNaLDhEQUFDQztZQUF5QkMsV0FBVTtzQkFDL0JWLE9BQU8sT0FBT0Y7V0FEUFMsRUFBRUksUUFBUTs7Ozs7S0FHekI7SUFFRCxJQUFJQyxpQkFBaUJoQixjQUFjaUIsSUFBSSxDQUFDLENBQUNDO1FBQ3JDLElBQUdBLE9BQU9kLElBQUksS0FBS1IsT0FBTTtZQUNyQixPQUFPO1FBQ1g7UUFDQSxPQUFPO0lBQ1g7SUFFQUgsZ0RBQVNBLENBQUM7UUFFTlUsYUFBYSxJQUFNRyxhQUFhWCxTQUFTQztRQUN6Q1MsUUFBUSxJQUFNSSxZQUFZZCxTQUFTQztRQUVuQyxJQUFHRSxlQUFjO1lBRWIsSUFBR2tCLGdCQUFlO2dCQUNkaEIsY0FBY2lCLElBQUksQ0FBQyxDQUFDQyxRQUFRVjtvQkFDeEIsSUFBR1UsT0FBT2QsSUFBSSxLQUFLUixPQUFNO3dCQUNyQkksYUFBYSxDQUFDUSxNQUFNLEdBQUc7NEJBQUNKLE1BQU1GO3dCQUFTO29CQUMzQztnQkFDSjtZQUNKLE9BQUs7Z0JBQ0RELGNBQWMsQ0FBQ2tCLFVBQVk7MkJBQ3BCQTt3QkFBU1A7cUJBQ2Y7Z0JBQ0QsaUJBQWlCO2dCQUNqQmIsZUFBZTtZQUNuQjtRQUNKO1FBQ0FZO0lBQ0osR0FBRztRQUFDYjtLQUFjO0lBRWxCLHFCQUNJLDhEQUFDZTtRQUFJQyxXQUFVO2tCQUNWZDs7Ozs7O0FBR2I7R0FoRU1OO0tBQUFBO0FBa0VOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcz8zYzJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgRm9vZExpc3QgPSAoe2Zvb2RPYmosIGlucHV0LCBidXR0b25GLCB2YWxpZFJlc3BvbnNlLCB2YWxpZFJlc3BvbnNlRn0pID0+IHtcbiAgICBjb25zdCBbZGlzcGxheU9iakFyciwgc2V0RGlzcGxheU9ial0gPSB1c2VTdGF0ZShbXSlcbiAgICAvLyBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSB1c2VTdGF0ZSgwKVxuICAgIC8vIGNvbnN0IGZvb2RJdGVtID0gZm9vZE9ialtmb29kQXJyLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgW2Zvb2RDb3VudCwgc2V0Rm9vZENvdW50XSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGdldEZvb2RDb3VudCA9IChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2luZGV4XVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEZvb2ROYW1lID0gKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpbmRleCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGkgPSAwXG4gICAgXG4gICAgY29uc3QgbmV3SXRlbSA9IFtcbiAgICAgICAgPGRpdiBrZXkgPSB7aS50b1N0cmluZygpfSBjbGFzc05hbWU9J2JveCBib3gtYm9yZGVyIHJvdW5kZWQteGwgaC0zNiBtLTIgYmctY3lhbi01MDAnPlxuICAgICAgICAgICAge2Zvb2QgKyBcIiwgXCIgKyBmb29kQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgIF1cblxuICAgIGxldCBoYXNGb29kRXhpc3RlZCA9IGRpc3BsYXlPYmpBcnIuZmluZCgob2JqZWN0KSA9PiB7XG4gICAgICAgIGlmKG9iamVjdC5mb29kID09PSBpbnB1dCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldEZvb2RDb3VudCgoKSA9PiBnZXRGb29kQ291bnQoZm9vZE9iaiwgaW5wdXQpKVxuICAgICAgICBzZXRGb29kKCgpID0+IGdldEZvb2ROYW1lKGZvb2RPYmosIGlucHV0KSlcblxuICAgICAgICBpZih2YWxpZFJlc3BvbnNlKXtcblxuICAgICAgICAgICAgaWYoaGFzRm9vZEV4aXN0ZWQpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlPYmpBcnIuZmluZCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QuZm9vZCA9PT0gaW5wdXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9iakFycltpbmRleF0gPSB7Zm9vZDogZm9vZENvdW50fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNldERpc3BsYXlPYmooKHByZXZPYmopID0+IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldk9iaiwgbmV3SXRlbVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgLy8gYnV0dG9uRihmYWxzZSlcbiAgICAgICAgICAgICAgICB2YWxpZFJlc3BvbnNlRihmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICB9LCBbdmFsaWRSZXNwb25zZV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTE0MCB3LTE0NCBwLTQgYmctZ3JheS0yMDAgcm91bmRlZC0yeGwgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgIHtkaXNwbGF5T2JqQXJyfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsImJ1dHRvbkYiLCJ2YWxpZFJlc3BvbnNlIiwidmFsaWRSZXNwb25zZUYiLCJkaXNwbGF5T2JqQXJyIiwic2V0RGlzcGxheU9iaiIsImZvb2RDb3VudCIsInNldEZvb2RDb3VudCIsImZvb2QiLCJzZXRGb29kIiwiZ2V0Rm9vZENvdW50Iiwib2JqIiwiaW5kZXgiLCJnZXRGb29kTmFtZSIsImhhc093blByb3BlcnR5IiwiaSIsIm5ld0l0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsImhhc0Zvb2RFeGlzdGVkIiwiZmluZCIsIm9iamVjdCIsInByZXZPYmoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});