'use client'
import React, { useState, useEffect } from 'react'

const FoodList = ({foodObj, input, buttonF, validResponse, validResponseF}) => {
    const [displayObjArr, setDisplayObj] = useState([])
    // const [test, setTest] = useState(0)
    // const foodItem = foodObj[foodArr.length - 1]
    const [foodCount, setFoodCount] = useState(0)
    const [food, setFood] = useState("")

    const getFoodCount = (obj, key) => {
        if(obj && typeof obj === 'object'){
            return obj?.key
        }
    }
    const getFoodName = (obj, key) => {
        if(obj && typeof obj === 'object'){
            if(obj.hasOwnProperty(key)){
                return key
            }
        }
    }

    // 1) Edit Array
    let checkFoodExists = displayObjArr.find((object) => {
        if(object.food === input){
            return true
        }
        return false
    })
    
    const newItem = [
        <div key = {food} class = {food} className='box box-border rounded-xl h-36 m-2 bg-cyan-500'>
            {food + ", " + foodCount}
        </div>
    ]

    

    // 2) Append array
    useEffect(() => {

        setFoodCount(getFoodCount(foodObj, input))
        setFood(getFoodName(foodObj, input))

        if(validResponse && !checkFoodExists){
            setDisplayObj((prevObj) => [
                ...prevObj, newItem
            ])
            validResponseF(false)    
        }
    }, [validResponse])


    return (
        <div className='box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto'>
            {Object.entries(foodObj).map(([food, foodCount], i) => (
                <div className = "box box-border rounded-xl h-36 m-2 bg-cyan-500">
                    {food + ", " +foodCount}
                </div>
            )) }
        </div>
    )
}

export default FoodList