import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Counter from './components/Counter'

const App = () => {
  return (
    <>
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