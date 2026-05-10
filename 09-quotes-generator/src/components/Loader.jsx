import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <div className='flex gap-3'>

            <div className='w-4 h-4 rounded-full bg-red-400 animate-bounce'></div>

            <div className='w-4 h-4 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.1s]'></div>

            <div className='w-4 h-4 rounded-full bg-gray-500 animate-bounce [animation-delay:0.2s]'></div>

        </div>

        <p className='text-black text-lg font-semibold tracking-wide'>
        Loading inspiration...
        </p>
      
    </div>
  )
}

export default Loader
