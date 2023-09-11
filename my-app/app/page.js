
export default function Home() {

    // const [todayList, setTodayList] = useState([])
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
    <main className="flex flex-row items-center justify-between p-24">
        {/*left side */}
        <div className='box-border h-140 w-144 p-4 bg-gray-200 rounded-2xl'>
            {/* {todayList} */}
        </div>

        {/* right side upper half */}
        <div className='flex flex-col m-4 border-blue-600'>

            {/*Search bar, button with suggestion box*/}
            <div className='flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600'>
                <form className='flex flex-row'>
                    <input
                        className='m-2 w-120 h-8 rounded-2xl'
                        // onChange = {() => {}
                        //     // (e) => {
                        //     // setQuery(e.target.value)
                        //     // }
                        // }
                        />
                    <button 
                        className='w-20 h-8 bg-white m-2 rounded-2xl'
                        // onClick={() => {}
                        //     // () => {
                        //     // console.log(query)
                        //     // addItem(query)
                        // }
                        >
                        Find
                    </button>
                </form>
                <div className='box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200'></div>
            </div>

            <div className='box-border h-88 w-144 bg-blue-500 rounded-2xl m-2'>
                {/* {query} */}
            </div>
        </div>
    </main>
    )
}
