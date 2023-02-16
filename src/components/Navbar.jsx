import React ,{ useState} from 'react'
import {AiOutlineSearch ,AiOutlineClose, AiFillTag, AiOutlineMenu  } from 'react-icons/ai'
import {BsFillCartFill , BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite , MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet  } from 'react-icons/fa'

//its our navbar , the toggler button ->>> 
const Navbar = () => {
  
  const [nav , setNav] = useState( );
  
  
  return (
    
    <>
    
  <div  className=' bg-white  z-20 sticky p-4 top-0  max-w-[1640px] w-full mx-auto flex justify-between items-center'>
    <div className='flex items-center'>
      <div onClick={()=>setNav(!nav)}  className='cursor-pointer '>
        <AiOutlineMenu size={30}/>
      </div>
      <h1 className='text-2xl sm:text-3xl md:text-4xl  px-2'>Best<span className='font-bold '> Eats</span></h1>

      <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text=[14px]'>
        <p className='bg-black text-white rounded-full p-2 '>Delivery</p>
        <p className='p-2'>PickUp</p>
      </div>
    </div>
    {/* search */}
    <div className='flex bg-gray-200  rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
      <AiOutlineSearch size={25} />
      <input className='bg-transparent p-2 focus:outline-none w-full' type="text" name="" id="" placeholder='search foods' />
    </div>
    {/* Cart Button */}
    <button className='md:flex bg-black text-white hidden items-center py-2 rounded-full'>
      <BsFillCartFill size={20} className="mr-2" /> Cart
    </button>

    {/* Mobile Menu */}
    {/* overlay */}
    {nav ? <div className=' fixed w-full h-screen bg-black/80 top-0 left-0 z-10 '></div>:''}
    {/* side drawer menu */}

    <div className={ nav ? 'bg-white top-0 left-0 fixed w-[300px] h-screen z-10 duration-300' :'bg-white top-0 left-[-100%] fixed w-[300px] h-screen z-10 duration-300' }>
      <AiOutlineClose onClick={()=>setNav(!nav)} size ={ 30 } className= " absolute right-4 top-4 cursor-pointer"/>
      <h2 className='text-2xl p-4'>Best <span className="font-bold"> Eats</span></h2>
      <nav>
        <ul className='flex flex-col p-4 text-gray-800 '>
          <li className='flex text-xl py-4  cursor-pointer'><TbTruckDelivery size={25} className="mr-4"/> Orders </li>
          <li className='flex text-xl py-4 cursor-pointer'><MdFavorite size={25} className="mr-4"/> Favorites </li>
          <li className='flex text-xl py-4 cursor-pointer'><FaWallet size={25} className="mr-4"/> Wallet </li>
          <li className='flex text-xl py-4 cursor-pointer'><MdHelp size={25} className="mr-4"/> Help </li>
          <li className='flex text-xl py-4 cursor-pointer'><AiFillTag size={25} className="mr-4"/> Promotions </li>
          <li className='flex text-xl py-4 cursor-pointer'>< BsFillSaveFill size={25} className="mr-4"/> Best One </li>
          <li className='flex text-xl py-4 cursor-pointer'><FaUserFriends size={25} className="mr-4"/> Invite Friends </li>
         
        </ul>
      </nav>
    </div>
  </div>
 
  </>
)
  

};

export default Navbar