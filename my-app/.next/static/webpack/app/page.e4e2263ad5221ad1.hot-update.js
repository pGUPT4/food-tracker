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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, buttonClicked, buttonF, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [test, setTest] = useState(0)\n    // const foodItem = foodObj[foodArr.length - 1]\n    let foodCount = 0;\n    let food = \"\";\n    const getFoodCount = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            return obj[index];\n        }\n    };\n    const getFoodName = (obj, index)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(index)) {\n                return index;\n            }\n        }\n    };\n    foodCount = getFoodCount(foodObj, input);\n    food = getFoodName(foodObj, input);\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n            children: food + \", \" + foodCount\n        }, void 0, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    ];\n    let hasfoodExisted = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (validResponse) {\n            if (hasFoodExisted) {\n                displayObjArr.find((object)=>{});\n            }\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            buttonF(false);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: displayObjArr\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"P2Wf47eq8mX1PE1HdVwtIpTyfbU=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUM7O0lBQ3JGLE1BQU0sQ0FBQ0MsZUFBZUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2xELHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MsSUFBSVcsWUFBWTtJQUNoQixJQUFJQyxPQUFPO0lBRVgsTUFBTUMsZUFBZSxDQUFDQyxLQUFLQztRQUN2QixJQUFHRCxPQUFPLE9BQU9BLFFBQVEsVUFBUztZQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU07UUFDckI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixRQUFPO2dCQUN6QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBSixZQUFZRSxhQUFhVixTQUFTQztJQUNsQ1EsT0FBT0ksWUFBWWIsU0FBU0M7SUFFNUIsTUFBTWMsVUFBVTtzQkFDWiw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDVlIsT0FBTyxPQUFPRDs7Ozs7O0tBRXRCO0lBR0QsSUFBSVUsaUJBQWlCWixjQUFjYSxJQUFJLENBQUMsQ0FBQ0M7UUFDckMsSUFBR0EsT0FBT1gsSUFBSSxLQUFLUixPQUFNO1lBQ3JCLE9BQU87UUFDWDtJQUNKO0lBRUFILGdEQUFTQSxDQUFDO1FBQ04sSUFBR00sZUFBYztZQUNiLElBQUdpQixnQkFBZTtnQkFDZGYsY0FBY2EsSUFBSSxDQUFDLENBQUNDLFVBRXBCO1lBQ0o7WUFDSWIsY0FBYyxDQUFDZSxVQUFZO3VCQUNwQkE7b0JBQVNQO2lCQUNmO1lBQ0RaLFFBQVE7WUFDUkUsZUFBZTtRQUN2QjtJQUNKLEdBQUc7UUFBQ0Q7S0FBYztJQUVsQixxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDVlg7Ozs7OztBQUdiO0dBeERNUDtLQUFBQTtBQTBETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9saXN0L3BhZ2UuanM/M2MyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZvb2RMaXN0ID0gKHtmb29kT2JqLCBpbnB1dCwgYnV0dG9uQ2xpY2tlZCwgYnV0dG9uRiwgdmFsaWRSZXNwb25zZSwgdmFsaWRSZXNwb25zZUZ9KSA9PiB7XG4gICAgY29uc3QgW2Rpc3BsYXlPYmpBcnIsIHNldERpc3BsYXlPYmpdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoMClcbiAgICAvLyBjb25zdCBmb29kSXRlbSA9IGZvb2RPYmpbZm9vZEFyci5sZW5ndGggLSAxXVxuICAgIGxldCBmb29kQ291bnQgPSAwXG4gICAgbGV0IGZvb2QgPSBcIlwiXG5cbiAgICBjb25zdCBnZXRGb29kQ291bnQgPSAob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgcmV0dXJuIG9ialtpbmRleF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRGb29kTmFtZSA9IChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaW5kZXgpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvb2RDb3VudCA9IGdldEZvb2RDb3VudChmb29kT2JqLCBpbnB1dClcbiAgICBmb29kID0gZ2V0Rm9vZE5hbWUoZm9vZE9iaiwgaW5wdXQpXG4gICAgXG4gICAgY29uc3QgbmV3SXRlbSA9IFtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCBib3gtYm9yZGVyIHJvdW5kZWQteGwgaC0zNiBtLTIgYmctY3lhbi01MDAnPlxuICAgICAgICAgICAge2Zvb2QgKyBcIiwgXCIgKyBmb29kQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgIF1cblxuXG4gICAgbGV0IGhhc2Zvb2RFeGlzdGVkID0gZGlzcGxheU9iakFyci5maW5kKChvYmplY3QpID0+IHtcbiAgICAgICAgaWYob2JqZWN0LmZvb2QgPT09IGlucHV0KXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYodmFsaWRSZXNwb25zZSl7XG4gICAgICAgICAgICBpZihoYXNGb29kRXhpc3RlZCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheU9iakFyci5maW5kKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5T2JqKChwcmV2T2JqKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZPYmosIG5ld0l0ZW1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIGJ1dHRvbkYoZmFsc2UpXG4gICAgICAgICAgICAgICAgdmFsaWRSZXNwb25zZUYoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9LCBbdmFsaWRSZXNwb25zZV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTE0MCB3LTE0NCBwLTQgYmctZ3JheS0yMDAgcm91bmRlZC0yeGwgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgIHtkaXNwbGF5T2JqQXJyfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb29kTGlzdCIsImZvb2RPYmoiLCJpbnB1dCIsImJ1dHRvbkNsaWNrZWQiLCJidXR0b25GIiwidmFsaWRSZXNwb25zZSIsInZhbGlkUmVzcG9uc2VGIiwiZGlzcGxheU9iakFyciIsInNldERpc3BsYXlPYmoiLCJmb29kQ291bnQiLCJmb29kIiwiZ2V0Rm9vZENvdW50Iiwib2JqIiwiaW5kZXgiLCJnZXRGb29kTmFtZSIsImhhc093blByb3BlcnR5IiwibmV3SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImhhc2Zvb2RFeGlzdGVkIiwiZmluZCIsIm9iamVjdCIsImhhc0Zvb2RFeGlzdGVkIiwicHJldk9iaiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});