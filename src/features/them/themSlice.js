import { createSlice } from "@reduxjs/toolkit";



const themSlice = createSlice({
    name:"them",
    initialState:"dark",
    reducers:{
        toggle:(state,action)=>{
            if (state=="dark") {
               return "light"
            }else{
                return "dark"
            }
        }
    }
})

export const {toggle} = themSlice.actions

export default themSlice.reducer