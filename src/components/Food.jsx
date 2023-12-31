import React, { useState } from 'react'
import { data } from '../Data/Data.js'

const Food = () => {
   //console.log(data);
    const [foods , setFoods] = useState(data)
  
    //fiter type

    const filterType =(category) => {
        setFoods(
            data.filter((item)=> {
                return item.category === category;
            })
        )
    }

    // filter price

    const filterPrice =(price) =>{
        setFoods(
            data.filter((item) =>{
                return item.price === price;
            })
        )
    }

  return (


    <div className='max-w-[1640px] mr-auto px-4 py-12'>

      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/*filter */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/*filter type */}

            <div>
                <p className='font-bold text-gray-700 text-2xl'>Filter Type</p>

                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>All</button>
                    <button onClick={()=> filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>Burger</button>
                    <button onClick={()=> filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>Pizza</button>
                    <button onClick={()=> filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>Salad</button>
                    <button onClick={()=> filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>Chicken</button>

                </div>
            </div>

            {/*filter price */}

            <div>
                <p className='font-bold text-gray-700 text-2xl'>Filter Price</p>

                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=> filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mr-1 border-2 font-semibold'>$$$$</button>
                </div>
            </div>


        </div>

        {/*Display food menu */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=>(
                <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-b-lg'>

                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>

                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food
