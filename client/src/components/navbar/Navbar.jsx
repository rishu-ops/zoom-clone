import React from 'react'
import { Homeimage9 } from '../../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex  justify-between p-6 fixed top-0 left-0 right-0 bg-white z-10 '>
       
       <div> 
         <Link to='/' >
         <img src={Homeimage9} alt="" className='h-10' />
         </Link>
       </div>

       <div className='flex gap-5 text-xl font-semibold '>
        <button className='border border-blue-600  rounded-2xl pl-2 pr-2 text-blue-700 '> Contact Sales </button>
        <button className='bg-blue-600 hover:bg-blue-700 text-white  pl-4 pr-4 w-[120px] rounded-2xl flex items-center justify-center'> 
        <Link to={'/signup'}> Sing Up </Link>
        </button>
        <button className='bg-blue-600 hover:bg-blue-700 text-white pl-4 pr-4  w-[120px] rounded-2xl flex items-center justify-center'> 
        <Link to={'/signin'}> Sing In </Link>
        </button>
       </div>
        
    </div>
  )
}

export default Navbar
