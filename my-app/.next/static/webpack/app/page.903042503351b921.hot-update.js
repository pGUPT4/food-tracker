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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [foodCount, setFoodCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getFoodCount = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            var _obj;\n            return (_obj = obj) === null || _obj === void 0 ? void 0 : _obj.key;\n        }\n    };\n    const getFoodName = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(key)) {\n                return key;\n            }\n        }\n    };\n    // 1) Edit Array\n    let checkFoodExists = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n        return false;\n    });\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: food,\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-3xl text-center text-white\",\n                children: food + \", \" + foodCount\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        }, food, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    ];\n    // 2) Append array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodCount(getFoodCount(foodObj, input));\n        setFood(getFoodName(foodObj, input));\n        if (validResponse && !checkFoodExists) {\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>/*#__PURE__*/ {\n            let [food, foodCount] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                children: food + \", \" + foodCount\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"UbYfZOxZgYBBiDKAJn/NMYGeexk=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBQzs7SUFDN0QsTUFBTSxDQUFDQyxlQUFlQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbEQsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYSxlQUFlLENBQUNDLEtBQUtDO1FBQ3ZCLElBQUdELE9BQU8sT0FBT0EsUUFBUSxVQUFTO2dCQUN2QkE7WUFBUCxRQUFPQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtDLEdBQUc7UUFDbkI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixNQUFLO2dCQUN2QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBLGdCQUFnQjtJQUNoQixJQUFJRyxrQkFBa0JYLGNBQWNZLElBQUksQ0FBQyxDQUFDQztRQUN0QyxJQUFHQSxPQUFPVCxJQUFJLEtBQUtQLE9BQU07WUFDckIsT0FBTztRQUNYO1FBQ0EsT0FBTztJQUNYO0lBRUEsTUFBTWlCLFVBQVU7c0JBQ1osOERBQUNDO1lBQWlCQyxPQUFTWjtZQUFNYSxXQUFVO3NCQUN2Qyw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQW1DYixPQUFPLE9BQU9GOzs7Ozs7V0FEdERFOzs7OztLQUdmO0lBRUQsa0JBQWtCO0lBQ2xCVixnREFBU0EsQ0FBQztRQUVOUyxhQUFhRyxhQUFhVixTQUFTQztRQUNuQ1EsUUFBUUksWUFBWWIsU0FBU0M7UUFFN0IsSUFBR0MsaUJBQWlCLENBQUNhLGlCQUFnQjtZQUNqQ1YsY0FBYyxDQUFDa0IsVUFBWTt1QkFDcEJBO29CQUFTTDtpQkFDZjtZQUNEZixlQUFlO1FBQ25CO0lBQ0osR0FBRztRQUFDRDtLQUFjO0lBR2xCLHFCQUNJLDhEQUFDaUI7UUFBSUUsV0FBVTtrQkFDVkcsT0FBT0MsT0FBTyxDQUFDekIsU0FBUzBCLEdBQUcsQ0FBQyxRQUFvQkM7Z0JBQW5CLENBQUNuQixNQUFNRixVQUFVO21CQUMzQyw4REFBQ2E7Z0JBQUlFLFdBQVk7MEJBQ1piLE9BQU8sT0FBTUY7Ozs7OztRQUNiOzs7Ozs7QUFJckI7R0F4RE1QO0tBQUFBO0FBMEROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcz8zYzJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgRm9vZExpc3QgPSAoe2Zvb2RPYmosIGlucHV0LCB2YWxpZFJlc3BvbnNlLCB2YWxpZFJlc3BvbnNlRn0pID0+IHtcbiAgICBjb25zdCBbZGlzcGxheU9iakFyciwgc2V0RGlzcGxheU9ial0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbZm9vZENvdW50LCBzZXRGb29kQ291bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgZ2V0Rm9vZENvdW50ID0gKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICByZXR1cm4gb2JqPy5rZXlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRGb29kTmFtZSA9IChvYmosIGtleSkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDEpIEVkaXQgQXJyYXlcbiAgICBsZXQgY2hlY2tGb29kRXhpc3RzID0gZGlzcGxheU9iakFyci5maW5kKChvYmplY3QpID0+IHtcbiAgICAgICAgaWYob2JqZWN0LmZvb2QgPT09IGlucHV0KXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBuZXdJdGVtID0gW1xuICAgICAgICA8ZGl2IGtleSA9IHtmb29kfSBjbGFzcyA9IHtmb29kfSBjbGFzc05hbWU9J2JveCBib3gtYm9yZGVyIHJvdW5kZWQteGwgaC0zNiBtLTIgYmctY3lhbi01MDAgJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSc+e2Zvb2QgKyBcIiwgXCIgKyBmb29kQ291bnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBdXG5cbiAgICAvLyAyKSBBcHBlbmQgYXJyYXlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldEZvb2RDb3VudChnZXRGb29kQ291bnQoZm9vZE9iaiwgaW5wdXQpKVxuICAgICAgICBzZXRGb29kKGdldEZvb2ROYW1lKGZvb2RPYmosIGlucHV0KSlcblxuICAgICAgICBpZih2YWxpZFJlc3BvbnNlICYmICFjaGVja0Zvb2RFeGlzdHMpe1xuICAgICAgICAgICAgc2V0RGlzcGxheU9iaigocHJldk9iaikgPT4gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZPYmosIG5ld0l0ZW1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB2YWxpZFJlc3BvbnNlRihmYWxzZSkgICAgXG4gICAgICAgIH1cbiAgICB9LCBbdmFsaWRSZXNwb25zZV0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtMTQwIHctMTQ0IHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy15LWF1dG8nPlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGZvb2RPYmopLm1hcCgoW2Zvb2QsIGZvb2RDb3VudF0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTM2IG0tMiBiZy1jeWFuLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zm9vZCArIFwiLCBcIiArZm9vZENvdW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsInZhbGlkUmVzcG9uc2UiLCJ2YWxpZFJlc3BvbnNlRiIsImRpc3BsYXlPYmpBcnIiLCJzZXREaXNwbGF5T2JqIiwiZm9vZENvdW50Iiwic2V0Rm9vZENvdW50IiwiZm9vZCIsInNldEZvb2QiLCJnZXRGb29kQ291bnQiLCJvYmoiLCJrZXkiLCJnZXRGb29kTmFtZSIsImhhc093blByb3BlcnR5IiwiY2hlY2tGb29kRXhpc3RzIiwiZmluZCIsIm9iamVjdCIsIm5ld0l0ZW0iLCJkaXYiLCJjbGFzcyIsImNsYXNzTmFtZSIsInAiLCJwcmV2T2JqIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});