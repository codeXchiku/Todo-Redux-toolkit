// App.jsx
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Counter from './components/Counter'
import Cart from './components/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './features/them/themSlice'
import { IoCartOutline } from "react-icons/io5";

const App = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className='flex'>
      <button
        onClick={() => dispatch(toggle())}
        className="
          px-4 py-2 mb-4 rounded-md 
          bg-blue-500 text-white
          dark:bg-blue-700 dark:text-gray-100 mr-3
        "
      >
        Toggle Theme (Current: {theme})
      </button>
      
        <button><IoCartOutline className='h-8 w-10'/></button>
      </div>
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Learning about Redux-Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
      <div>
        <h1 className="text-2xl font-bold dark:text-white">CounterApp</h1>
        <Counter />
      </div>
      <Cart/>
    </div>
  )
}

export default App
