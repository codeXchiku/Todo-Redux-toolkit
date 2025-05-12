import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todo.todos)
    

    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(removeTodo(id))
    }
    const handleComplete = (id)=>{
      dispatch(completeTodo(id))
    }
    return (
        <div className='dark:text-white'>
        <h1>Todos</h1>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "line-through text-gray-500" : ""}>
              <input type="checkbox" checked={todo.completed} onChange={()=>handleComplete(todo.id)} className='mr-2' />
              {todo.text}
              <button onClick={() => handleDelete(todo.id)} className='ml-2 text-red-600 font-bold border rounded'> X </button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Todos