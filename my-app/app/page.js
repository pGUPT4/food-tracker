import FoodList from "./today_page/list/page";
import NutritionTable from "./today_page/nutrition_table/page";
import SearchAndSuggestion from "./today_page/search_and_suggestions/page";

export default function Home() {

    var foodObj = {}
    // // const [item, setItem] = useState("")
    // const [query, setQuery] = useState("")

    // let tempList = [
    //     <div className='flex flex-row box-border h-20 w-120 bg-red-600'>
    //         {/* {item} */}
    //         Hello
    //         <button/>
    //     </div>
    // ]
        
    // const addItem = (item) => {
    //     const foodItem = [
    //         <div className='flex flex-row box-border h-20 w-120 bg-blue-600'>
    //             {item}
    //             <button/>
    //         </div>
    //     ]
    //     setTodayList((oldArray) => {
    //         [...oldArray, foodItem ]
    //     })
    //     console.log(todayList)
    // }
    

return (
    <main className="flex flex-row overflow:hidden items-center justify-between p-24">
        {/*left side */}
        <FoodList foodArr={foodObj} />
        
        {/* right side */}
        <div className='flex flex-col m-4 border-blue-600'>
            {/* right side upper half*/}
            <SearchAndSuggestion foodObj={foodObj}/>

            {/* right side lower half*/}
            <NutritionTable/>
        </div>
    </main>
    )
}
