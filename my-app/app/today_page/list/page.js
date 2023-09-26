
const FoodList = ({ foodObj }) => {

    return (
        <div className='box-border h-180 w-144 p-4 bg-gray-200 rounded-2xl overflow-y-auto'>
            {
                Object.entries(foodObj).map(([food, foodCount], i) => {        
                    return (<div key = {food} className = "box box-border rounded-xl h-36 m-2 bg-cyan-500">
                        <p className='text-3xl text-center text-white justify-center'>{food + " - " + foodCount}</p>
                    </div>)
                }) 
            }
        </div>
    )
}

export default FoodList