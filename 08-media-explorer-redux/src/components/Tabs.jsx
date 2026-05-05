import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchedSlice'

const Tabs = () => {

    const tabs = ['photos', 'videos']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

  return (

    <div className='flex gap-4 py-8 pb-1 justify-center'>
        {tabs.map((elem, idx) => {
    return (
    <button
      className={`${(activeTab==elem?'bg-blue-600':'bg-gray-600')} px-4 py-2 rounded uppercase cursor-pointer active:scale-95`}
      key={idx}
      onClick={() => {
        dispatch(setActiveTabs(elem))
      }}
    >
      {elem}
    </button>
  );
})}
    
    </div>
  )
}

export default Tabs
