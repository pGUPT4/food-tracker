'use client'

import { useEffect, useState } from "react"

const SearchAndSuggestion = ({foodObj, foodObjF, inputF}) => {

    const [query, setQuery] = useState(" ") 
    const [dropdown, setDropDown] = useState(false) 
    const [foodDictionary, setFoodDictionary] = useState({}) // Gives me dropw down's list 

    // const removeDuplicates = (arry) => {
    //     return arry.filter((item, index) => arry.indexOf(item) == index)}

    const updateObj = (obj, query) => {
        if(obj && typeof obj === 'object'){
            if(!obj.hasOwnProperty(query)){
                obj[query] = 1
            }else{
                obj[query]++
            }
        }
        return obj
    }

    // const get_food_dict = () => {
    //     return fetch(`http://127.0.0.1:5000/`)
    //         .then((resp) => setFoodDictionary(resp))
    //         .catch((e) => console.error(e))
    // }

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => setFoodDictionary(data))
            .catch((e) => console.error(e))
        
    }, [])
 

    const handleClick = () => {
        
        inputF(query)
        if(query != " "){
            foodObjF(updateObj(foodObj, query)) // Updates database
        }else{
            alert("Please select a food item")
        }

        setQuery(" ")
        document.getElementById('myInput').value = ''        
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleClick()
        }
    }

    return (
        // Search bar, button with suggestion box
        <div className='flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600'>
            
            <form className='flex flex-row'>

                <input
                    id = "myInput"
                    className='m-2 w-120 h-8 rounded-2xl'
                    onChange = {(e) =>{
                        setQuery(e.target.value)
                    }}

                    onClick = {() => setDropDown(!dropdown)}
                    
                    onKeyDown = {(e) => handleKeyDown(e)}/>

                <button 
                    className='w-20 h-8 bg-white m-2 rounded-2xl'
                    type='button'
                    onClick = {handleClick}>
                    Add
                </button>

            </form>

            {dropdown ? 
                <div className="overflow-y-auto'">
                    {Object.entries(foodDictionary).map(([index, food]) => {        
                        return (
                            <div key = {index} className = "box box-border rounded-xl h-3 m-2 bg-cyan-500">
                                <p className='text-m text-center text-white justify-center'>{food}</p>
                            </div>
                        )
                    })}
                </div>
            : ""}

            <div className='box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200'>
            </div>
        </div>
    )
}

// import { Fragment, useState } from 'react'
// import { Combobox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// const people = [
//   { id: 1, name: 'Wade Cooper' },
//   { id: 2, name: 'Arlene Mccoy' },
//   { id: 3, name: 'Devon Webb' },
//   { id: 4, name: 'Tom Cook' },
//   { id: 5, name: 'Tanya Fox' },
//   { id: 6, name: 'Hellen Schmidt' },
// ]

// export default function Example() {
//   const [selected, setSelected] = useState(people[0])
//   const [query, setQuery] = useState('')

//   const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) =>
//           person.name
//             .toLowerCase()
//             .replace(/\s+/g, '')
//             .includes(query.toLowerCase().replace(/\s+/g, ''))
//         )

//   return (
//     <div className="fixed top-16 w-72">
//       <Combobox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//           <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//             <Combobox.Input
//               className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
//               displayValue={(person) => person.name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <ChevronUpDownIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery('')}
//           >
//             <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {filteredPeople.length === 0 && query !== '' ? (
//                 <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                   Nothing found.
//                 </div>
//               ) : (
//                 filteredPeople.map((person) => (
//                   <Combobox.Option
//                     key={person.id}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                         active ? 'bg-teal-600 text-white' : 'text-gray-900'
//                       }`
//                     }
//                     value={person}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <span
//                           className={`block truncate ${
//                             selected ? 'font-medium' : 'font-normal'
//                           }`}
//                         >
//                           {person.name}
//                         </span>
//                         {selected ? (
//                           <span
//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                               active ? 'text-white' : 'text-teal-600'
//                             }`}
//                           >
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   )
// }


export default SearchAndSuggestion