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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FoodList = (param)=>{\n    let { foodObj, input, validResponse, validResponseF } = param;\n    _s();\n    const [displayObjArr, setDisplayObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [foodCount, setFoodCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getFoodCount = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            var _obj;\n            return (_obj = obj) === null || _obj === void 0 ? void 0 : _obj.key;\n        }\n    };\n    const getFoodName = (obj, key)=>{\n        if (obj && typeof obj === \"object\") {\n            if (obj.hasOwnProperty(key)) {\n                return key;\n            }\n        }\n    };\n    // 1) Edit Array\n    let checkFoodExists = displayObjArr.find((object)=>{\n        if (object.food === input) {\n            return true;\n        }\n        return false;\n    });\n    const newItem = [\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: food,\n            className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text\",\n                children: food + \", \" + foodCount\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        }, food, false, {\n            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    ];\n    // 2) Append array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFoodCount(getFoodCount(foodObj, input));\n        setFood(getFoodName(foodObj, input));\n        if (validResponse && !checkFoodExists) {\n            setDisplayObj((prevObj)=>[\n                    ...prevObj,\n                    newItem\n                ]);\n            validResponseF(false);\n        }\n    }, [\n        validResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto\",\n        children: Object.entries(foodObj).map((param, i)=>/*#__PURE__*/ {\n            let [food, foodCount] = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box box-border rounded-xl h-36 m-2 bg-cyan-500\",\n                children: food + \", \" + foodCount\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/list/page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FoodList, \"UbYfZOxZgYBBiDKAJn/NMYGeexk=\");\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL2xpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUcsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBQzs7SUFDN0QsTUFBTSxDQUFDQyxlQUFlQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbEQsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYSxlQUFlLENBQUNDLEtBQUtDO1FBQ3ZCLElBQUdELE9BQU8sT0FBT0EsUUFBUSxVQUFTO2dCQUN2QkE7WUFBUCxRQUFPQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtDLEdBQUc7UUFDbkI7SUFDSjtJQUNBLE1BQU1DLGNBQWMsQ0FBQ0YsS0FBS0M7UUFDdEIsSUFBR0QsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBR0EsSUFBSUcsY0FBYyxDQUFDRixNQUFLO2dCQUN2QixPQUFPQTtZQUNYO1FBQ0o7SUFDSjtJQUVBLGdCQUFnQjtJQUNoQixJQUFJRyxrQkFBa0JYLGNBQWNZLElBQUksQ0FBQyxDQUFDQztRQUN0QyxJQUFHQSxPQUFPVCxJQUFJLEtBQUtQLE9BQU07WUFDckIsT0FBTztRQUNYO1FBQ0EsT0FBTztJQUNYO0lBRUEsTUFBTWlCLFVBQVU7c0JBQ1osOERBQUNDO1lBQWlCQyxPQUFTWjtZQUFNYSxXQUFVO3NCQUN2Qyw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQVFiLE9BQU8sT0FBT0Y7Ozs7OztXQUQzQkU7Ozs7O0tBR2Y7SUFFRCxrQkFBa0I7SUFDbEJWLGdEQUFTQSxDQUFDO1FBRU5TLGFBQWFHLGFBQWFWLFNBQVNDO1FBQ25DUSxRQUFRSSxZQUFZYixTQUFTQztRQUU3QixJQUFHQyxpQkFBaUIsQ0FBQ2EsaUJBQWdCO1lBQ2pDVixjQUFjLENBQUNrQixVQUFZO3VCQUNwQkE7b0JBQVNMO2lCQUNmO1lBQ0RmLGVBQWU7UUFDbkI7SUFDSixHQUFHO1FBQUNEO0tBQWM7SUFHbEIscUJBQ0ksOERBQUNpQjtRQUFJRSxXQUFVO2tCQUNWRyxPQUFPQyxPQUFPLENBQUN6QixTQUFTMEIsR0FBRyxDQUFDLFFBQW9CQztnQkFBbkIsQ0FBQ25CLE1BQU1GLFVBQVU7bUJBQzNDLDhEQUFDYTtnQkFBSUUsV0FBWTswQkFDWmIsT0FBTyxPQUFNRjs7Ozs7O1FBQ2I7Ozs7OztBQUlyQjtHQXhETVA7S0FBQUE7QUEwRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2UvbGlzdC9wYWdlLmpzPzNjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGb29kTGlzdCA9ICh7Zm9vZE9iaiwgaW5wdXQsIHZhbGlkUmVzcG9uc2UsIHZhbGlkUmVzcG9uc2VGfSkgPT4ge1xuICAgIGNvbnN0IFtkaXNwbGF5T2JqQXJyLCBzZXREaXNwbGF5T2JqXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtmb29kQ291bnQsIHNldEZvb2RDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBnZXRGb29kQ291bnQgPSAob2JqLCBrZXkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIHJldHVybiBvYmo/LmtleVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEZvb2ROYW1lID0gKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMSkgRWRpdCBBcnJheVxuICAgIGxldCBjaGVja0Zvb2RFeGlzdHMgPSBkaXNwbGF5T2JqQXJyLmZpbmQoKG9iamVjdCkgPT4ge1xuICAgICAgICBpZihvYmplY3QuZm9vZCA9PT0gaW5wdXQpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG5ld0l0ZW0gPSBbXG4gICAgICAgIDxkaXYga2V5ID0ge2Zvb2R9IGNsYXNzID0ge2Zvb2R9IGNsYXNzTmFtZT0nYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTM2IG0tMiBiZy1jeWFuLTUwMCAnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz57Zm9vZCArIFwiLCBcIiArIGZvb2RDb3VudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIF1cblxuICAgIC8vIDIpIEFwcGVuZCBhcnJheVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgc2V0Rm9vZENvdW50KGdldEZvb2RDb3VudChmb29kT2JqLCBpbnB1dCkpXG4gICAgICAgIHNldEZvb2QoZ2V0Rm9vZE5hbWUoZm9vZE9iaiwgaW5wdXQpKVxuXG4gICAgICAgIGlmKHZhbGlkUmVzcG9uc2UgJiYgIWNoZWNrRm9vZEV4aXN0cyl7XG4gICAgICAgICAgICBzZXREaXNwbGF5T2JqKChwcmV2T2JqKSA9PiBbXG4gICAgICAgICAgICAgICAgLi4ucHJldk9iaiwgbmV3SXRlbVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIHZhbGlkUmVzcG9uc2VGKGZhbHNlKSAgICBcbiAgICAgICAgfVxuICAgIH0sIFt2YWxpZFJlc3BvbnNlXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1ib3JkZXIgaC0xNDAgdy0xNDQgcC00IGJnLWdyYXktMjAwIHJvdW5kZWQtMnhsIG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZm9vZE9iaikubWFwKChbZm9vZCwgZm9vZENvdW50XSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMzYgbS0yIGJnLWN5YW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtmb29kICsgXCIsIFwiICtmb29kQ291bnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKSB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZExpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb2RMaXN0IiwiZm9vZE9iaiIsImlucHV0IiwidmFsaWRSZXNwb25zZSIsInZhbGlkUmVzcG9uc2VGIiwiZGlzcGxheU9iakFyciIsInNldERpc3BsYXlPYmoiLCJmb29kQ291bnQiLCJzZXRGb29kQ291bnQiLCJmb29kIiwic2V0Rm9vZCIsImdldEZvb2RDb3VudCIsIm9iaiIsImtleSIsImdldEZvb2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJjaGVja0Zvb2RFeGlzdHMiLCJmaW5kIiwib2JqZWN0IiwibmV3SXRlbSIsImRpdiIsImNsYXNzIiwiY2xhc3NOYW1lIiwicCIsInByZXZPYmoiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/list/page.js\n"));

/***/ })

});