import React from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const AddTodo = () => {
    const[input,setInput]  = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className='dark:text-white'>
      <input 
        type="text" 
        placeholder="Add new todo" 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddTodo