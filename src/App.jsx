// App.jsx
import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Counter from './components/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './features/them/themSlice'

const App = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <button
        onClick={() => dispatch(toggle())}
        className="
          px-4 py-2 mb-4 rounded-md 
          bg-blue-500 text-white
          dark:bg-blue-700 dark:text-gray-100
        "
      >
        Toggle Theme (Current: {theme})
      </button>
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Learning about Redux-Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
      <div>
        <h1 className="text-2xl font-bold dark:text-white">CounterApp</h1>
        <Counter />
      </div>
    </div>
  )
}

export default App
