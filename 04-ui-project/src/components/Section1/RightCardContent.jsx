import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-7 justify-between flex flex-col'>
        <h2 className='bg-white font-semibold justify-center items-center rounded-full text-xl h-10 w-10 flex'>{props.id+1}</h2>
        <div>
            <p className='leading-relaxed text-shadow-2xs text-lg text-white mb-12'>{props.intro}</p>
            <div className='justify-between flex'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
