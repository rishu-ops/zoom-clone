import React from 'react'
import { useNavigate } from 'react-router-dom'

const Join = () => {
    
    const navigate = useNavigate();

  return (
    <div className='w-full h-[50vh] flex items-center justify-center '>
      
      <div className="flex flex-col items-start gap-4 w-[50%]">

      <h1 className='text-3xl font-semibold'> Join Meeting  </h1>
        
        <input type="text" className='w-[100%]  border-2 rounded-lg p-2 '
        placeholder='Meeting ID or Personal Link Name '
        />
        
        <div className="w-full flex gap-2 justify-end mt-2">
            
            <button className='p-2 border-2 w-1/4 rounded-lg'
         onClick={() => navigate('/dashboard')}
            > Cancle </button>
            <button className='p-2 border-2 w-1/4 rounded-lg'> Join </button>

            </div>
        </div>
    </div>
  )
}

export default Join
