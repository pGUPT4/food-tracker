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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonF, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    const [foodCount, setFoodCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let i = 0;\n    const getFoodCount = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            return obj[key];\n        }\n    };\n    const getFoodName = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(key)) {\n                return key;\n            }\n        }\n    };\n    // 1) Edit Array\n    let checkFoodExists = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            displayObjArr[index] = {\n                food: foodCount\n            };\n            return true;\n        }\n        return false;\n    });\n    /*\n    displayObjArr.find((object, index) => {\n                    if(object.food === input){\n                        \n                    }\n                }) */ const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: food,\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n            children: food + \", \" + foodCount\n        }, food, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined)\n    ];\n    // 2) Append array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodCount(getFoodCount(foodObj, input));\n        setFood(getFoodName(foodObj, input));\n        if (validResponse && !checkFoodExists) {\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            validResponseF(false);\n        }\n        i++;\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: displayObjArr\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"UbYfZOxZgYBBiDKAJn/NMYGeexk=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFDOztJQUN0RSxNQUFNLENBQUNDLGVBQWVDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNsRCxzQ0FBc0M7SUFDdEMsK0NBQStDO0lBQy9DLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsSUFBSWMsSUFBSTtJQUVSLE1BQU1DLGVBQWUsQ0FBQ0MsS0FBS0M7UUFDdkIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsT0FBT0EsR0FBRyxDQUFDQyxJQUFJO1FBQ25CO0lBQ0o7SUFDQSxNQUFNQyxjQUFjLENBQUNGLEtBQUtDO1FBQ3RCLElBQUdELE9BQU8sT0FBT0EsUUFBUSxVQUFTO1lBQzlCLElBQUdBLElBQUlHLGNBQWMsQ0FBQ0YsTUFBSztnQkFDdkIsT0FBT0E7WUFDWDtRQUNKO0lBQ0o7SUFFQSxnQkFBZ0I7SUFDaEIsSUFBSUcsa0JBQWtCWixjQUFjYSxJQUFJLENBQUMsQ0FBQ0M7UUFDdEMsSUFBR0EsT0FBT1YsSUFBSSxLQUFLUixPQUFNO1lBQ3JCSSxhQUFhLENBQUNlLE1BQU0sR0FBRztnQkFBQ1gsTUFBTUY7WUFBUztZQUN2QyxPQUFPO1FBQ1g7UUFDQSxPQUFPO0lBQ1g7SUFFQTs7Ozs7bUJBS2UsR0FFZixNQUFNYyxVQUFVO3NCQUNaLDhEQUFDQztZQUFpQkMsT0FBU2Q7WUFBTWUsV0FBVTtzQkFDdENmLE9BQU8sT0FBT0Y7V0FEUEU7Ozs7O0tBR2Y7SUFJRCxrQkFBa0I7SUFDbEJYLGdEQUFTQSxDQUFDO1FBRU5VLGFBQWFJLGFBQWFaLFNBQVNDO1FBQ25DUyxRQUFRSyxZQUFZZixTQUFTQztRQUU3QixJQUFHRSxpQkFBaUIsQ0FBQ2MsaUJBQWdCO1lBQ2pDWCxjQUFjLENBQUNtQixVQUFZO3VCQUNwQkE7b0JBQVNKO2lCQUNmO1lBQ0RqQixlQUFlO1FBQ25CO1FBQ0FPO0lBQ0osR0FBRztRQUFDUjtLQUFjO0lBRWxCLHFCQUNJLDhEQUFDbUI7UUFBSUUsV0FBVTtrQkFDVm5COzs7Ozs7QUFHYjtHQWpFTU47S0FBQUE7QUFtRU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2UvbGlzdC9wYWdlLmpzPzNjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGb29kTGlzdCA9ICh7Zm9vZE9iaiwgaW5wdXQsIGJ1dHRvbkYsIHZhbGlkUmVzcG9uc2UsIHZhbGlkUmVzcG9uc2VGfSkgPT4ge1xuICAgIGNvbnN0IFtkaXNwbGF5T2JqQXJyLCBzZXREaXNwbGF5T2JqXSA9IHVzZVN0YXRlKFtdKVxuICAgIC8vIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKDApXG4gICAgLy8gY29uc3QgZm9vZEl0ZW0gPSBmb29kT2JqW2Zvb2RBcnIubGVuZ3RoIC0gMV1cbiAgICBjb25zdCBbZm9vZENvdW50LCBzZXRGb29kQ291bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGxldCBpID0gMFxuXG4gICAgY29uc3QgZ2V0Rm9vZENvdW50ID0gKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2tleV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRGb29kTmFtZSA9IChvYmosIGtleSkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDEpIEVkaXQgQXJyYXlcbiAgICBsZXQgY2hlY2tGb29kRXhpc3RzID0gZGlzcGxheU9iakFyci5maW5kKChvYmplY3QpID0+IHtcbiAgICAgICAgaWYob2JqZWN0LmZvb2QgPT09IGlucHV0KXtcbiAgICAgICAgICAgIGRpc3BsYXlPYmpBcnJbaW5kZXhdID0ge2Zvb2Q6IGZvb2RDb3VudH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8qXG4gICAgZGlzcGxheU9iakFyci5maW5kKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iamVjdC5mb29kID09PSBpbnB1dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pICovXG4gICAgXG4gICAgY29uc3QgbmV3SXRlbSA9IFtcbiAgICAgICAgPGRpdiBrZXkgPSB7Zm9vZH0gY2xhc3MgPSB7Zm9vZH0gY2xhc3NOYW1lPSdib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMzYgbS0yIGJnLWN5YW4tNTAwJz5cbiAgICAgICAgICAgIHtmb29kICsgXCIsIFwiICsgZm9vZENvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICBdXG5cbiAgICBcblxuICAgIC8vIDIpIEFwcGVuZCBhcnJheVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgc2V0Rm9vZENvdW50KGdldEZvb2RDb3VudChmb29kT2JqLCBpbnB1dCkpXG4gICAgICAgIHNldEZvb2QoZ2V0Rm9vZE5hbWUoZm9vZE9iaiwgaW5wdXQpKVxuXG4gICAgICAgIGlmKHZhbGlkUmVzcG9uc2UgJiYgIWNoZWNrRm9vZEV4aXN0cyl7XG4gICAgICAgICAgICBzZXREaXNwbGF5T2JqKChwcmV2T2JqKSA9PiBbXG4gICAgICAgICAgICAgICAgLi4ucHJldk9iaiwgbmV3SXRlbVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIHZhbGlkUmVzcG9uc2VGKGZhbHNlKSAgICBcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICB9LCBbdmFsaWRSZXNwb25zZV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTE0MCB3LTE0NCBwLTQgYmctZ3JheS0yMDAgcm91bmRlZC0yeGwgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgIHtkaXNwbGF5T2JqQXJyfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsImJ1dHRvbkYiLCJ2YWxpZFJlc3BvbnNlIiwidmFsaWRSZXNwb25zZUYiLCJkaXNwbGF5T2JqQXJyIiwic2V0RGlzcGxheU9iaiIsImZvb2RDb3VudCIsInNldEZvb2RDb3VudCIsImZvb2QiLCJzZXRGb29kIiwiaSIsImdldEZvb2RDb3VudCIsIm9iaiIsImtleSIsImdldEZvb2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJjaGVja0Zvb2RFeGlzdHMiLCJmaW5kIiwib2JqZWN0IiwiaW5kZXgiLCJuZXdJdGVtIiwiZGl2IiwiY2xhc3MiLCJjbGFzc05hbWUiLCJwcmV2T2JqIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});