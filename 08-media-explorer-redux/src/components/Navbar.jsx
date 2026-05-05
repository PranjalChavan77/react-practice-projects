import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-(--c2) flex justify-between items-center py-4 px-8'>

      <h2 className='text-center text-2xl font-medium'>Media Explorer</h2>
    
      <div className='flex gap-4 text-xl items-center'>
    
        <Link className='text-base font-medium active:scale-95 cursor-pointer px-4 py-2 bg-(--c4) text-(--c1) rounded' to='/'>Search</Link>
        <Link className='text-base font-medium active:scale-95 cursor-pointer px-4 py-2 bg-(--c4) text-(--c1) rounded' to='/collection'>Collection</Link>
    
      </div>
      
    </div>
  )
}

export default Navbar
