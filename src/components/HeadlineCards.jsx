import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

      {/*Card */}

      <div className='rounded-xl relative'>

        {/*overlay */}
        <div className='absolute w-full h-full  bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Catering Service</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order now</button>
        </div>

        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

      </div>


      {/*Card */}

      <div className='rounded-xl relative'>

        {/*overlay */}
        <div className='absolute w-full h-full  bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Restaurant & Cafe</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order now</button>
        </div>

        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

      </div>


      {/*Card */}

      <div className='rounded-xl relative'>

        {/*overlay */}
        <div className='absolute w-full h-full  bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Resorts</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order now</button>
        </div>

        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

      </div>

    </div>
  )
}

export default HeadlineCards