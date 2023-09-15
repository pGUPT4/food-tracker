'use client'
import React, { useState, useEffect } from 'react'

const FoodList = ({foodObj, input, buttonClicked, buttonF, validResponse, validResponseF}) => {
    const [displayObjArr, setDisplayObj] = useState([])
    // const [test, setTest] = useState(0)
    // const foodItem = foodObj[foodArr.length - 1]
    const [foodCount, setFoodCount] = useState(0)
    const [food, setFood] = useState("")

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

    // setFoodCount(getFoodCount(foodObj, input))
    // setFood(getFoodName(foodObj, input))
    const newItem = [
        <div className='box box-border rounded-xl h-36 m-2 bg-cyan-500'>
            {food + ", " + foodCount}
        </div>
    ]

    // let hasFoodExisted = displayObjArr.find((object) => {
    //     if(object.food === input){
    //         return true
    //     }
    //     return false
    // })

    useEffect(() => {

        if(validResponse){
            // if(hasFoodExisted){
            //     displayObjArr.find((index) => {
            //         displayObjArr[index] = {food: foodCount}
            //     })
            //}else{
                setDisplayObj((prevObj) => [
                    ...prevObj, newItem
                ])
                buttonF(false)
                validResponseF(false)
            // }
        }
    }, [validResponse])

    return (
        <div className='box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto'>
            {displayObjArr}
        </div>
    )
}

export default FoodList