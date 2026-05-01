import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')

  const [task, setTask] =useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='p-10 gap-5 lg:w-1/2 flex flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>ADD NOTES</h1>

          <input 
          type="text"
          placeholder="Note Title"
          className='px-5 w-full py-2 border-2 font-medium outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />

          <textarea
          type="text"
          placeholder="Note Description..."
          className='px-5 w-full py-2 border-2 font-medium outline-none rounded flex-row items-start flex h-32'
          value={details}
          onChange={(e) =>{
            setDetails(e.target.value)
          }}
          />

          <button className='bg-white cursor-pointer active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>
            Add Note
          </button>

      </form>

      <div className='lg:w-1/2 lg:border-1-2 p-10'>

       <h1 className='text-4xl font-bold'>RECENT NOTES</h1>

       <div className='flex flex-wrap justify-start items-start gap-5 h-[90%] mt-5 overflow-auto'>
        {task.map(function(elem,idx){

          return <div key={idx} className="justify-between flex flex-col items-start relative h-55 w-45 py-9 bg-cover rounded-2xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div >
              <h3 className='leading-tight text-wrap text-lg font-bold break-all'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-xs whitespace-normal break-all text-gray-800'>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-gray-800 text-white rounded text-xs py-1 font-bold'>Delete</button>
          </div>
        })}
       </div>

      </div>
    </div>
  )
}

export default App
