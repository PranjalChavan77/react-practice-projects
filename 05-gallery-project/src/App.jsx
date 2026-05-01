import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [ userData, setUserData] = useState([])

  const [ index, setIndex] =useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-amber-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return (
      <div key={idx}>
       <Card elem={elem} />
      </div>)
    })
  }
  
  return (
    <div className='h-screen overflow-auto p-8 justify-center bg-amber-100 text-amber-700'>

    <h1 className="text-5xl font-serif font-bold text-center mb-5 bg-linear-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase drop-shadow-lg">
      GALLERY
    </h1>

      <div className='flex h-[82%] flex-wrap gap-5 p-4'>
        {printUserData}
      </div>

      <div className='flex justify-center mt-2 gap-6 items-center p-4'>
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setUserData([])

            setIndex(index + 1)
          }}
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default App
