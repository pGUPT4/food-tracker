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

/***/ "(app-pages-browser)/./app/today_page/search_and_suggestions/page.js":
/*!*******************************************************!*\
  !*** ./app/today_page/search_and_suggestions/page.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, foodObjF, inputF } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [dropdown, setDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [foodDictionary, setFoodDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}) // Gives me dropw down's list \n    ;\n    const [] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateObj = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const get_food_dict = () => {\n    //     return fetch(`http://127.0.0.1:5000/`)\n    //         .then((resp) => setFoodDictionary(resp))\n    //         .catch((e) => console.error(e))\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:5000/\").then((resp)=>{\n            if (!resp.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            return resp.json();\n        }).then((data)=>setFoodDictionary(data)).catch((e)=>console.error(e));\n    }, []);\n    const handleClick = ()=>{\n        inputF(query);\n        if (query != \" \") {\n            foodObjF(updateObj(foodObj, query)) // Updates database\n            ;\n        } else {\n            alert(\"Please select a food item\");\n        }\n        setQuery(\" \");\n        document.getElementById(\"myInput\").value = \"\";\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleClick();\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            setQuery(e.target.value);\n                        },\n                        onClick: ()=>setDropDown(!dropdown),\n                        onKeyDown: (e)=>handleKeyDown(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"5KdjcNpCzk29UeSH8eO1X+eSUtQ=\");\n_c = SearchAndSuggestion;\n// import { Fragment, useState } from 'react'\n// import { Combobox, Transition } from '@headlessui/react'\n// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'\n// const people = [\n//   { id: 1, name: 'Wade Cooper' },\n//   { id: 2, name: 'Arlene Mccoy' },\n//   { id: 3, name: 'Devon Webb' },\n//   { id: 4, name: 'Tom Cook' },\n//   { id: 5, name: 'Tanya Fox' },\n//   { id: 6, name: 'Hellen Schmidt' },\n// ]\n// export default function Example() {\n//   const [selected, setSelected] = useState(people[0])\n//   const [query, setQuery] = useState('')\n//   const filteredPeople =\n//     query === ''\n//       ? people\n//       : people.filter((person) =>\n//           person.name\n//             .toLowerCase()\n//             .replace(/\\s+/g, '')\n//             .includes(query.toLowerCase().replace(/\\s+/g, ''))\n//         )\n//   return (\n//     <div className=\"fixed top-16 w-72\">\n//       <Combobox value={selected} onChange={setSelected}>\n//         <div className=\"relative mt-1\">\n//           <div className=\"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm\">\n//             <Combobox.Input\n//               className=\"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0\"\n//               displayValue={(person) => person.name}\n//               onChange={(event) => setQuery(event.target.value)}\n//             />\n//             <Combobox.Button className=\"absolute inset-y-0 right-0 flex items-center pr-2\">\n//               <ChevronUpDownIcon\n//                 className=\"h-5 w-5 text-gray-400\"\n//                 aria-hidden=\"true\"\n//               />\n//             </Combobox.Button>\n//           </div>\n//           <Transition\n//             as={Fragment}\n//             leave=\"transition ease-in duration-100\"\n//             leaveFrom=\"opacity-100\"\n//             leaveTo=\"opacity-0\"\n//             afterLeave={() => setQuery('')}\n//           >\n//             <Combobox.Options className=\"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm\">\n//               {filteredPeople.length === 0 && query !== '' ? (\n//                 <div className=\"relative cursor-default select-none py-2 px-4 text-gray-700\">\n//                   Nothing found.\n//                 </div>\n//               ) : (\n//                 filteredPeople.map((person) => (\n//                   <Combobox.Option\n//                     key={person.id}\n//                     className={({ active }) =>\n//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${\n//                         active ? 'bg-teal-600 text-white' : 'text-gray-900'\n//                       }`\n//                     }\n//                     value={person}\n//                   >\n//                     {({ selected, active }) => (\n//                       <>\n//                         <span\n//                           className={`block truncate ${\n//                             selected ? 'font-medium' : 'font-normal'\n//                           }`}\n//                         >\n//                           {person.name}\n//                         </span>\n//                         {selected ? (\n//                           <span\n//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${\n//                               active ? 'text-white' : 'text-teal-600'\n//                             }`}\n//                           >\n//                             <CheckIcon className=\"h-5 w-5\" aria-hidden=\"true\" />\n//                           </span>\n//                         ) : null}\n//                       </>\n//                     )}\n//                   </Combobox.Option>\n//                 ))\n//               )}\n//             </Combobox.Options>\n//           </Transition>\n//         </div>\n//       </Combobox>\n//     </div>\n//   )\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMkM7QUFFM0MsTUFBTUUsc0JBQXNCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBQzs7SUFFcEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDLENBQUMsR0FBRyw4QkFBOEI7O0lBQ3ZGLE1BQU0sRUFBRSxHQUFHQSwrQ0FBUUE7SUFFbkIsdUNBQXVDO0lBQ3ZDLHdFQUF3RTtJQUV4RSxNQUFNVyxZQUFZLENBQUNDLEtBQUtQO1FBQ3BCLElBQUdPLE9BQU8sT0FBT0EsUUFBUSxVQUFTO1lBQzlCLElBQUcsQ0FBQ0EsSUFBSUMsY0FBYyxDQUFDUixRQUFPO2dCQUMxQk8sR0FBRyxDQUFDUCxNQUFNLEdBQUc7WUFDakIsT0FBSztnQkFDRE8sR0FBRyxDQUFDUCxNQUFNO1lBQ2Q7UUFDSjtRQUNBLE9BQU9PO0lBQ1g7SUFFQSxnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLG1EQUFtRDtJQUNuRCwwQ0FBMEM7SUFDMUMsSUFBSTtJQUVKYixnREFBU0EsQ0FBQztRQUNOZSxNQUFPLDBCQUNGQyxJQUFJLENBQUMsQ0FBQ0M7WUFDSCxJQUFJLENBQUNBLEtBQUtDLEVBQUUsRUFBRTtnQkFDVixNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxPQUFPRixLQUFLRyxJQUFJO1FBQ3BCLEdBQ0NKLElBQUksQ0FBQyxDQUFDSyxPQUFTVixrQkFBa0JVLE9BQ2pDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUMsUUFBUUMsS0FBSyxDQUFDRjtJQUVwQyxHQUFHLEVBQUU7SUFHTCxNQUFNRyxjQUFjO1FB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QSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcz85N2NmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgU2VhcmNoQW5kU3VnZ2VzdGlvbiA9ICh7Zm9vZE9iaiwgZm9vZE9iakYsIGlucHV0Rn0pID0+IHtcblxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCIgXCIpIFxuICAgIGNvbnN0IFtkcm9wZG93biwgc2V0RHJvcERvd25dID0gdXNlU3RhdGUoZmFsc2UpIFxuICAgIGNvbnN0IFtmb29kRGljdGlvbmFyeSwgc2V0Rm9vZERpY3Rpb25hcnldID0gdXNlU3RhdGUoe30pIC8vIEdpdmVzIG1lIGRyb3B3IGRvd24ncyBsaXN0IFxuICAgIGNvbnN0IFtdID0gdXNlU3RhdGUoKVxuXG4gICAgLy8gY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IChhcnJ5KSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBhcnJ5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFycnkuaW5kZXhPZihpdGVtKSA9PSBpbmRleCl9XG5cbiAgICBjb25zdCB1cGRhdGVPYmogPSAob2JqLCBxdWVyeSkgPT4ge1xuICAgICAgICBpZihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShxdWVyeSkpe1xuICAgICAgICAgICAgICAgIG9ialtxdWVyeV0gPSAxXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZ2V0X2Zvb2RfZGljdCA9ICgpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYClcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwKSA9PiBzZXRGb29kRGljdGlvbmFyeShyZXNwKSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSlcbiAgICAvLyB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2ApXG4gICAgICAgICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEZvb2REaWN0aW9uYXJ5KGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKVxuICAgICAgICBcbiAgICB9LCBbXSlcbiBcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaW5wdXRGKHF1ZXJ5KVxuICAgICAgICBpZihxdWVyeSAhPSBcIiBcIil7XG4gICAgICAgICAgICBmb29kT2JqRih1cGRhdGVPYmooZm9vZE9iaiwgcXVlcnkpKSAvLyBVcGRhdGVzIGRhdGFiYXNlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZm9vZCBpdGVtXCIpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRRdWVyeShcIiBcIilcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKS52YWx1ZSA9ICcnICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gU2VhcmNoIGJhciwgYnV0dG9uIHdpdGggc3VnZ2VzdGlvbiBib3hcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC13cmFwIGJveC1ib3JkZXIgYmctZ3JheS01MDAgcm91bmRlZC0yeGwgYm9yZGVyLWdyYXktOTUwIGJvcmRlci1yLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwibXlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbS0yIHctMTIwIGgtOCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiBzZXREcm9wRG93bighZHJvcGRvd24pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duID0geyhlKSA9PiBoYW5kbGVLZXlEb3duKGUpfS8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMjAgaC04IGJnLXdoaXRlIG0tMiByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgey8qIHtkcm9wZG93biA/IFxuICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiYm94LWJvcmRlciBoLTQ4IHctMTQ0IG0tMiBiZy13aGl0ZSBib3JkZXItMSByb3VuZGVkLTJ4bCBiZy1ncmV5LTIwMCBvdmVyZmxvdy15LWF1dG8nXCI+XG4gICAgICAgICAgICAgICAgLy8gICAgIHtPYmplY3QuZW50cmllcyhmb29kRGljdGlvbmFyeSkubWFwKChbaW5kZXgsIGZvb2RdKSA9PiB7ICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBrZXkgPSB7aW5kZXh9IGNsYXNzTmFtZSA9IFwiYm94IGJveC1ib3JkZXIgcm91bmRlZC14bCBoLTEwIG0tMiBiZy1jeWFuLTUwMFwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGp1c3RpZnktY2VudGVyJz57Zm9vZH08L3A+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pfVxuICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgOiBcIlwifSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1ib3JkZXIgaC00OCB3LTE0NCBtLTIgYmctZ3JheS0zMDAgYm9yZGVyLTEgcm91bmRlZC0yeGwgYmctZ3JleS0yMDAnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBDb21ib2JveCwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuLy8gaW1wb3J0IHsgQ2hlY2tJY29uLCBDaGV2cm9uVXBEb3duSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjAvc29saWQnXG5cbi8vIGNvbnN0IHBlb3BsZSA9IFtcbi8vICAgeyBpZDogMSwgbmFtZTogJ1dhZGUgQ29vcGVyJyB9LFxuLy8gICB7IGlkOiAyLCBuYW1lOiAnQXJsZW5lIE1jY295JyB9LFxuLy8gICB7IGlkOiAzLCBuYW1lOiAnRGV2b24gV2ViYicgfSxcbi8vICAgeyBpZDogNCwgbmFtZTogJ1RvbSBDb29rJyB9LFxuLy8gICB7IGlkOiA1LCBuYW1lOiAnVGFueWEgRm94JyB9LFxuLy8gICB7IGlkOiA2LCBuYW1lOiAnSGVsbGVuIFNjaG1pZHQnIH0sXG4vLyBdXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4vLyAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUocGVvcGxlWzBdKVxuLy8gICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxuXG4vLyAgIGNvbnN0IGZpbHRlcmVkUGVvcGxlID1cbi8vICAgICBxdWVyeSA9PT0gJydcbi8vICAgICAgID8gcGVvcGxlXG4vLyAgICAgICA6IHBlb3BsZS5maWx0ZXIoKHBlcnNvbikgPT5cbi8vICAgICAgICAgICBwZXJzb24ubmFtZVxuLy8gICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcnKVxuLy8gICAgICAgICAgICAgLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykpXG4vLyAgICAgICAgIClcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTE2IHctNzJcIj5cbi8vICAgICAgIDxDb21ib2JveCB2YWx1ZT17c2VsZWN0ZWR9IG9uQ2hhbmdlPXtzZXRTZWxlY3RlZH0+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMVwiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGN1cnNvci1kZWZhdWx0IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLXdoaXRlIHRleHQtbGVmdCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy13aGl0ZSBmb2N1cy12aXNpYmxlOnJpbmctb3BhY2l0eS03NSBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC10ZWFsLTMwMCBzbTp0ZXh0LXNtXCI+XG4vLyAgICAgICAgICAgICA8Q29tYm9ib3guSW5wdXRcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1ub25lIHB5LTIgcGwtMyBwci0xMCB0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktOTAwIGZvY3VzOnJpbmctMFwiXG4vLyAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT17KHBlcnNvbikgPT4gcGVyc29uLm5hbWV9XG4vLyAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPENvbWJvYm94LkJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwci0yXCI+XG4vLyAgICAgICAgICAgICAgIDxDaGV2cm9uVXBEb3duSWNvblxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4vLyAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgIDwvQ29tYm9ib3guQnV0dG9uPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxUcmFuc2l0aW9uXG4vLyAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4vLyAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDBcIlxuLy8gICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuLy8gICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4vLyAgICAgICAgICAgICBhZnRlckxlYXZlPXsoKSA9PiBzZXRRdWVyeSgnJyl9XG4vLyAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgPENvbWJvYm94Lk9wdGlvbnMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbXQtMSBtYXgtaC02MCB3LWZ1bGwgb3ZlcmZsb3ctYXV0byByb3VuZGVkLW1kIGJnLXdoaXRlIHB5LTEgdGV4dC1iYXNlIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmUgc206dGV4dC1zbVwiPlxuLy8gICAgICAgICAgICAgICB7ZmlsdGVyZWRQZW9wbGUubGVuZ3RoID09PSAwICYmIHF1ZXJ5ICE9PSAnJyA/IChcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwXCI+XG4vLyAgICAgICAgICAgICAgICAgICBOb3RoaW5nIGZvdW5kLlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICApIDogKFxuLy8gICAgICAgICAgICAgICAgIGZpbHRlcmVkUGVvcGxlLm1hcCgocGVyc29uKSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICA8Q29tYm9ib3guT3B0aW9uXG4vLyAgICAgICAgICAgICAgICAgICAgIGtleT17cGVyc29uLmlkfVxuLy8gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGFjdGl2ZSB9KSA9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgIGByZWxhdGl2ZSBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBweS0yIHBsLTEwIHByLTQgJHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy10ZWFsLTYwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktOTAwJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgIH1gXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcnNvbn1cbi8vICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgeyh7IHNlbGVjdGVkLCBhY3RpdmUgfSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB0cnVuY2F0ZSAke1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID8gJ2ZvbnQtbWVkaXVtJyA6ICdmb250LW5vcm1hbCdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb24ubmFtZX1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IChcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTMgJHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LXRlYWwtNjAwJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICl9XG4vLyAgICAgICAgICAgICAgICAgICA8L0NvbWJvYm94Lk9wdGlvbj5cbi8vICAgICAgICAgICAgICAgICApKVxuLy8gICAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgICAgPC9Db21ib2JveC5PcHRpb25zPlxuLy8gICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L0NvbWJvYm94PlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQW5kU3VnZ2VzdGlvbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaEFuZFN1Z2dlc3Rpb24iLCJmb29kT2JqIiwiZm9vZE9iakYiLCJpbnB1dEYiLCJxdWVyeSIsInNldFF1ZXJ5IiwiZHJvcGRvd24iLCJzZXREcm9wRG93biIsImZvb2REaWN0aW9uYXJ5Iiwic2V0Rm9vZERpY3Rpb25hcnkiLCJ1cGRhdGVPYmoiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDbGljayIsImFsZXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpbnB1dCIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIiwib25LZXlEb3duIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});