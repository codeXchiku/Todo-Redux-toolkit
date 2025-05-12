import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world", completed: false }]
}
const todoSlice = createSlice({
    name: "todo",//this name show in extension thats it no use
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            //"action" -> for accessing "text" and "id" 
            // "state"(current state) ->how many added how many removed
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        },
    }
})

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer