'use client'
import React, {useState} from 'react'
import FoodList from "./today_page/list/page";
import NutritionTable from "./today_page/nutrition_table/page";
import SearchAndSuggestion from "./today_page/search_and_suggestions/page";

export default function Home() {

    const [foodObj, setFoodObj] = useState({});
    const [input, setInput] = useState("");
    const [validResponse, setValidResponse] = useState(false);


    const inputF = (value) => {
        setInput(value)
    }

    const foodObjF = (value) => {
        setFoodObj(value)
    }

    const validResponseF = (value) => {
        setValidResponse(value)
    }


return (
    <main className="flex flex-row overflow:hidden items-center justify-between p-24">
        {/*left side */}
        <FoodList 
            foodObj={foodObj} 
            input= {input}
            validResponse = {validResponse}
            validResponseF = {validResponseF}/>
        
        {/* right side */}
        <div className='flex flex-col m-4 border-blue-600'>
            {/* right side upper half*/}
            <SearchAndSuggestion 
                foodObj = {foodObj}
                foodObjF={foodObjF} 
                inputF = {inputF}
                validResponseF = {validResponseF}
                />

            {/* right side lower half*/}
            <NutritionTable/>
        </div>

        {/* <p>{foodObj + ", " + input + ", " + buttonClicked}</p> */}
    </main>
    )
}
