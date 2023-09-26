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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, foodObjF, inputF } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [dropdown, setDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [foodDictionary, setFoodDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]) // Gives me dropw down's list \n    ;\n    const [foodInput, setFoodInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateObj = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const get_food_dict = () => {\n    //     return fetch(`http://127.0.0.1:5000/`)\n    //         .then((resp) => setFoodDictionary(resp))\n    //         .catch((e) => console.error(e))\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:5000/\").then((resp)=>{\n            if (!resp.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            return resp.json();\n        }).then((data)=>setFoodDictionary(data)).catch((e)=>console.error(e));\n    }, []);\n    const handleClick = ()=>{\n        inputF(query);\n        if (query != \" \") {\n            foodObjF(updateObj(foodObj, query)) // Updates database\n            ;\n        } else {\n            alert(\"Please select a food item\");\n        }\n        setQuery(\" \");\n        document.getElementById(\"myInput\").value = \"\";\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleClick();\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            setQuery(e.target.value);\n                        },\n                        onClick: ()=>setDropDown(!dropdown),\n                        onKeyDown: (e)=>handleKeyDown(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            dropdown ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-white border-1 rounded-2xl bg-grey-200 overflow-y-auto\",\n                children: Object.entries(foodDictionary).filter().map((param)=>{\n                    let [index, food] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box box-border rounded-xl h-10 m-2 bg-cyan-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-m text-center text-white justify-center\",\n                            children: food\n                        }, void 0, false, {\n                            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                            lineNumber: 96,\n                            columnNumber: 33\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 95,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 92,\n                columnNumber: 17\n            }, undefined) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"RZ/UdoXMzOauKpyg9SALm4qu8qM=\");\n_c = SearchAndSuggestion;\n// import { Fragment, useState } from 'react'\n// import { Combobox, Transition } from '@headlessui/react'\n// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'\n// const people = [\n//   { id: 1, name: 'Wade Cooper' },\n//   { id: 2, name: 'Arlene Mccoy' },\n//   { id: 3, name: 'Devon Webb' },\n//   { id: 4, name: 'Tom Cook' },\n//   { id: 5, name: 'Tanya Fox' },\n//   { id: 6, name: 'Hellen Schmidt' },\n// ]\n// export default function Example() {\n//   const [selected, setSelected] = useState(people[0])\n//   const [query, setQuery] = useState('')\n//   const filteredPeople =\n//     query === ''\n//       ? people\n//       : people.filter((person) =>\n//           person.name\n//             .toLowerCase()\n//             .replace(/\\s+/g, '')\n//             .includes(query.toLowerCase().replace(/\\s+/g, ''))\n//         )\n//   return (\n//     <div className=\"fixed top-16 w-72\">\n//       <Combobox value={selected} onChange={setSelected}>\n//         <div className=\"relative mt-1\">\n//           <div className=\"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm\">\n//             <Combobox.Input\n//               className=\"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0\"\n//               displayValue={(person) => person.name}\n//               onChange={(event) => setQuery(event.target.value)}\n//             />\n//             <Combobox.Button className=\"absolute inset-y-0 right-0 flex items-center pr-2\">\n//               <ChevronUpDownIcon\n//                 className=\"h-5 w-5 text-gray-400\"\n//                 aria-hidden=\"true\"\n//               />\n//             </Combobox.Button>\n//           </div>\n//           <Transition\n//             as={Fragment}\n//             leave=\"transition ease-in duration-100\"\n//             leaveFrom=\"opacity-100\"\n//             leaveTo=\"opacity-0\"\n//             afterLeave={() => setQuery('')}\n//           >\n//             <Combobox.Options className=\"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm\">\n//               {filteredPeople.length === 0 && query !== '' ? (\n//                 <div className=\"relative cursor-default select-none py-2 px-4 text-gray-700\">\n//                   Nothing found.\n//                 </div>\n//               ) : (\n//                 filteredPeople.map((person) => (\n//                   <Combobox.Option\n//                     key={person.id}\n//                     className={({ active }) =>\n//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${\n//                         active ? 'bg-teal-600 text-white' : 'text-gray-900'\n//                       }`\n//                     }\n//                     value={person}\n//                   >\n//                     {({ selected, active }) => (\n//                       <>\n//                         <span\n//                           className={`block truncate ${\n//                             selected ? 'font-medium' : 'font-normal'\n//                           }`}\n//                         >\n//                           {person.name}\n//                         </span>\n//                         {selected ? (\n//                           <span\n//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${\n//                               active ? 'text-white' : 'text-teal-600'\n//                             }`}\n//                           >\n//                             <CheckIcon className=\"h-5 w-5\" aria-hidden=\"true\" />\n//                           </span>\n//                         ) : null}\n//                       </>\n//                     )}\n//                   </Combobox.Option>\n//                 ))\n//               )}\n//             </Combobox.Options>\n//           </Transition>\n//         </div>\n//       </Combobox>\n//     </div>\n//   )\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMkM7QUFFM0MsTUFBTUUsc0JBQXNCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBQzs7SUFFcEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7O0lBQ3ZGLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQyx1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1hLFlBQVksQ0FBQ0MsS0FBS1Q7UUFDcEIsSUFBR1MsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNWLFFBQU87Z0JBQzFCUyxHQUFHLENBQUNULE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNEUyxHQUFHLENBQUNULE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT1M7SUFDWDtJQUVBLGdDQUFnQztJQUNoQyw2Q0FBNkM7SUFDN0MsbURBQW1EO0lBQ25ELDBDQUEwQztJQUMxQyxJQUFJO0lBRUpmLGdEQUFTQSxDQUFDO1FBQ05pQixNQUFPLDBCQUNGQyxJQUFJLENBQUMsQ0FBQ0M7WUFDSCxJQUFJLENBQUNBLEtBQUtDLEVBQUUsRUFBRTtnQkFDVixNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxPQUFPRixLQUFLRyxJQUFJO1FBQ3BCLEdBQ0NKLElBQUksQ0FBQyxDQUFDSyxPQUFTWixrQkFBa0JZLE9BQ2pDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUMsUUFBUUMsS0FBSyxDQUFDRjtJQUVwQyxHQUFHLEVBQUU7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O0FBQ3hFLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsbUZBQW1GO0FBQ25GLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkMscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixrQ0FBa0M7QUFDbEMsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLE1BQU07QUFDTixJQUFJO0FBR0osK0RBQWVBLG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9kYXlfcGFnZS9zZWFyY2hfYW5kX3N1Z2dlc3Rpb25zL3BhZ2UuanM/OTdjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFNlYXJjaEFuZFN1Z2dlc3Rpb24gPSAoe2Zvb2RPYmosIGZvb2RPYmpGLCBpbnB1dEZ9KSA9PiB7XG5cbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiIFwiKSBcbiAgICBjb25zdCBbZHJvcGRvd24sIHNldERyb3BEb3duXSA9IHVzZVN0YXRlKGZhbHNlKSBcbiAgICBjb25zdCBbZm9vZERpY3Rpb25hcnksIHNldEZvb2REaWN0aW9uYXJ5XSA9IHVzZVN0YXRlKFtdKSAvLyBHaXZlcyBtZSBkcm9wdyBkb3duJ3MgbGlzdCBcbiAgICBjb25zdCBbZm9vZElucHV0LCBzZXRGb29kSW5wdXRdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIC8vIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyeSkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gYXJyeS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnJ5LmluZGV4T2YoaXRlbSkgPT0gaW5kZXgpfVxuXG4gICAgY29uc3QgdXBkYXRlT2JqID0gKG9iaiwgcXVlcnkpID0+IHtcbiAgICAgICAgaWYob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocXVlcnkpKXtcbiAgICAgICAgICAgICAgICBvYmpbcXVlcnldID0gMVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIC8vIGNvbnN0IGdldF9mb29kX2RpY3QgPSAoKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2ApXG4gICAgLy8gICAgICAgICAudGhlbigocmVzcCkgPT4gc2V0Rm9vZERpY3Rpb25hcnkocmVzcCkpXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpXG4gICAgLy8gfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRGb29kRGljdGlvbmFyeShkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSlcbiAgICAgICAgXG4gICAgfSwgW10pXG4gXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlucHV0RihxdWVyeSlcbiAgICAgICAgaWYocXVlcnkgIT0gXCIgXCIpe1xuICAgICAgICAgICAgZm9vZE9iakYodXBkYXRlT2JqKGZvb2RPYmosIHF1ZXJ5KSkgLy8gVXBkYXRlcyBkYXRhYmFzZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGZvb2QgaXRlbVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UXVlcnkoXCIgXCIpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUlucHV0JykudmFsdWUgPSAnJyAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIFNlYXJjaCBiYXIsIGJ1dHRvbiB3aXRoIHN1Z2dlc3Rpb24gYm94XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBib3gtYm9yZGVyIGJnLWdyYXktNTAwIHJvdW5kZWQtMnhsIGJvcmRlci1ncmF5LTk1MCBib3JkZXItci1ibHVlLTYwMCc+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm15SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J20tMiB3LTEyMCBoLTggcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4gc2V0RHJvcERvd24oIWRyb3Bkb3duKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93biA9IHsoZSkgPT4gaGFuZGxlS2V5RG93bihlKX0vPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTIwIGgtOCBiZy13aGl0ZSBtLTIgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIHtkcm9wZG93biA/IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWJvcmRlciBoLTQ4IHctMTQ0IG0tMiBiZy13aGl0ZSBib3JkZXItMSByb3VuZGVkLTJ4bCBiZy1ncmV5LTIwMCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGZvb2REaWN0aW9uYXJ5KS5maWx0ZXIoKS5tYXAoKFtpbmRleCwgZm9vZF0pID0+IHsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtpbmRleH0gY2xhc3NOYW1lID0gXCJib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMTAgbS0yIGJnLWN5YW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1tIHRleHQtY2VudGVyIHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXInPntmb29kfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtNDggdy0xNDQgbS0yIGJnLWdyYXktMzAwIGJvcmRlci0xIHJvdW5kZWQtMnhsIGJnLWdyZXktMjAwJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8vIGltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgQ29tYm9ib3gsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbi8vIGltcG9ydCB7IENoZWNrSWNvbiwgQ2hldnJvblVwRG93bkljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzIwL3NvbGlkJ1xuXG4vLyBjb25zdCBwZW9wbGUgPSBbXG4vLyAgIHsgaWQ6IDEsIG5hbWU6ICdXYWRlIENvb3BlcicgfSxcbi8vICAgeyBpZDogMiwgbmFtZTogJ0FybGVuZSBNY2NveScgfSxcbi8vICAgeyBpZDogMywgbmFtZTogJ0Rldm9uIFdlYmInIH0sXG4vLyAgIHsgaWQ6IDQsIG5hbWU6ICdUb20gQ29vaycgfSxcbi8vICAgeyBpZDogNSwgbmFtZTogJ1RhbnlhIEZveCcgfSxcbi8vICAgeyBpZDogNiwgbmFtZTogJ0hlbGxlbiBTY2htaWR0JyB9LFxuLy8gXVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKCkge1xuLy8gICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHBlb3BsZVswXSlcbi8vICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcblxuLy8gICBjb25zdCBmaWx0ZXJlZFBlb3BsZSA9XG4vLyAgICAgcXVlcnkgPT09ICcnXG4vLyAgICAgICA/IHBlb3BsZVxuLy8gICAgICAgOiBwZW9wbGUuZmlsdGVyKChwZXJzb24pID0+XG4vLyAgICAgICAgICAgcGVyc29uLm5hbWVcbi8vICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnJylcbi8vICAgICAgICAgICAgIC5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKVxuLy8gICAgICAgICApXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0xNiB3LTcyXCI+XG4vLyAgICAgICA8Q29tYm9ib3ggdmFsdWU9e3NlbGVjdGVkfSBvbkNoYW5nZT17c2V0U2VsZWN0ZWR9PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTFcIj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBjdXJzb3ItZGVmYXVsdCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy13aGl0ZSB0ZXh0LWxlZnQgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctd2hpdGUgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNzUgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtdGVhbC0zMDAgc206dGV4dC1zbVwiPlxuLy8gICAgICAgICAgICAgPENvbWJvYm94LklucHV0XG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItbm9uZSBweS0yIHBsLTMgcHItMTAgdGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTkwMCBmb2N1czpyaW5nLTBcIlxuLy8gICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU9eyhwZXJzb24pID0+IHBlcnNvbi5uYW1lfVxuLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpfVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgIDxDb21ib2JveC5CdXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMlwiPlxuLy8gICAgICAgICAgICAgICA8Q2hldnJvblVwRG93bkljb25cbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS00MDBcIlxuLy8gICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8L0NvbWJvYm94LkJ1dHRvbj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8VHJhbnNpdGlvblxuLy8gICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuLy8gICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMTAwXCJcbi8vICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbi8vICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuLy8gICAgICAgICAgICAgYWZ0ZXJMZWF2ZT17KCkgPT4gc2V0UXVlcnkoJycpfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxDb21ib2JveC5PcHRpb25zIGNsYXNzTmFtZT1cImFic29sdXRlIG10LTEgbWF4LWgtNjAgdy1mdWxsIG92ZXJmbG93LWF1dG8gcm91bmRlZC1tZCBiZy13aGl0ZSBweS0xIHRleHQtYmFzZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lIHNtOnRleHQtc21cIj5cbi8vICAgICAgICAgICAgICAge2ZpbHRlcmVkUGVvcGxlLmxlbmd0aCA9PT0gMCAmJiBxdWVyeSAhPT0gJycgPyAoXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMFwiPlxuLy8gICAgICAgICAgICAgICAgICAgTm90aGluZyBmb3VuZC5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgKSA6IChcbi8vICAgICAgICAgICAgICAgICBmaWx0ZXJlZFBlb3BsZS5tYXAoKHBlcnNvbikgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgPENvbWJvYm94Lk9wdGlvblxuLy8gICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcnNvbi5pZH1cbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBhY3RpdmUgfSkgPT5cbi8vICAgICAgICAgICAgICAgICAgICAgICBgcmVsYXRpdmUgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgcHktMiBwbC0xMCBwci00ICR7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctdGVhbC02MDAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTkwMCdcbi8vICAgICAgICAgICAgICAgICAgICAgICB9YFxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJzb259XG4vLyAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsoeyBzZWxlY3RlZCwgYWN0aXZlIH0pID0+IChcbi8vICAgICAgICAgICAgICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdHJ1bmNhdGUgJHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA/ICdmb250LW1lZGl1bScgOiAnZm9udC1ub3JtYWwnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLm5hbWV9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zICR7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAndGV4dC13aGl0ZScgOiAndGV4dC10ZWFsLTYwMCdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvPlxuLy8gICAgICAgICAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgICAgICAgICAgPC9Db21ib2JveC5PcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgKSlcbi8vICAgICAgICAgICAgICAgKX1cbi8vICAgICAgICAgICAgIDwvQ29tYm9ib3guT3B0aW9ucz5cbi8vICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9Db21ib2JveD5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFuZFN1Z2dlc3Rpb24iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZWFyY2hBbmRTdWdnZXN0aW9uIiwiZm9vZE9iaiIsImZvb2RPYmpGIiwiaW5wdXRGIiwicXVlcnkiLCJzZXRRdWVyeSIsImRyb3Bkb3duIiwic2V0RHJvcERvd24iLCJmb29kRGljdGlvbmFyeSIsInNldEZvb2REaWN0aW9uYXJ5IiwiZm9vZElucHV0Iiwic2V0Rm9vZElucHV0IiwidXBkYXRlT2JqIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIm9uS2V5RG93biIsImJ1dHRvbiIsInR5cGUiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwibWFwIiwiaW5kZXgiLCJmb29kIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});