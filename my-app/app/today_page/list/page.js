'use client'
import React, { useState, useEffect } from 'react'

const FoodList = ({foodObj, input, buttonClicked, buttonF, validResponse}) => {
    const [displayObj, setDisplayObj] = useState([])
    // const [test, setTest] = useState(0)
    // const foodItem = foodObj[foodArr.length - 1]
    let foodCount = 0
    let food = ""
    

    const getFoodCount = (obj, index) => {
        if(obj && typeof obj === 'object'){
            return obj[index]
        }
    }
    const getFoodName = (obj, index) => {
        if(obj && typeof obj === 'object'){
            if(obj.hasOwnProperty(index)){
                return index
            }
        }
    }

    foodCount = getFoodCount(foodObj, input)
    food = getFoodName(foodObj, input)
    
    const newItem = [
        <div className='box box-border bg-blue-500 rounded-xl'>
            {Object.keys(foodObj) + ", " + Object.values(foodObj)}
        </div>
    ]

    useEffect(() => {
        if(validResponse){
            setDisplayObj([
                ...displayObj, newItem
            ])
            buttonF(false)
        }
    }, [validResponse])

    return (
        <div className='box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl'>
            {displayObj}
        </div>
    )
}

export default FoodList