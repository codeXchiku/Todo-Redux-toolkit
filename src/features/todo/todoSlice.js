import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello world"}]
}
const todoSlice = createSlice({
    name:"todo",//this name show in extension thats it no use
    initialState:initialState,
    reducers:{
        addTodo:(state,action)=>{
            //"action" -> for accessing "text" and "id" 
            // "state"(current state) ->how many added how many removed
                const todo = {
                    id:nanoid,
                    text:action.payload
                }
                state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const{addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer