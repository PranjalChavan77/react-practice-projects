import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blannk'>
          <div className='h-45 w-47 overflow-hidden rounded-2xl'>
          <img 
          className='h-full w-full object-cover' 
          src={props.elem.download_url} 
          alt=" "
          />
        </div>
        <h2 className='text-lg font-bold'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card
