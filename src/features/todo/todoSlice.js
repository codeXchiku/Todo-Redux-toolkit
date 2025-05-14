import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
     todos: JSON.parse(localStorage.getItem("todos")) || [],
}
const todoSlice = createSlice({
    name: "todo",//this name show in extension thats it no use
    initialState,
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
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id ? { ...todo, text } : todo
            );
        }
    }
})

export const { addTodo, removeTodo, completeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer