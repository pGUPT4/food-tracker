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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonClicked } = param;\n    _s();\n    const [displayObj, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    let foodCount = 0;\n    let food = \"\";\n    const getFoodCount = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            return obj[index];\n        }\n    };\n    const getFoodName = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(index)) {\n                return index;\n            }\n        }\n    };\n    foodCount = getFoodCount(foodObj, input);\n    food = getFoodName(foodObj, input);\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box box-border bg-blue-500 rounded-xl\",\n            children: \"foodCount, food\"\n        }, void 0, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined)\n    ];\n    //if(buttonClicked){\n    //     setDisplayObj([\n    //         ...displayObj, newItem\n    //     ])\n    // buttonF(false)\n    //}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl\",\n        onClick: ()=>{\n            console.log(input + \",\" + buttonClicked);\n        },\n        children: displayObj\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"loFYG2FXxrPh8DKtS0WU+5ENzM0=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUM7O0lBQzdDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MsSUFBSVEsWUFBWTtJQUNoQixJQUFJQyxPQUFPO0lBR1gsTUFBTUMsZUFBZSxDQUFDQyxLQUFLQztRQUN2QixJQUFHRCxPQUFPLE9BQU9BLFFBQVEsVUFBUztZQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU07UUFDckI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixRQUFPO2dCQUN6QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBSixZQUFZRSxhQUFhUCxTQUFTQztJQUNsQ0ssT0FBT0ksWUFBWVYsU0FBU0M7SUFFNUIsTUFBTVcsVUFBVTtzQkFDWiw4REFBQ0M7WUFBSUMsV0FBVTtzQkFBd0M7Ozs7OztLQUcxRDtJQUVELG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLFNBQVM7SUFDTCxpQkFBaUI7SUFDckIsR0FBRztJQUVILHFCQUNJLDhEQUFDRDtRQUFJQyxXQUFVO1FBQ2ZDLFNBQVM7WUFBT0MsUUFBUUMsR0FBRyxDQUFDaEIsUUFBUSxNQUFPQztRQUFjO2tCQUNwREM7Ozs7OztBQUdiO0dBM0NNSjtLQUFBQTtBQTZDTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9saXN0L3BhZ2UuanM/M2MyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZvb2RMaXN0ID0gKHtmb29kT2JqLCBpbnB1dCwgYnV0dG9uQ2xpY2tlZH0pID0+IHtcbiAgICBjb25zdCBbZGlzcGxheU9iaiwgc2V0RGlzcGxheU9ial0gPSB1c2VTdGF0ZShbXSlcbiAgICAvLyBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSB1c2VTdGF0ZSgwKVxuICAgIC8vIGNvbnN0IGZvb2RJdGVtID0gZm9vZE9ialtmb29kQXJyLmxlbmd0aCAtIDFdXG4gICAgbGV0IGZvb2RDb3VudCA9IDBcbiAgICBsZXQgZm9vZCA9IFwiXCJcbiAgICBcblxuICAgIGNvbnN0IGdldEZvb2RDb3VudCA9IChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2luZGV4XVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEZvb2ROYW1lID0gKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpbmRleCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9vZENvdW50ID0gZ2V0Rm9vZENvdW50KGZvb2RPYmosIGlucHV0KVxuICAgIGZvb2QgPSBnZXRGb29kTmFtZShmb29kT2JqLCBpbnB1dClcbiAgICBcbiAgICBjb25zdCBuZXdJdGVtID0gW1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94IGJveC1ib3JkZXIgYmctYmx1ZS01MDAgcm91bmRlZC14bCc+XG4gICAgICAgICAgICBmb29kQ291bnQsIGZvb2RcbiAgICAgICAgPC9kaXY+XG4gICAgXVxuXG4gICAgLy9pZihidXR0b25DbGlja2VkKXtcbiAgICAvLyAgICAgc2V0RGlzcGxheU9iaihbXG4gICAgLy8gICAgICAgICAuLi5kaXNwbGF5T2JqLCBuZXdJdGVtXG4gICAgLy8gICAgIF0pXG4gICAgICAgIC8vIGJ1dHRvbkYoZmFsc2UpXG4gICAgLy99XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTE0MCB3LTE0NCBwLTQgYmctZ3JheS0yMDAgcm91bmRlZC0yeGwnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtjb25zb2xlLmxvZyhpbnB1dCArIFwiLFwiICArIGJ1dHRvbkNsaWNrZWQpfX0+XG4gICAgICAgICAgICB7ZGlzcGxheU9ian1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kTGlzdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vZExpc3QiLCJmb29kT2JqIiwiaW5wdXQiLCJidXR0b25DbGlja2VkIiwiZGlzcGxheU9iaiIsInNldERpc3BsYXlPYmoiLCJmb29kQ291bnQiLCJmb29kIiwiZ2V0Rm9vZENvdW50Iiwib2JqIiwiaW5kZXgiLCJnZXRGb29kTmFtZSIsImhhc093blByb3BlcnR5IiwibmV3SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});