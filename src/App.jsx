// App.jsx
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Counter from './components/Counter'
import Cart from './components/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './features/them/themSlice'
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from 'react'

const App = () => {
  const [cartCount, setCartCount] = useState()
  const [showCartPopup, setShowCartPopup] = useState(false);

  const theme = useSelector((state) => state.theme)
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    console.log(cart);
    setCartCount(cart.length)
  }, [cart])


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

        <div className="relative ml-60 mt-2">
          <button className="dark:text-white" onClick={() => setShowCartPopup(!showCartPopup)}>
            <IoCartOutline className="h-8 w-10" />
          </button>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}

          {showCartPopup && (
            <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-64 z-10">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Cart Items</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-300">Cart is empty.</p>
              ) : (
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm dark:text-white">
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
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
      <Cart />
    </div>
  )
}

export default App
