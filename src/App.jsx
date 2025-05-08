import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Counter from './components/Counter'
import { useSelector,useDispatch } from 'react-redux'
import { toggle } from './features/them/themSlice'


const App = () => {
  const theme = useSelector((state)=>state.theme)
  console.log(theme);
  
  const dispatch = useDispatch()

  return (
    <>
    <div>
    <button onClick={()=>dispatch(toggle())}>{theme}</button>
    </div>
      <div>
        <h1>Learning about Redux-Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>

      <div>
        <h1>CounterApp</h1>
        <Counter/>
      </div>
    </>
  )
}

export default App