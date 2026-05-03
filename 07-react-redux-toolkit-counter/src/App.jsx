import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'

const App = () => {
 const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)

  const [num, setNum] = useState(10)

  return (
    <div className='container'>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>
        Increment
      </button>

      <button onClick={() => {
        dispatch(decrement())
      }}>
        Decrement
      </button>

      <button onClick={() => {
        dispatch(incrementByAmount(Number(num)))
      }}>
        Increase by Amount
      </button>

      <input
        value={num}
        type="number"
        onChange={(e) => {
          setNum(e.target.value)
        }} />

    </div>
  )
}

export default App