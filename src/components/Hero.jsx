import React from 'react'

const Hero = () => {
  return (

    <div className='mx-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>

        {/*overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60  flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-6'>The <span className='text-orange-400'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-6'><span className='text-orange-400'>Delicious </span>Foods</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/4910320/pexels-photo-4910320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
      </div>
    </div>
  )
}

export default Hero
