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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonClicked, buttonF, validResponse } = param;\n    _s();\n    const [displayObj, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    let foodCount = 0;\n    let food = \"\";\n    const getFoodCount = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            return obj[index];\n        }\n    };\n    const getFoodName = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(index)) {\n                return index;\n            }\n        }\n    };\n    foodCount = getFoodCount(foodObj, input);\n    food = getFoodName(foodObj, input);\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box box-border bg-blue-500 rounded-xl h-100\",\n            children: Object.keys(foodObj) + \", \" + Object.values(foodObj)\n        }, void 0, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined)\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (validResponse) {\n            setDisplayObj([\n                ...displayObj,\n                newItem\n            ]);\n            buttonF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl\",\n        children: displayObj\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"TO8FEm7yg4Jf3jFRqTpMQzIuDqI=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFDOztJQUNyRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxzQ0FBc0M7SUFDdEMsK0NBQStDO0lBQy9DLElBQUlVLFlBQVk7SUFDaEIsSUFBSUMsT0FBTztJQUdYLE1BQU1DLGVBQWUsQ0FBQ0MsS0FBS0M7UUFDdkIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsT0FBT0EsR0FBRyxDQUFDQyxNQUFNO1FBQ3JCO0lBQ0o7SUFDQSxNQUFNQyxjQUFjLENBQUNGLEtBQUtDO1FBQ3RCLElBQUdELE9BQU8sT0FBT0EsUUFBUSxVQUFTO1lBQzlCLElBQUdBLElBQUlHLGNBQWMsQ0FBQ0YsUUFBTztnQkFDekIsT0FBT0E7WUFDWDtRQUNKO0lBQ0o7SUFFQUosWUFBWUUsYUFBYVQsU0FBU0M7SUFDbENPLE9BQU9JLFlBQVlaLFNBQVNDO0lBRTVCLE1BQU1hLFVBQVU7c0JBQ1osOERBQUNDO1lBQUlDLFdBQVU7c0JBQ1ZDLE9BQU9DLElBQUksQ0FBQ2xCLFdBQVcsT0FBT2lCLE9BQU9FLE1BQU0sQ0FBQ25COzs7Ozs7S0FFcEQ7SUFFREYsZ0RBQVNBLENBQUM7UUFDTixJQUFHTSxlQUFjO1lBQ2JFLGNBQWM7bUJBQ1BEO2dCQUFZUzthQUNsQjtZQUNEWCxRQUFRO1FBQ1o7SUFDSixHQUFHO1FBQUNDO0tBQWM7SUFFbEIscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7a0JBQ1ZYOzs7Ozs7QUFHYjtHQTVDTU47S0FBQUE7QUE4Q04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2UvbGlzdC9wYWdlLmpzPzNjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGb29kTGlzdCA9ICh7Zm9vZE9iaiwgaW5wdXQsIGJ1dHRvbkNsaWNrZWQsIGJ1dHRvbkYsIHZhbGlkUmVzcG9uc2V9KSA9PiB7XG4gICAgY29uc3QgW2Rpc3BsYXlPYmosIHNldERpc3BsYXlPYmpdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoMClcbiAgICAvLyBjb25zdCBmb29kSXRlbSA9IGZvb2RPYmpbZm9vZEFyci5sZW5ndGggLSAxXVxuICAgIGxldCBmb29kQ291bnQgPSAwXG4gICAgbGV0IGZvb2QgPSBcIlwiXG4gICAgXG5cbiAgICBjb25zdCBnZXRGb29kQ291bnQgPSAob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgcmV0dXJuIG9ialtpbmRleF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRGb29kTmFtZSA9IChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaW5kZXgpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvb2RDb3VudCA9IGdldEZvb2RDb3VudChmb29kT2JqLCBpbnB1dClcbiAgICBmb29kID0gZ2V0Rm9vZE5hbWUoZm9vZE9iaiwgaW5wdXQpXG4gICAgXG4gICAgY29uc3QgbmV3SXRlbSA9IFtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCBib3gtYm9yZGVyIGJnLWJsdWUtNTAwIHJvdW5kZWQteGwgaC0xMDAnPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGZvb2RPYmopICsgXCIsIFwiICsgT2JqZWN0LnZhbHVlcyhmb29kT2JqKX1cbiAgICAgICAgPC9kaXY+XG4gICAgXVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYodmFsaWRSZXNwb25zZSl7XG4gICAgICAgICAgICBzZXREaXNwbGF5T2JqKFtcbiAgICAgICAgICAgICAgICAuLi5kaXNwbGF5T2JqLCBuZXdJdGVtXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgYnV0dG9uRihmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFt2YWxpZFJlc3BvbnNlXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtMTQwIHctMTQ0IHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLTJ4bCc+XG4gICAgICAgICAgICB7ZGlzcGxheU9ian1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kTGlzdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vZExpc3QiLCJmb29kT2JqIiwiaW5wdXQiLCJidXR0b25DbGlja2VkIiwiYnV0dG9uRiIsInZhbGlkUmVzcG9uc2UiLCJkaXNwbGF5T2JqIiwic2V0RGlzcGxheU9iaiIsImZvb2RDb3VudCIsImZvb2QiLCJnZXRGb29kQ291bnQiLCJvYmoiLCJpbmRleCIsImdldEZvb2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuZXdJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});