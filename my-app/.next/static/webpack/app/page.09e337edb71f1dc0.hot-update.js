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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst FoodList = (param)=>{\n    let { foodObj, input, validResponse, validResponseF } = param;\n    // const [displayObjArr, setDisplayObj] = useState([])\n    // const [foodCount, setFoodCount] = useState(0)\n    // const [food, setFood] = useState(\"\")\n    // const getFoodCount = (obj, key) => {\n    //     if(obj && typeof obj === 'object'){\n    //         return obj?.key\n    //     }\n    // }\n    // const getFoodName = (obj, key) => {\n    //     if(obj && typeof obj === 'object'){\n    //         if(obj.hasOwnProperty(key)){\n    //             return key\n    //         }\n    //     }\n    // }\n    // // 1) Edit Array\n    // let checkFoodExists = displayObjArr.find((object) => {\n    //     if(object.food === input){\n    //         return true\n    //     }\n    //     return false\n    // })\n    // const newItem = [\n    //     <div key = {food} class = {food} className='box box-border rounded-xl h-36 m-2 bg-cyan-500 '>\n    //         <p className='text-3xl text-center text-white'>{food + \", \" + foodCount}</p>\n    //     </div>\n    // ]\n    // // 2) Append array\n    // useEffect(() => {\n    //     // setFoodCount(getFoodCount(foodObj, input))\n    //     // setFood(getFoodName(foodObj, input))\n    //     if(validResponse && !checkFoodExists){\n    //         setDisplayObj((prevObj) => [\n    //             ...prevObj, newItem\n    //         ])\n    //         validResponseF(false)    \n    //     }\n    // }, [validResponse])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>/*#__PURE__*/ {\n            let [food, foodCount] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-3xl text-center text-white\",\n                    children: food + \", \" + foodCount\n                }, void 0, false, {\n                    fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, undefined)\n            }, food, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNrRDtBQUVsRCxNQUFNRyxXQUFXO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFDO0lBQzdELHNEQUFzRDtJQUN0RCxnREFBZ0Q7SUFDaEQsdUNBQXVDO0lBRXZDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixJQUFJO0lBQ0osc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyx1Q0FBdUM7SUFDdkMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixRQUFRO0lBQ1IsSUFBSTtJQUVKLG1CQUFtQjtJQUNuQix5REFBeUQ7SUFDekQsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLEtBQUs7SUFFTCxvQkFBb0I7SUFDcEIsb0dBQW9HO0lBQ3BHLHVGQUF1RjtJQUN2RixhQUFhO0lBQ2IsSUFBSTtJQUVKLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFFcEIsb0RBQW9EO0lBQ3BELDhDQUE4QztJQUU5Qyw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFFBQVE7SUFDUixzQkFBc0I7SUFHdEIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1ZDLE9BQU9DLE9BQU8sQ0FBQ1AsU0FBU1EsR0FBRyxDQUFDLFFBQW9CQztnQkFBbkIsQ0FBQ0MsTUFBTUMsVUFBVTttQkFDM0MsOERBQUNQO2dCQUFpQkMsV0FBWTswQkFDMUIsNEVBQUNPO29CQUFFUCxXQUFVOzhCQUFtQ0ssT0FBTyxPQUFPQzs7Ozs7O2VBRHRERDs7Ozs7UUFFUDs7Ozs7O0FBSXJCO0tBeERNWDtBQTBETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9saXN0L3BhZ2UuanM/M2MyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZvb2RMaXN0ID0gKHtmb29kT2JqLCBpbnB1dCwgdmFsaWRSZXNwb25zZSwgdmFsaWRSZXNwb25zZUZ9KSA9PiB7XG4gICAgLy8gY29uc3QgW2Rpc3BsYXlPYmpBcnIsIHNldERpc3BsYXlPYmpdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc3QgW2Zvb2RDb3VudCwgc2V0Rm9vZENvdW50XSA9IHVzZVN0YXRlKDApXG4gICAgLy8gY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIC8vIGNvbnN0IGdldEZvb2RDb3VudCA9IChvYmosIGtleSkgPT4ge1xuICAgIC8vICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgIC8vICAgICAgICAgcmV0dXJuIG9iaj8ua2V5XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gY29uc3QgZ2V0Rm9vZE5hbWUgPSAob2JqLCBrZXkpID0+IHtcbiAgICAvLyAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAvLyAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4ga2V5XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyAvLyAxKSBFZGl0IEFycmF5XG4gICAgLy8gbGV0IGNoZWNrRm9vZEV4aXN0cyA9IGRpc3BsYXlPYmpBcnIuZmluZCgob2JqZWN0KSA9PiB7XG4gICAgLy8gICAgIGlmKG9iamVjdC5mb29kID09PSBpbnB1dCl7XG4gICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBmYWxzZVxuICAgIC8vIH0pXG4gICAgXG4gICAgLy8gY29uc3QgbmV3SXRlbSA9IFtcbiAgICAvLyAgICAgPGRpdiBrZXkgPSB7Zm9vZH0gY2xhc3MgPSB7Zm9vZH0gY2xhc3NOYW1lPSdib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMzYgbS0yIGJnLWN5YW4tNTAwICc+XG4gICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtM3hsIHRleHQtY2VudGVyIHRleHQtd2hpdGUnPntmb29kICsgXCIsIFwiICsgZm9vZENvdW50fTwvcD5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gXVxuXG4gICAgLy8gLy8gMikgQXBwZW5kIGFycmF5XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIC8vICAgICAvLyBzZXRGb29kQ291bnQoZ2V0Rm9vZENvdW50KGZvb2RPYmosIGlucHV0KSlcbiAgICAvLyAgICAgLy8gc2V0Rm9vZChnZXRGb29kTmFtZShmb29kT2JqLCBpbnB1dCkpXG5cbiAgICAvLyAgICAgaWYodmFsaWRSZXNwb25zZSAmJiAhY2hlY2tGb29kRXhpc3RzKXtcbiAgICAvLyAgICAgICAgIHNldERpc3BsYXlPYmooKHByZXZPYmopID0+IFtcbiAgICAvLyAgICAgICAgICAgICAuLi5wcmV2T2JqLCBuZXdJdGVtXG4gICAgLy8gICAgICAgICBdKVxuICAgIC8vICAgICAgICAgdmFsaWRSZXNwb25zZUYoZmFsc2UpICAgIFxuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3ZhbGlkUmVzcG9uc2VdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTE0MCB3LTE0NCBwLTQgYmctZ3JheS0yMDAgcm91bmRlZC0yeGwgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhmb29kT2JqKS5tYXAoKFtmb29kLCBmb29kQ291bnRdLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXkgPSB7Zm9vZH0gY2xhc3NOYW1lID0gXCJib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMzYgbS0yIGJnLWN5YW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSc+e2Zvb2QgKyBcIiwgXCIgKyBmb29kQ291bnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsInZhbGlkUmVzcG9uc2UiLCJ2YWxpZFJlc3BvbnNlRiIsImRpdiIsImNsYXNzTmFtZSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJpIiwiZm9vZCIsImZvb2RDb3VudCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});