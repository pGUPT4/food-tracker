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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonF, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    const [foodCount, setFoodCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let i = 0;\n    const getFoodCount = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            var _obj;\n            return (_obj = obj) === null || _obj === void 0 ? void 0 : _obj.key;\n        }\n    };\n    const getFoodName = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(key)) {\n                return key;\n            }\n        }\n    };\n    // 1) Edit Array\n    let checkFoodExists = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n        return false;\n    });\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: food,\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n            children: food + \", \" + foodCount\n        }, food, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined)\n    ];\n    // 2) Append array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodCount(getFoodCount(foodObj, input));\n        setFood(getFoodName(foodObj, input));\n        if (validResponse && !checkFoodExists) {\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>/*#__PURE__*/ {\n            let [food, foodCount] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                children: food + \", \" + foodCount\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"UbYfZOxZgYBBiDKAJn/NMYGeexk=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFDOztJQUN0RSxNQUFNLENBQUNDLGVBQWVDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNsRCxzQ0FBc0M7SUFDdEMsK0NBQStDO0lBQy9DLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsSUFBSWMsSUFBSTtJQUVSLE1BQU1DLGVBQWUsQ0FBQ0MsS0FBS0M7UUFDdkIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7Z0JBQ3ZCQTtZQUFQLFFBQU9BLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS0MsR0FBRztRQUNuQjtJQUNKO0lBQ0EsTUFBTUMsY0FBYyxDQUFDRixLQUFLQztRQUN0QixJQUFHRCxPQUFPLE9BQU9BLFFBQVEsVUFBUztZQUM5QixJQUFHQSxJQUFJRyxjQUFjLENBQUNGLE1BQUs7Z0JBQ3ZCLE9BQU9BO1lBQ1g7UUFDSjtJQUNKO0lBRUEsZ0JBQWdCO0lBQ2hCLElBQUlHLGtCQUFrQlosY0FBY2EsSUFBSSxDQUFDLENBQUNDO1FBQ3RDLElBQUdBLE9BQU9WLElBQUksS0FBS1IsT0FBTTtZQUNyQixPQUFPO1FBQ1g7UUFDQSxPQUFPO0lBQ1g7SUFFQSxNQUFNbUIsVUFBVTtzQkFDWiw4REFBQ0M7WUFBaUJDLE9BQVNiO1lBQU1jLFdBQVU7c0JBQ3RDZCxPQUFPLE9BQU9GO1dBRFBFOzs7OztLQUdmO0lBSUQsa0JBQWtCO0lBQ2xCWCxnREFBU0EsQ0FBQztRQUVOVSxhQUFhSSxhQUFhWixTQUFTQztRQUNuQ1MsUUFBUUssWUFBWWYsU0FBU0M7UUFFN0IsSUFBR0UsaUJBQWlCLENBQUNjLGlCQUFnQjtZQUNqQ1gsY0FBYyxDQUFDa0IsVUFBWTt1QkFDcEJBO29CQUFTSjtpQkFDZjtZQUNEaEIsZUFBZTtRQUNuQjtJQUNKLEdBQUc7UUFBQ0Q7S0FBYztJQUdsQixxQkFDSSw4REFBQ2tCO1FBQUlFLFdBQVU7a0JBQ1ZFLE9BQU9DLE9BQU8sQ0FBQzFCLFNBQVMyQixHQUFHLENBQUMsUUFBb0JoQjtnQkFBbkIsQ0FBQ0YsTUFBTUYsVUFBVTttQkFDM0MsOERBQUNjO2dCQUFJRSxXQUFZOzBCQUNaZCxPQUFPLE9BQU1GOzs7Ozs7UUFDYjs7Ozs7O0FBSXJCO0dBN0RNUjtLQUFBQTtBQStETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9saXN0L3BhZ2UuanM/M2MyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZvb2RMaXN0ID0gKHtmb29kT2JqLCBpbnB1dCwgYnV0dG9uRiwgdmFsaWRSZXNwb25zZSwgdmFsaWRSZXNwb25zZUZ9KSA9PiB7XG4gICAgY29uc3QgW2Rpc3BsYXlPYmpBcnIsIHNldERpc3BsYXlPYmpdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoMClcbiAgICAvLyBjb25zdCBmb29kSXRlbSA9IGZvb2RPYmpbZm9vZEFyci5sZW5ndGggLSAxXVxuICAgIGNvbnN0IFtmb29kQ291bnQsIHNldEZvb2RDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgbGV0IGkgPSAwXG5cbiAgICBjb25zdCBnZXRGb29kQ291bnQgPSAob2JqLCBrZXkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIHJldHVybiBvYmo/LmtleVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEZvb2ROYW1lID0gKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMSkgRWRpdCBBcnJheVxuICAgIGxldCBjaGVja0Zvb2RFeGlzdHMgPSBkaXNwbGF5T2JqQXJyLmZpbmQoKG9iamVjdCkgPT4ge1xuICAgICAgICBpZihvYmplY3QuZm9vZCA9PT0gaW5wdXQpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG5ld0l0ZW0gPSBbXG4gICAgICAgIDxkaXYga2V5ID0ge2Zvb2R9IGNsYXNzID0ge2Zvb2R9IGNsYXNzTmFtZT0nYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTM2IG0tMiBiZy1jeWFuLTUwMCc+XG4gICAgICAgICAgICB7Zm9vZCArIFwiLCBcIiArIGZvb2RDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgXVxuXG4gICAgXG5cbiAgICAvLyAyKSBBcHBlbmQgYXJyYXlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldEZvb2RDb3VudChnZXRGb29kQ291bnQoZm9vZE9iaiwgaW5wdXQpKVxuICAgICAgICBzZXRGb29kKGdldEZvb2ROYW1lKGZvb2RPYmosIGlucHV0KSlcblxuICAgICAgICBpZih2YWxpZFJlc3BvbnNlICYmICFjaGVja0Zvb2RFeGlzdHMpe1xuICAgICAgICAgICAgc2V0RGlzcGxheU9iaigocHJldk9iaikgPT4gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZPYmosIG5ld0l0ZW1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB2YWxpZFJlc3BvbnNlRihmYWxzZSkgICAgXG4gICAgICAgIH1cbiAgICB9LCBbdmFsaWRSZXNwb25zZV0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtMTQwIHctMTQ0IHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy15LWF1dG8nPlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGZvb2RPYmopLm1hcCgoW2Zvb2QsIGZvb2RDb3VudF0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTM2IG0tMiBiZy1jeWFuLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zm9vZCArIFwiLCBcIiArZm9vZENvdW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsImJ1dHRvbkYiLCJ2YWxpZFJlc3BvbnNlIiwidmFsaWRSZXNwb25zZUYiLCJkaXNwbGF5T2JqQXJyIiwic2V0RGlzcGxheU9iaiIsImZvb2RDb3VudCIsInNldEZvb2RDb3VudCIsImZvb2QiLCJzZXRGb29kIiwiaSIsImdldEZvb2RDb3VudCIsIm9iaiIsImtleSIsImdldEZvb2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJjaGVja0Zvb2RFeGlzdHMiLCJmaW5kIiwib2JqZWN0IiwibmV3SXRlbSIsImRpdiIsImNsYXNzIiwiY2xhc3NOYW1lIiwicHJldk9iaiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});