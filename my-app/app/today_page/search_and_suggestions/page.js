'use client'

import React, { memo } from 'react'

const SearchAndSuggestion = memo(() => {
    return (
        // Search bar, button with suggestion box
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

            <div className='box-border h-48 w-144 m-2 bg-gray-300 border-1 rounded-2xl bg-grey-200'>

            </div>
        </div>
    )
})

export default SearchAndSuggestion