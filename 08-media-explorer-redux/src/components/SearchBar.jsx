import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchedSlice'


const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(setQuery(text))

        setText('')
    }

  return (
    <div>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex bg-(--c3) gap-5 py-4 px-8 rounded'>

            <input 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            required
            type='text' 
            placeholder='Search anything...'
            className='px-4 py-2 w-full border-2 outline-none rounded text-xl'
            />

            <button className='px-4 py-2 border-2 outline-none cursor-pointer active:scale-95 rounded-full text-xl'>
            Search
            </button>

        </form>
      
    </div>
  )
}

export default SearchBar
