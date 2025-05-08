import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todo.todos)
    

    const dispatch = useDispatch()

    const handleDelete = (id)=>{
      console.log(id);
        dispatch(removeTodo(id))
    }
    return (
        <>
        <h1>Todos</h1>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}> X </button>
            </li>
          ))}
        </ul>
      </>
    )
}

export default Todos