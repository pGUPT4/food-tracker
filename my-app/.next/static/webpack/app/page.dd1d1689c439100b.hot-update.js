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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [foodCount, setFoodCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getFoodCount = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            var _obj;\n            return (_obj = obj) === null || _obj === void 0 ? void 0 : _obj.key;\n        }\n    };\n    const getFoodName = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(key)) {\n                return key;\n            }\n        }\n    };\n    // 1) Edit Array\n    let checkFoodExists = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n        return false;\n    });\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: food,\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500 ju\",\n            children: food + \", \" + foodCount\n        }, food, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    ];\n    // 2) Append array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodCount(getFoodCount(foodObj, input));\n        setFood(getFoodName(foodObj, input));\n        if (validResponse && !checkFoodExists) {\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>/*#__PURE__*/ {\n            let [food, foodCount] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                children: food + \", \" + foodCount\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"UbYfZOxZgYBBiDKAJn/NMYGeexk=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBQzs7SUFDN0QsTUFBTSxDQUFDQyxlQUFlQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbEQsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYSxlQUFlLENBQUNDLEtBQUtDO1FBQ3ZCLElBQUdELE9BQU8sT0FBT0EsUUFBUSxVQUFTO2dCQUN2QkE7WUFBUCxRQUFPQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtDLEdBQUc7UUFDbkI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixNQUFLO2dCQUN2QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBLGdCQUFnQjtJQUNoQixJQUFJRyxrQkFBa0JYLGNBQWNZLElBQUksQ0FBQyxDQUFDQztRQUN0QyxJQUFHQSxPQUFPVCxJQUFJLEtBQUtQLE9BQU07WUFDckIsT0FBTztRQUNYO1FBQ0EsT0FBTztJQUNYO0lBRUEsTUFBTWlCLFVBQVU7c0JBQ1osOERBQUNDO1lBQWlCQyxPQUFTWjtZQUFNYSxXQUFVO3NCQUN0Q2IsT0FBTyxPQUFPRjtXQURQRTs7Ozs7S0FHZjtJQUVELGtCQUFrQjtJQUNsQlYsZ0RBQVNBLENBQUM7UUFFTlMsYUFBYUcsYUFBYVYsU0FBU0M7UUFDbkNRLFFBQVFJLFlBQVliLFNBQVNDO1FBRTdCLElBQUdDLGlCQUFpQixDQUFDYSxpQkFBZ0I7WUFDakNWLGNBQWMsQ0FBQ2lCLFVBQVk7dUJBQ3BCQTtvQkFBU0o7aUJBQ2Y7WUFDRGYsZUFBZTtRQUNuQjtJQUNKLEdBQUc7UUFBQ0Q7S0FBYztJQUdsQixxQkFDSSw4REFBQ2lCO1FBQUlFLFdBQVU7a0JBQ1ZFLE9BQU9DLE9BQU8sQ0FBQ3hCLFNBQVN5QixHQUFHLENBQUMsUUFBb0JDO2dCQUFuQixDQUFDbEIsTUFBTUYsVUFBVTttQkFDM0MsOERBQUNhO2dCQUFJRSxXQUFZOzBCQUNaYixPQUFPLE9BQU1GOzs7Ozs7UUFDYjs7Ozs7O0FBSXJCO0dBeERNUDtLQUFBQTtBQTBETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9saXN0L3BhZ2UuanM/M2MyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZvb2RMaXN0ID0gKHtmb29kT2JqLCBpbnB1dCwgdmFsaWRSZXNwb25zZSwgdmFsaWRSZXNwb25zZUZ9KSA9PiB7XG4gICAgY29uc3QgW2Rpc3BsYXlPYmpBcnIsIHNldERpc3BsYXlPYmpdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2Zvb2RDb3VudCwgc2V0Rm9vZENvdW50XSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGdldEZvb2RDb3VudCA9IChvYmosIGtleSkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgcmV0dXJuIG9iaj8ua2V5XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0Rm9vZE5hbWUgPSAob2JqLCBrZXkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAxKSBFZGl0IEFycmF5XG4gICAgbGV0IGNoZWNrRm9vZEV4aXN0cyA9IGRpc3BsYXlPYmpBcnIuZmluZCgob2JqZWN0KSA9PiB7XG4gICAgICAgIGlmKG9iamVjdC5mb29kID09PSBpbnB1dCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbmV3SXRlbSA9IFtcbiAgICAgICAgPGRpdiBrZXkgPSB7Zm9vZH0gY2xhc3MgPSB7Zm9vZH0gY2xhc3NOYW1lPSdib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMzYgbS0yIGJnLWN5YW4tNTAwIGp1Jz5cbiAgICAgICAgICAgIHtmb29kICsgXCIsIFwiICsgZm9vZENvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICBdXG5cbiAgICAvLyAyKSBBcHBlbmQgYXJyYXlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldEZvb2RDb3VudChnZXRGb29kQ291bnQoZm9vZE9iaiwgaW5wdXQpKVxuICAgICAgICBzZXRGb29kKGdldEZvb2ROYW1lKGZvb2RPYmosIGlucHV0KSlcblxuICAgICAgICBpZih2YWxpZFJlc3BvbnNlICYmICFjaGVja0Zvb2RFeGlzdHMpe1xuICAgICAgICAgICAgc2V0RGlzcGxheU9iaigocHJldk9iaikgPT4gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZPYmosIG5ld0l0ZW1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB2YWxpZFJlc3BvbnNlRihmYWxzZSkgICAgXG4gICAgICAgIH1cbiAgICB9LCBbdmFsaWRSZXNwb25zZV0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtMTQwIHctMTQ0IHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy15LWF1dG8nPlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGZvb2RPYmopLm1hcCgoW2Zvb2QsIGZvb2RDb3VudF0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTM2IG0tMiBiZy1jeWFuLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zm9vZCArIFwiLCBcIiArZm9vZENvdW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsInZhbGlkUmVzcG9uc2UiLCJ2YWxpZFJlc3BvbnNlRiIsImRpc3BsYXlPYmpBcnIiLCJzZXREaXNwbGF5T2JqIiwiZm9vZENvdW50Iiwic2V0Rm9vZENvdW50IiwiZm9vZCIsInNldEZvb2QiLCJnZXRGb29kQ291bnQiLCJvYmoiLCJrZXkiLCJnZXRGb29kTmFtZSIsImhhc093blByb3BlcnR5IiwiY2hlY2tGb29kRXhpc3RzIiwiZmluZCIsIm9iamVjdCIsIm5ld0l0ZW0iLCJkaXYiLCJjbGFzcyIsImNsYXNzTmFtZSIsInByZXZPYmoiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});