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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst get_food_dict = ()=>{\n    return fetch(\"http://127.0.0.1:5000/\");\n};\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, foodObjF, inputF } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [dropdown, setDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateObj = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    const handleClick = ()=>{\n        inputF(query);\n        if (query != \" \") {\n            foodObjF(updateObj(foodObj, query)) // Updates database\n            ;\n        } else {\n            alert(\"Please select a food item\");\n        }\n        setQuery(\" \");\n        document.getElementById(\"myInput\").value = \"\";\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleClick();\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            setQuery(e.target.value);\n                        },\n                        onClick: ()=>setDropDown(!dropdown),\n                        onKeyDown: (e)=>handleKeyDown(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            dropdown ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-white border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, undefined) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"YzOf2Bvy25jptxKbK4MjXvmh4fQ=\");\n_c = SearchAndSuggestion;\n// import { Fragment, useState } from 'react'\n// import { Combobox, Transition } from '@headlessui/react'\n// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'\n// const people = [\n//   { id: 1, name: 'Wade Cooper' },\n//   { id: 2, name: 'Arlene Mccoy' },\n//   { id: 3, name: 'Devon Webb' },\n//   { id: 4, name: 'Tom Cook' },\n//   { id: 5, name: 'Tanya Fox' },\n//   { id: 6, name: 'Hellen Schmidt' },\n// ]\n// export default function Example() {\n//   const [selected, setSelected] = useState(people[0])\n//   const [query, setQuery] = useState('')\n//   const filteredPeople =\n//     query === ''\n//       ? people\n//       : people.filter((person) =>\n//           person.name\n//             .toLowerCase()\n//             .replace(/\\s+/g, '')\n//             .includes(query.toLowerCase().replace(/\\s+/g, ''))\n//         )\n//   return (\n//     <div className=\"fixed top-16 w-72\">\n//       <Combobox value={selected} onChange={setSelected}>\n//         <div className=\"relative mt-1\">\n//           <div className=\"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm\">\n//             <Combobox.Input\n//               className=\"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0\"\n//               displayValue={(person) => person.name}\n//               onChange={(event) => setQuery(event.target.value)}\n//             />\n//             <Combobox.Button className=\"absolute inset-y-0 right-0 flex items-center pr-2\">\n//               <ChevronUpDownIcon\n//                 className=\"h-5 w-5 text-gray-400\"\n//                 aria-hidden=\"true\"\n//               />\n//             </Combobox.Button>\n//           </div>\n//           <Transition\n//             as={Fragment}\n//             leave=\"transition ease-in duration-100\"\n//             leaveFrom=\"opacity-100\"\n//             leaveTo=\"opacity-0\"\n//             afterLeave={() => setQuery('')}\n//           >\n//             <Combobox.Options className=\"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm\">\n//               {filteredPeople.length === 0 && query !== '' ? (\n//                 <div className=\"relative cursor-default select-none py-2 px-4 text-gray-700\">\n//                   Nothing found.\n//                 </div>\n//               ) : (\n//                 filteredPeople.map((person) => (\n//                   <Combobox.Option\n//                     key={person.id}\n//                     className={({ active }) =>\n//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${\n//                         active ? 'bg-teal-600 text-white' : 'text-gray-900'\n//                       }`\n//                     }\n//                     value={person}\n//                   >\n//                     {({ selected, active }) => (\n//                       <>\n//                         <span\n//                           className={`block truncate ${\n//                             selected ? 'font-medium' : 'font-normal'\n//                           }`}\n//                         >\n//                           {person.name}\n//                         </span>\n//                         {selected ? (\n//                           <span\n//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${\n//                               active ? 'text-white' : 'text-teal-600'\n//                             }`}\n//                           >\n//                             <CheckIcon className=\"h-5 w-5\" aria-hidden=\"true\" />\n//                           </span>\n//                         ) : null}\n//                       </>\n//                     )}\n//                   </Combobox.Option>\n//                 ))\n//               )}\n//             </Combobox.Options>\n//           </Transition>\n//         </div>\n//       </Combobox>\n//     </div>\n//   )\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0M7QUFFaEMsTUFBTUMsZ0JBQWdCO0lBQ2xCLE9BQU9DLE1BQU87QUFDbEI7QUFFQSxNQUFNQyxzQkFBc0I7UUFBQyxFQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFDOztJQUVwRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXpDLHVDQUF1QztJQUN2Qyx3RUFBd0U7SUFFeEUsTUFBTVcsWUFBWSxDQUFDQyxLQUFLTDtRQUNwQixJQUFHSyxPQUFPLE9BQU9BLFFBQVEsVUFBUztZQUM5QixJQUFHLENBQUNBLElBQUlDLGNBQWMsQ0FBQ04sUUFBTztnQkFDMUJLLEdBQUcsQ0FBQ0wsTUFBTSxHQUFHO1lBQ2pCLE9BQUs7Z0JBQ0RLLEdBQUcsQ0FBQ0wsTUFBTTtZQUNkO1FBQ0o7UUFDQSxPQUFPSztJQUNYO0lBR0EsTUFBTUUsY0FBYztRQUVoQlIsT0FBT0M7UUFDUCxJQUFHQSxTQUFTLEtBQUk7WUFDWkYsU0FBU00sVUFBVVAsU0FBU0csUUFBUSxtQkFBbUI7O1FBQzNELE9BQUs7WUFDRFEsTUFBTTtRQUNWO1FBRUFQLFNBQVM7UUFDVFEsU0FBU0MsY0FBYyxDQUFDLFdBQVdDLEtBQUssR0FBRztJQUMvQztJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNuQixJQUFHQSxFQUFFQyxHQUFHLEtBQUssU0FBUTtZQUNqQlA7UUFDSjtJQUNKO0lBRUEsT0FDSSx5Q0FBeUM7a0JBQ3pDLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUVaLDhEQUFDRTt3QkFDR0MsSUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksVUFBWSxDQUFDUDs0QkFDVFosU0FBU1ksRUFBRVEsTUFBTSxDQUFDVixLQUFLO3dCQUMzQjt3QkFFQVcsU0FBVyxJQUFNbkIsWUFBWSxDQUFDRDt3QkFFOUJxQixXQUFhLENBQUNWLElBQU1ELGNBQWNDOzs7Ozs7a0NBRXRDLDhEQUFDVzt3QkFDR1IsV0FBVTt3QkFDVlMsTUFBSzt3QkFDTEgsU0FBV2Y7a0NBQWE7Ozs7Ozs7Ozs7OztZQU0vQkwseUJBQ0csOERBQUNhO2dCQUFJQyxXQUFVOzs7Ozs0QkFFakI7MEJBRUYsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7R0ExRU1wQjtLQUFBQTtBQTRFTiw2Q0FBNkM7QUFDN0MsMkRBQTJEO0FBQzNELDJFQUEyRTtBQUUzRSxtQkFBbUI7QUFDbkIsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyx1Q0FBdUM7QUFDdkMsSUFBSTtBQUVKLHNDQUFzQztBQUN0Qyx3REFBd0Q7QUFDeEQsMkNBQTJDO0FBRTNDLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyx3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLG1DQUFtQztBQUNuQyxpRUFBaUU7QUFDakUsWUFBWTtBQUVaLGFBQWE7QUFDYiwwQ0FBMEM7QUFDMUMsMkRBQTJEO0FBQzNELDBDQUEwQztBQUMxQyw4UkFBOFI7QUFDOVIsOEJBQThCO0FBQzlCLDRHQUE0RztBQUM1Ryx1REFBdUQ7QUFDdkQsbUVBQW1FO0FBQ25FLGlCQUFpQjtBQUNqQiw4RkFBOEY7QUFDOUYsbUNBQW1DO0FBQ25DLG9EQUFvRDtBQUNwRCxxQ0FBcUM7QUFDckMsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQyxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixzREFBc0Q7QUFDdEQsc0NBQXNDO0FBQ3RDLGtDQUFrQztBQUNsQyw4Q0FBOEM7QUFDOUMsY0FBYztBQUNkLHFNQUFxTTtBQUNyTSxpRUFBaUU7QUFDakUsZ0dBQWdHO0FBQ2hHLG1DQUFtQztBQUNuQyx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLG1EQUFtRDtBQUNuRCxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDLGlEQUFpRDtBQUNqRCxnRkFBZ0Y7QUFDaEYsOEVBQThFO0FBQzlFLDJCQUEyQjtBQUMzQix3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLHNCQUFzQjtBQUN0QixtREFBbUQ7QUFDbkQsMkJBQTJCO0FBQzNCLGdDQUFnQztBQUNoQywwREFBMEQ7QUFDMUQsdUVBQXVFO0FBQ3ZFLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsMENBQTBDO0FBQzFDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMsa0NBQWtDO0FBQ2xDLDhGQUE4RjtBQUM5Rix3RUFBd0U7QUFDeEUsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QixtRkFBbUY7QUFDbkYsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCLHVDQUF1QztBQUN2QyxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGtDQUFrQztBQUNsQywwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFHSiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcz85N2NmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGdldF9mb29kX2RpY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYClcbn1cblxuY29uc3QgU2VhcmNoQW5kU3VnZ2VzdGlvbiA9ICh7Zm9vZE9iaiwgZm9vZE9iakYsIGlucHV0Rn0pID0+IHtcblxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCIgXCIpXG4gICAgY29uc3QgW2Ryb3Bkb3duLCBzZXREcm9wRG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIC8vIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyeSkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gYXJyeS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnJ5LmluZGV4T2YoaXRlbSkgPT0gaW5kZXgpfVxuXG4gICAgY29uc3QgdXBkYXRlT2JqID0gKG9iaiwgcXVlcnkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocXVlcnkpKXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldID0gMVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiBcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaW5wdXRGKHF1ZXJ5KVxuICAgICAgICBpZihxdWVyeSAhPSBcIiBcIil7XG4gICAgICAgICAgICBmb29kT2JqRih1cGRhdGVPYmooZm9vZE9iaiwgcXVlcnkpKSAvLyBVcGRhdGVzIGRhdGFiYXNlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZm9vZCBpdGVtXCIpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRRdWVyeShcIiBcIilcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKS52YWx1ZSA9ICcnICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gU2VhcmNoIGJhciwgYnV0dG9uIHdpdGggc3VnZ2VzdGlvbiBib3hcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC13cmFwIGJveC1ib3JkZXIgYmctZ3JheS01MDAgcm91bmRlZC0yeGwgYm9yZGVyLWdyYXktOTUwIGJvcmRlci1yLWJsdWUtNjAwJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZCA9IFwibXlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbS0yIHctMTIwIGgtOCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiBzZXREcm9wRG93bighZHJvcGRvd24pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duID0geyhlKSA9PiBoYW5kbGVLZXlEb3duKGUpfS8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMjAgaC04IGJnLXdoaXRlIG0tMiByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAge2Ryb3Bkb3duID8gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1ib3JkZXIgaC00OCB3LTE0NCBtLTIgYmctd2hpdGUgYm9yZGVyLTEgcm91bmRlZC0yeGwgYmctZ3JleS0yMDAnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94LWJvcmRlciBoLTQ4IHctMTQ0IG0tMiBiZy1ncmF5LTMwMCBib3JkZXItMSByb3VuZGVkLTJ4bCBiZy1ncmV5LTIwMCc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IENvbWJvYm94LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG4vLyBpbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25VcERvd25JY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZCdcblxuLy8gY29uc3QgcGVvcGxlID0gW1xuLy8gICB7IGlkOiAxLCBuYW1lOiAnV2FkZSBDb29wZXInIH0sXG4vLyAgIHsgaWQ6IDIsIG5hbWU6ICdBcmxlbmUgTWNjb3knIH0sXG4vLyAgIHsgaWQ6IDMsIG5hbWU6ICdEZXZvbiBXZWJiJyB9LFxuLy8gICB7IGlkOiA0LCBuYW1lOiAnVG9tIENvb2snIH0sXG4vLyAgIHsgaWQ6IDUsIG5hbWU6ICdUYW55YSBGb3gnIH0sXG4vLyAgIHsgaWQ6IDYsIG5hbWU6ICdIZWxsZW4gU2NobWlkdCcgfSxcbi8vIF1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbi8vICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShwZW9wbGVbMF0pXG4vLyAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpXG5cbi8vICAgY29uc3QgZmlsdGVyZWRQZW9wbGUgPVxuLy8gICAgIHF1ZXJ5ID09PSAnJ1xuLy8gICAgICAgPyBwZW9wbGVcbi8vICAgICAgIDogcGVvcGxlLmZpbHRlcigocGVyc29uKSA9PlxuLy8gICAgICAgICAgIHBlcnNvbi5uYW1lXG4vLyAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJycpXG4vLyAgICAgICAgICAgICAuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcnKSlcbi8vICAgICAgICAgKVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMTYgdy03MlwiPlxuLy8gICAgICAgPENvbWJvYm94IHZhbHVlPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3NldFNlbGVjdGVkfT5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xXCI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgY3Vyc29yLWRlZmF1bHQgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctd2hpdGUgdGV4dC1sZWZ0IHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlIGZvY3VzLXZpc2libGU6cmluZy1vcGFjaXR5LTc1IGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LXRlYWwtMzAwIHNtOnRleHQtc21cIj5cbi8vICAgICAgICAgICAgIDxDb21ib2JveC5JbnB1dFxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLW5vbmUgcHktMiBwbC0zIHByLTEwIHRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS05MDAgZm9jdXM6cmluZy0wXCJcbi8vICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlPXsocGVyc29uKSA9PiBwZXJzb24ubmFtZX1cbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8Q29tYm9ib3guQnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTJcIj5cbi8vICAgICAgICAgICAgICAgPENoZXZyb25VcERvd25JY29uXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWdyYXktNDAwXCJcbi8vICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPC9Db21ib2JveC5CdXR0b24+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPFRyYW5zaXRpb25cbi8vICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbi8vICAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMFwiXG4vLyAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4vLyAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbi8vICAgICAgICAgICAgIGFmdGVyTGVhdmU9eygpID0+IHNldFF1ZXJ5KCcnKX1cbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8Q29tYm9ib3guT3B0aW9ucyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtdC0xIG1heC1oLTYwIHctZnVsbCBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtbWQgYmctd2hpdGUgcHktMSB0ZXh0LWJhc2Ugc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZSBzbTp0ZXh0LXNtXCI+XG4vLyAgICAgICAgICAgICAgIHtmaWx0ZXJlZFBlb3BsZS5sZW5ndGggPT09IDAgJiYgcXVlcnkgIT09ICcnID8gKFxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgcHktMiBweC00IHRleHQtZ3JheS03MDBcIj5cbi8vICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgZm91bmQuXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgICAgICAgZmlsdGVyZWRQZW9wbGUubWFwKChwZXJzb24pID0+IChcbi8vICAgICAgICAgICAgICAgICAgIDxDb21ib2JveC5PcHRpb25cbi8vICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJzb24uaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgYWN0aXZlIH0pID0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgYHJlbGF0aXZlIGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIHB5LTIgcGwtMTAgcHItNCAke1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLXRlYWwtNjAwIHRleHQtd2hpdGUnIDogJ3RleHQtZ3JheS05MDAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfWBcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVyc29ufVxuLy8gICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICB7KHsgc2VsZWN0ZWQsIGFjdGl2ZSB9KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHRydW5jYXRlICR7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPyAnZm9udC1tZWRpdW0nIDogJ2ZvbnQtbm9ybWFsJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5uYW1lfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtMyAke1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtdGVhbC02MDAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbi8vICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbi8vICAgICAgICAgICAgICAgICAgICAgKX1cbi8vICAgICAgICAgICAgICAgICAgIDwvQ29tYm9ib3guT3B0aW9uPlxuLy8gICAgICAgICAgICAgICAgICkpXG4vLyAgICAgICAgICAgICAgICl9XG4vLyAgICAgICAgICAgICA8L0NvbWJvYm94Lk9wdGlvbnM+XG4vLyAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvQ29tYm9ib3g+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hBbmRTdWdnZXN0aW9uIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZ2V0X2Zvb2RfZGljdCIsImZldGNoIiwiU2VhcmNoQW5kU3VnZ2VzdGlvbiIsImZvb2RPYmoiLCJmb29kT2JqRiIsImlucHV0RiIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJkcm9wZG93biIsInNldERyb3BEb3duIiwidXBkYXRlT2JqIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJoYW5kbGVDbGljayIsImFsZXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIm9uS2V5RG93biIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});