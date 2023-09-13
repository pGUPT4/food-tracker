'use client'
const SearchAndSuggestion = ({foodObj}) => {
    let query = ""
    // const removeDuplicates = (arry) => {
    //     return arry.filter((item, index) => arry.indexOf(item) == index)}

    const updateArr = (obj, query) => {
        if(obj && typeof obj === 'object'){
            if(!obj.hasOwnProperty(query)){
                obj[query] = 1
            }else{
                obj[query]++
            }
        }
        return obj
    }
    

    return (
        // Search bar, button with suggestion box
        <div className='flex flex-col flex-wrap box-border bg-gray-500 rounded-2xl border-gray-950 border-r-blue-600'>
            <form className='flex flex-row'>
                <input
                    id = "myInput"
                    className='m-2 w-120 h-8 rounded-2xl'
                    onChange = {(e) => {
                        query = e.target.value
                        console.log(query)
                        }}
                    />
                <button 
                    className='w-20 h-8 bg-white m-2 rounded-2xl'
                    type='button'
                    onClick = {() => {
                        foodObj = updateArr(foodObj, query)
                        query = ""
                        document.getElementById('myInput').value = ''
                    }}
                    >
                    Find
                </button>
            </form>

            <div className='box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200'>
                    Suggestion Box
            </div>
        </div>
    )
}

export default SearchAndSuggestion