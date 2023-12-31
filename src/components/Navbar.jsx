import React ,{useState}from 'react'
import{AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch,}  from 'react-icons/ai'
import{BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import{TbTruckDelivery} from 'react-icons/tb'
import{ FaUserFriends,FaWallet} from 'react-icons/fa'
import{MdHelp,MdFavorite} from 'react-icons/md'

const Navbar = () => {
const [nav , setNav] = useState(false)

  return (
    <div className='max-w-[1640px] bg-white  mx-auto flex justify-between items-center p-4'>

        {/*left side of nav */}

      <div className='flex items-center'> 
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl px-2'>
            Edirisingha <span className='font-bold'>Group</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>


       {/*right side of the nav */}

       {/*search input*/}

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[]500px '>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search' />
      </div>

       {/*cart button*/}

      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/>Cart
      </button>


       {/*Mobile menu(side menu) */}
          {/*overlayer */}
        
        {nav  ?<div className='bg-black/80  fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

          {/*side drawer*/}
      
      <div className={nav ?'fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] h-screen w-[300px] bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          Our <span className='font-bold'>Services</span>
        </h2>

        <nav>
          <ul className='flex flex-col py-4 text-gray-800'>
            <li className='text-xl py-4 ml-3 flex'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
            <li className='text-xl py-4 ml-3 flex'><MdFavorite size={25} className='mr-4'/>Favorites</li>
            <li className='text-xl py-4 ml-3 flex'><MdFavorite size={25} className='mr-4'/>Favorites</li>
            <li className='text-xl py-4 ml-3 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
            <li className='text-xl py-4 ml-3 flex'><MdHelp size={25} className='mr-4'/>Help</li>
            <li className='text-xl py-4 ml-3 flex'><AiFillTag size={25} className='mr-4'/>Promotions</li>
            <li className='text-xl py-4 ml-3 flex'><BsFillSaveFill size={25} className='mr-4'/>Best ones</li>
            <li className='text-xl py-4 ml-3 flex'><FaUserFriends size={25} className='mr-4'/>Invite</li>
          </ul>
          
        </nav>
      </div>

      


    </div>
  )
}

export default Navbar

