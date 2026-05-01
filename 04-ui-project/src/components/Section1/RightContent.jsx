import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full p-5 w-2/3 flex flex-nowrap gap-5 overflow-x-auto' >
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}
    
    </div>
  )
}

export default RightContent
