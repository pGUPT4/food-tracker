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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonClicked, buttonF, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    let foodCount = 0;\n    let food = \"\";\n    const getFoodCount = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            return obj[index];\n        }\n    };\n    const getFoodName = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(index)) {\n                return index;\n            }\n        }\n    };\n    foodCount = getFoodCount(foodObj, input);\n    food = getFoodName(foodObj, input);\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n            children: food + \", \" + foodCount\n        }, void 0, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    ];\n    let hasFoodExisted = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n        return false;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (validResponse) {\n            if (hasFoodExisted) {\n                displayObjArr.find((index)=>{\n                    displayObjArr[index] = {\n                        food: foodCount\n                    };\n                });\n            }\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            buttonF(false);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: displayObjArr\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"P2Wf47eq8mX1PE1HdVwtIpTyfbU=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUM7O0lBQ3JGLE1BQU0sQ0FBQ0MsZUFBZUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2xELHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MsSUFBSVcsWUFBWTtJQUNoQixJQUFJQyxPQUFPO0lBRVgsTUFBTUMsZUFBZSxDQUFDQyxLQUFLQztRQUN2QixJQUFHRCxPQUFPLE9BQU9BLFFBQVEsVUFBUztZQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU07UUFDckI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixRQUFPO2dCQUN6QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBSixZQUFZRSxhQUFhVixTQUFTQztJQUNsQ1EsT0FBT0ksWUFBWWIsU0FBU0M7SUFFNUIsTUFBTWMsVUFBVTtzQkFDWiw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDVlIsT0FBTyxPQUFPRDs7Ozs7O0tBRXRCO0lBR0QsSUFBSVUsaUJBQWlCWixjQUFjYSxJQUFJLENBQUMsQ0FBQ0M7UUFDckMsSUFBR0EsT0FBT1gsSUFBSSxLQUFLUixPQUFNO1lBQ3JCLE9BQU87UUFDWDtRQUNBLE9BQU87SUFDWDtJQUVBSCxnREFBU0EsQ0FBQztRQUNOLElBQUdNLGVBQWM7WUFDYixJQUFHYyxnQkFBZTtnQkFDZFosY0FBY2EsSUFBSSxDQUFDLENBQUNQO29CQUNoQk4sYUFBYSxDQUFDTSxNQUFNLEdBQUc7d0JBQUNILE1BQU1EO29CQUFTO2dCQUMzQztZQUNKO1lBQ0lELGNBQWMsQ0FBQ2MsVUFBWTt1QkFDcEJBO29CQUFTTjtpQkFDZjtZQUNEWixRQUFRO1lBQ1JFLGVBQWU7UUFDdkI7SUFDSixHQUFHO1FBQUNEO0tBQWM7SUFFbEIscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7a0JBQ1ZYOzs7Ozs7QUFHYjtHQXpETVA7S0FBQUE7QUEyRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2UvbGlzdC9wYWdlLmpzPzNjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGb29kTGlzdCA9ICh7Zm9vZE9iaiwgaW5wdXQsIGJ1dHRvbkNsaWNrZWQsIGJ1dHRvbkYsIHZhbGlkUmVzcG9uc2UsIHZhbGlkUmVzcG9uc2VGfSkgPT4ge1xuICAgIGNvbnN0IFtkaXNwbGF5T2JqQXJyLCBzZXREaXNwbGF5T2JqXSA9IHVzZVN0YXRlKFtdKVxuICAgIC8vIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKDApXG4gICAgLy8gY29uc3QgZm9vZEl0ZW0gPSBmb29kT2JqW2Zvb2RBcnIubGVuZ3RoIC0gMV1cbiAgICBsZXQgZm9vZENvdW50ID0gMFxuICAgIGxldCBmb29kID0gXCJcIlxuXG4gICAgY29uc3QgZ2V0Rm9vZENvdW50ID0gKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIHJldHVybiBvYmpbaW5kZXhdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0Rm9vZE5hbWUgPSAob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGluZGV4KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb29kQ291bnQgPSBnZXRGb29kQ291bnQoZm9vZE9iaiwgaW5wdXQpXG4gICAgZm9vZCA9IGdldEZvb2ROYW1lKGZvb2RPYmosIGlucHV0KVxuICAgIFxuICAgIGNvbnN0IG5ld0l0ZW0gPSBbXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMzYgbS0yIGJnLWN5YW4tNTAwJz5cbiAgICAgICAgICAgIHtmb29kICsgXCIsIFwiICsgZm9vZENvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICBdXG5cblxuICAgIGxldCBoYXNGb29kRXhpc3RlZCA9IGRpc3BsYXlPYmpBcnIuZmluZCgob2JqZWN0KSA9PiB7XG4gICAgICAgIGlmKG9iamVjdC5mb29kID09PSBpbnB1dCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZih2YWxpZFJlc3BvbnNlKXtcbiAgICAgICAgICAgIGlmKGhhc0Zvb2RFeGlzdGVkKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5T2JqQXJyLmZpbmQoKGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlPYmpBcnJbaW5kZXhdID0ge2Zvb2Q6IGZvb2RDb3VudH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldERpc3BsYXlPYmooKHByZXZPYmopID0+IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldk9iaiwgbmV3SXRlbVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgYnV0dG9uRihmYWxzZSlcbiAgICAgICAgICAgICAgICB2YWxpZFJlc3BvbnNlRihmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFt2YWxpZFJlc3BvbnNlXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtMTQwIHctMTQ0IHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy15LWF1dG8nPlxuICAgICAgICAgICAge2Rpc3BsYXlPYmpBcnJ9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZExpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb2RMaXN0IiwiZm9vZE9iaiIsImlucHV0IiwiYnV0dG9uQ2xpY2tlZCIsImJ1dHRvbkYiLCJ2YWxpZFJlc3BvbnNlIiwidmFsaWRSZXNwb25zZUYiLCJkaXNwbGF5T2JqQXJyIiwic2V0RGlzcGxheU9iaiIsImZvb2RDb3VudCIsImZvb2QiLCJnZXRGb29kQ291bnQiLCJvYmoiLCJpbmRleCIsImdldEZvb2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuZXdJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGFzRm9vZEV4aXN0ZWQiLCJmaW5kIiwib2JqZWN0IiwicHJldk9iaiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});