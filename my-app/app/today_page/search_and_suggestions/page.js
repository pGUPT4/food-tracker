'use client'

import { useEffect, useState } from "react"

const SearchAndSuggestion = ({foodObj, foodObjF, inputF}) => {

    const [query, setQuery] = useState(" ") 
    const [dropdown, setDropDown] = useState(false) 
    const [foodDictionary, setFoodDictionary] = useState([]) // Gives me dropw down's list 

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
                <div className="box-border h-48 w-144 m-2 bg-white border-1 rounded-2xl bg-grey-200 overflow-y-auto">
                    {foodDictionary
                    .filter((item) => {
                        // return query.toLowerCase() === ''
                        // ? item 
                        // : item.includes(query)

                        const lowerItem = item.toLowerCase()
                        const lowerInput = query.toLowerCase()

                        return lowerItem.includes(lowerInput);

                    })
                    .map((food) => {        
                        return (
                            <div key = {food} className = "box box-border rounded-xl h-10 m-2 bg-cyan-500">
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

export default SearchAndSuggestion