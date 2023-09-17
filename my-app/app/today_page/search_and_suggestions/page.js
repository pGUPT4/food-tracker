'use client'

import { useState } from "react"

const SearchAndSuggestion = ({foodObj, foodObjF, inputF, buttonF, validResponseF}) => {

    const [query, setQuery] = useState(" ")
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
 

    const handleClick = () => {
        
        inputF(query)
        if(query != " "){
            foodObjF(updateObj(foodObj, query)) // Updates database
        }else{
            alert("Please select a food item")
        }

        setQuery(" ")
        document.getElementById('myInput').value = ''
        console.log(foodObj)
        
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
                    
                    onKeyDown = {(e) => handleKeyDown(e)}/>

                <button 
                    className='w-20 h-8 bg-white m-2 rounded-2xl'
                    type='button'
                    onClick = {handleClick}>
                    Add
                </button>

            </form>

            <div className='box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200'>
            </div>
        </div>
    )
}

export default SearchAndSuggestion