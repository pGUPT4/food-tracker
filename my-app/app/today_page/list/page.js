'use client'
import React, { useState } from 'react'

const FoodList = ({foodObj}) => {
    const [displayArr, setDisplayArr] = useState([])
    // const foodItem = foodObj[foodArr.length - 1]
    let i = 0

    const displayArrItem = [
        <div className='flex flex-row box box-border bg-blue-500'>
            <p>{i++}</p>
            {/* {foodItem} */}
        </div>
    ]

    // setDisplayArr(displayArrItem)

    return (
        <div className='box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl'>
            1<br/>
            2<br/>
            3<br/>
            4<br/>
            5<br/>
            {displayArr}
        </div>
    )
}

export default FoodList