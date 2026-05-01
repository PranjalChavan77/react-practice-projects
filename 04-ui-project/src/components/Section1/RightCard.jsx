import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 rounded-3xl overflow-hidden relative'>
        <img className='object-cover h-full w-full' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/> 
    </div>
  )
}

export default RightCard
