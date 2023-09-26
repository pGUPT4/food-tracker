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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchAndSuggestion = (param)=>{\n    let { foodObj, foodObjF, inputF } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [dropdown, setDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [foodDictionary, setFoodDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]) // Gives me dropw down's list \n    ;\n    const [foodInput, setFoodInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const removeDuplicates = (arry) => {\n    //     return arry.filter((item, index) => arry.indexOf(item) == index)}\n    const updateObj = (obj, query)=>{\n        if (obj && typeof obj === \"object\") {\n            if (!obj.hasOwnProperty(query)) {\n                obj[query] = 1;\n            } else {\n                obj[query]++;\n            }\n        }\n        return obj;\n    };\n    // const get_food_dict = () => {\n    //     return fetch(`http://127.0.0.1:5000/`)\n    //         .then((resp) => setFoodDictionary(resp))\n    //         .catch((e) => console.error(e))\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:5000/\").then((resp)=>{\n            if (!resp.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            return resp.json();\n        }).then((data)=>setFoodDictionary(data)).catch((e)=>console.error(e));\n    }, []);\n    const handleClick = ()=>{\n        inputF(query);\n        if (query != \" \") {\n            foodObjF(updateObj(foodObj, query)) // Updates database\n            ;\n        } else {\n            alert(\"Please select a food item\");\n        }\n        setQuery(\" \");\n        document.getElementById(\"myInput\").value = \"\";\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleClick();\n        }\n    };\n    return(// Search bar, button with suggestion box\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"myInput\",\n                        className: \"m-2 w-120 h-8 rounded-2xl\",\n                        onChange: (e)=>{\n                            setQuery(e.target.value);\n                        },\n                        onClick: ()=>setDropDown(!dropdown),\n                        onKeyDown: (e)=>handleKeyDown(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 h-8 bg-white m-2 rounded-2xl\",\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            dropdown ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-white border-1 rounded-2xl bg-grey-200 overflow-y-auto\",\n                children: Object.entries(foodDictionary).filter((item)=>{\n                    return search.toLowerCase() === \"\" ? item : item.toLowerCase;\n                }).map((param)=>{\n                    let [index, food] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box box-border rounded-xl h-10 m-2 bg-cyan-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-m text-center text-white justify-center\",\n                            children: food\n                        }, void 0, false, {\n                            fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                            lineNumber: 102,\n                            columnNumber: 33\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                        lineNumber: 101,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 92,\n                columnNumber: 17\n            }, undefined) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200\"\n            }, void 0, false, {\n                fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parthgupta/Documents/Projects/Food Tracker/my-app/app/today_page/search_and_suggestions/page.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SearchAndSuggestion, \"RZ/UdoXMzOauKpyg9SALm4qu8qM=\");\n_c = SearchAndSuggestion;\n// import { Fragment, useState } from 'react'\n// import { Combobox, Transition } from '@headlessui/react'\n// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'\n// const people = [\n//   { id: 1, name: 'Wade Cooper' },\n//   { id: 2, name: 'Arlene Mccoy' },\n//   { id: 3, name: 'Devon Webb' },\n//   { id: 4, name: 'Tom Cook' },\n//   { id: 5, name: 'Tanya Fox' },\n//   { id: 6, name: 'Hellen Schmidt' },\n// ]\n// export default function Example() {\n//   const [selected, setSelected] = useState(people[0])\n//   const [query, setQuery] = useState('')\n//   const filteredPeople =\n//     query === ''\n//       ? people\n//       : people.filter((person) =>\n//           person.name\n//             .toLowerCase()\n//             .replace(/\\s+/g, '')\n//             .includes(query.toLowerCase().replace(/\\s+/g, ''))\n//         )\n//   return (\n//     <div className=\"fixed top-16 w-72\">\n//       <Combobox value={selected} onChange={setSelected}>\n//         <div className=\"relative mt-1\">\n//           <div className=\"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm\">\n//             <Combobox.Input\n//               className=\"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0\"\n//               displayValue={(person) => person.name}\n//               onChange={(event) => setQuery(event.target.value)}\n//             />\n//             <Combobox.Button className=\"absolute inset-y-0 right-0 flex items-center pr-2\">\n//               <ChevronUpDownIcon\n//                 className=\"h-5 w-5 text-gray-400\"\n//                 aria-hidden=\"true\"\n//               />\n//             </Combobox.Button>\n//           </div>\n//           <Transition\n//             as={Fragment}\n//             leave=\"transition ease-in duration-100\"\n//             leaveFrom=\"opacity-100\"\n//             leaveTo=\"opacity-0\"\n//             afterLeave={() => setQuery('')}\n//           >\n//             <Combobox.Options className=\"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm\">\n//               {filteredPeople.length === 0 && query !== '' ? (\n//                 <div className=\"relative cursor-default select-none py-2 px-4 text-gray-700\">\n//                   Nothing found.\n//                 </div>\n//               ) : (\n//                 filteredPeople.map((person) => (\n//                   <Combobox.Option\n//                     key={person.id}\n//                     className={({ active }) =>\n//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${\n//                         active ? 'bg-teal-600 text-white' : 'text-gray-900'\n//                       }`\n//                     }\n//                     value={person}\n//                   >\n//                     {({ selected, active }) => (\n//                       <>\n//                         <span\n//                           className={`block truncate ${\n//                             selected ? 'font-medium' : 'font-normal'\n//                           }`}\n//                         >\n//                           {person.name}\n//                         </span>\n//                         {selected ? (\n//                           <span\n//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${\n//                               active ? 'text-white' : 'text-teal-600'\n//                             }`}\n//                           >\n//                             <CheckIcon className=\"h-5 w-5\" aria-hidden=\"true\" />\n//                           </span>\n//                         ) : null}\n//                       </>\n//                     )}\n//                   </Combobox.Option>\n//                 ))\n//               )}\n//             </Combobox.Options>\n//           </Transition>\n//         </div>\n//       </Combobox>\n//     </div>\n//   )\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndSuggestion);\nvar _c;\n$RefreshReg$(_c, \"SearchAndSuggestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b2RheV9wYWdlL3NlYXJjaF9hbmRfc3VnZ2VzdGlvbnMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMkM7QUFFM0MsTUFBTUUsc0JBQXNCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBQzs7SUFFcEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7O0lBQ3ZGLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQyx1Q0FBdUM7SUFDdkMsd0VBQXdFO0lBRXhFLE1BQU1hLFlBQVksQ0FBQ0MsS0FBS1Q7UUFDcEIsSUFBR1MsT0FBTyxPQUFPQSxRQUFRLFVBQVM7WUFDOUIsSUFBRyxDQUFDQSxJQUFJQyxjQUFjLENBQUNWLFFBQU87Z0JBQzFCUyxHQUFHLENBQUNULE1BQU0sR0FBRztZQUNqQixPQUFLO2dCQUNEUyxHQUFHLENBQUNULE1BQU07WUFDZDtRQUNKO1FBQ0EsT0FBT1M7SUFDWDtJQUVBLGdDQUFnQztJQUNoQyw2Q0FBNkM7SUFDN0MsbURBQW1EO0lBQ25ELDBDQUEwQztJQUMxQyxJQUFJO0lBRUpmLGdEQUFTQSxDQUFDO1FBQ05pQixNQUFPLDBCQUNGQyxJQUFJLENBQUMsQ0FBQ0M7WUFDSCxJQUFJLENBQUNBLEtBQUtDLEVBQUUsRUFBRTtnQkFDVixNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxPQUFPRixLQUFLRyxJQUFJO1FBQ3BCLEdBQ0NKLElBQUksQ0FBQyxDQUFDSyxPQUFTWixrQkFBa0JZLE9BQ2pDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUMsUUFBUUMsS0FBSyxDQUFDRjtJQUVwQyxHQUFHLEVBQUU7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Q0FBMEM7QUFDMUMsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4QyxrQ0FBa0M7QUFDbEMsOEZBQThGO0FBQzlGLHdFQUF3RTtBQUN4RSxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBQzlCLG1GQUFtRjtBQUNuRixvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsdUNBQXVDO0FBQ3ZDLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGFBQWE7QUFDYixNQUFNO0FBQ04sSUFBSTtBQUdKLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RvZGF5X3BhZ2Uvc2VhcmNoX2FuZF9zdWdnZXN0aW9ucy9wYWdlLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBTZWFyY2hBbmRTdWdnZXN0aW9uID0gKHtmb29kT2JqLCBmb29kT2JqRiwgaW5wdXRGfSkgPT4ge1xuXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIiBcIikgXG4gICAgY29uc3QgW2Ryb3Bkb3duLCBzZXREcm9wRG93bl0gPSB1c2VTdGF0ZShmYWxzZSkgXG4gICAgY29uc3QgW2Zvb2REaWN0aW9uYXJ5LCBzZXRGb29kRGljdGlvbmFyeV0gPSB1c2VTdGF0ZShbXSkgLy8gR2l2ZXMgbWUgZHJvcHcgZG93bidzIGxpc3QgXG4gICAgY29uc3QgW2Zvb2RJbnB1dCwgc2V0Rm9vZElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICAvLyBjb25zdCByZW1vdmVEdXBsaWNhdGVzID0gKGFycnkpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGFycnkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyeS5pbmRleE9mKGl0ZW0pID09IGluZGV4KX1cblxuICAgIGNvbnN0IHVwZGF0ZU9iaiA9IChvYmosIHF1ZXJ5KSA9PiB7XG4gICAgICAgIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHF1ZXJ5KSl7XG4gICAgICAgICAgICAgICAgb2JqW3F1ZXJ5XSA9IDFcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG9ialtxdWVyeV0rK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cbiAgICAvLyBjb25zdCBnZXRfZm9vZF9kaWN0ID0gKCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9gKVxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHNldEZvb2REaWN0aW9uYXJ5KHJlc3ApKVxuICAgIC8vICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKVxuICAgIC8vIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYClcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0Rm9vZERpY3Rpb25hcnkoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpXG4gICAgICAgIFxuICAgIH0sIFtdKVxuIFxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpbnB1dEYocXVlcnkpXG4gICAgICAgIGlmKHF1ZXJ5ICE9IFwiIFwiKXtcbiAgICAgICAgICAgIGZvb2RPYmpGKHVwZGF0ZU9iaihmb29kT2JqLCBxdWVyeSkpIC8vIFVwZGF0ZXMgZGF0YWJhc2VcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBmb29kIGl0ZW1cIilcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFF1ZXJ5KFwiIFwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlJbnB1dCcpLnZhbHVlID0gJycgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICBoYW5kbGVDbGljaygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBTZWFyY2ggYmFyLCBidXR0b24gd2l0aCBzdWdnZXN0aW9uIGJveFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgYm94LWJvcmRlciBiZy1ncmF5LTUwMCByb3VuZGVkLTJ4bCBib3JkZXItZ3JheS05NTAgYm9yZGVyLXItYmx1ZS02MDAnPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkID0gXCJteUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLTIgdy0xMjAgaC04IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHNldERyb3BEb3duKCFkcm9wZG93bil9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvbktleURvd24gPSB7KGUpID0+IGhhbmRsZUtleURvd24oZSl9Lz5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yMCBoLTggYmctd2hpdGUgbS0yIHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICB7ZHJvcGRvd24gPyBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1ib3JkZXIgaC00OCB3LTE0NCBtLTIgYmctd2hpdGUgYm9yZGVyLTEgcm91bmRlZC0yeGwgYmctZ3JleS0yMDAgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhmb29kRGljdGlvbmFyeSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaC50b0xvd2VyQ2FzZSgpID09PSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnRvTG93ZXJDYXNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKFtpbmRleCwgZm9vZF0pID0+IHsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtpbmRleH0gY2xhc3NOYW1lID0gXCJib3ggYm94LWJvcmRlciByb3VuZGVkLXhsIGgtMTAgbS0yIGJnLWN5YW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1tIHRleHQtY2VudGVyIHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXInPntmb29kfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gtYm9yZGVyIGgtNDggdy0xNDQgbS0yIGJnLWdyYXktMzAwIGJvcmRlci0xIHJvdW5kZWQtMnhsIGJnLWdyZXktMjAwJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8vIGltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgQ29tYm9ib3gsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbi8vIGltcG9ydCB7IENoZWNrSWNvbiwgQ2hldnJvblVwRG93bkljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzIwL3NvbGlkJ1xuXG4vLyBjb25zdCBwZW9wbGUgPSBbXG4vLyAgIHsgaWQ6IDEsIG5hbWU6ICdXYWRlIENvb3BlcicgfSxcbi8vICAgeyBpZDogMiwgbmFtZTogJ0FybGVuZSBNY2NveScgfSxcbi8vICAgeyBpZDogMywgbmFtZTogJ0Rldm9uIFdlYmInIH0sXG4vLyAgIHsgaWQ6IDQsIG5hbWU6ICdUb20gQ29vaycgfSxcbi8vICAgeyBpZDogNSwgbmFtZTogJ1RhbnlhIEZveCcgfSxcbi8vICAgeyBpZDogNiwgbmFtZTogJ0hlbGxlbiBTY2htaWR0JyB9LFxuLy8gXVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKCkge1xuLy8gICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHBlb3BsZVswXSlcbi8vICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcblxuLy8gICBjb25zdCBmaWx0ZXJlZFBlb3BsZSA9XG4vLyAgICAgcXVlcnkgPT09ICcnXG4vLyAgICAgICA/IHBlb3BsZVxuLy8gICAgICAgOiBwZW9wbGUuZmlsdGVyKChwZXJzb24pID0+XG4vLyAgICAgICAgICAgcGVyc29uLm5hbWVcbi8vICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnJylcbi8vICAgICAgICAgICAgIC5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKVxuLy8gICAgICAgICApXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0xNiB3LTcyXCI+XG4vLyAgICAgICA8Q29tYm9ib3ggdmFsdWU9e3NlbGVjdGVkfSBvbkNoYW5nZT17c2V0U2VsZWN0ZWR9PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTFcIj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBjdXJzb3ItZGVmYXVsdCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy13aGl0ZSB0ZXh0LWxlZnQgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctd2hpdGUgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNzUgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtdGVhbC0zMDAgc206dGV4dC1zbVwiPlxuLy8gICAgICAgICAgICAgPENvbWJvYm94LklucHV0XG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItbm9uZSBweS0yIHBsLTMgcHItMTAgdGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTkwMCBmb2N1czpyaW5nLTBcIlxuLy8gICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU9eyhwZXJzb24pID0+IHBlcnNvbi5uYW1lfVxuLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpfVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgIDxDb21ib2JveC5CdXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMlwiPlxuLy8gICAgICAgICAgICAgICA8Q2hldnJvblVwRG93bkljb25cbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS00MDBcIlxuLy8gICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8L0NvbWJvYm94LkJ1dHRvbj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8VHJhbnNpdGlvblxuLy8gICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuLy8gICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMTAwXCJcbi8vICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbi8vICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuLy8gICAgICAgICAgICAgYWZ0ZXJMZWF2ZT17KCkgPT4gc2V0UXVlcnkoJycpfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxDb21ib2JveC5PcHRpb25zIGNsYXNzTmFtZT1cImFic29sdXRlIG10LTEgbWF4LWgtNjAgdy1mdWxsIG92ZXJmbG93LWF1dG8gcm91bmRlZC1tZCBiZy13aGl0ZSBweS0xIHRleHQtYmFzZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lIHNtOnRleHQtc21cIj5cbi8vICAgICAgICAgICAgICAge2ZpbHRlcmVkUGVvcGxlLmxlbmd0aCA9PT0gMCAmJiBxdWVyeSAhPT0gJycgPyAoXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMFwiPlxuLy8gICAgICAgICAgICAgICAgICAgTm90aGluZyBmb3VuZC5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgKSA6IChcbi8vICAgICAgICAgICAgICAgICBmaWx0ZXJlZFBlb3BsZS5tYXAoKHBlcnNvbikgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgPENvbWJvYm94Lk9wdGlvblxuLy8gICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcnNvbi5pZH1cbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBhY3RpdmUgfSkgPT5cbi8vICAgICAgICAgICAgICAgICAgICAgICBgcmVsYXRpdmUgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgcHktMiBwbC0xMCBwci00ICR7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctdGVhbC02MDAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTkwMCdcbi8vICAgICAgICAgICAgICAgICAgICAgICB9YFxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJzb259XG4vLyAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsoeyBzZWxlY3RlZCwgYWN0aXZlIH0pID0+IChcbi8vICAgICAgICAgICAgICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdHJ1bmNhdGUgJHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA/ICdmb250LW1lZGl1bScgOiAnZm9udC1ub3JtYWwnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLm5hbWV9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zICR7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAndGV4dC13aGl0ZScgOiAndGV4dC10ZWFsLTYwMCdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvPlxuLy8gICAgICAgICAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgICAgICAgICAgPC9Db21ib2JveC5PcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgKSlcbi8vICAgICAgICAgICAgICAgKX1cbi8vICAgICAgICAgICAgIDwvQ29tYm9ib3guT3B0aW9ucz5cbi8vICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9Db21ib2JveD5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFuZFN1Z2dlc3Rpb24iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZWFyY2hBbmRTdWdnZXN0aW9uIiwiZm9vZE9iaiIsImZvb2RPYmpGIiwiaW5wdXRGIiwicXVlcnkiLCJzZXRRdWVyeSIsImRyb3Bkb3duIiwic2V0RHJvcERvd24iLCJmb29kRGljdGlvbmFyeSIsInNldEZvb2REaWN0aW9uYXJ5IiwiZm9vZElucHV0Iiwic2V0Rm9vZElucHV0IiwidXBkYXRlT2JqIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIm9uS2V5RG93biIsImJ1dHRvbiIsInR5cGUiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwiaXRlbSIsInNlYXJjaCIsInRvTG93ZXJDYXNlIiwibWFwIiwiaW5kZXgiLCJmb29kIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/today_page/search_and_suggestions/page.js\n"));

/***/ })

});