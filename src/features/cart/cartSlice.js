import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:JSON.parse(localStorage.getItem("cart")) || [],
    reducers:{
        addCart:(state,action)=>{
            const{id,name,price} = action.payload
            state.push({id,name,price})
        },
        removeCart:(state,action)=>{
            console.log(action.payload);
            return state.filter(item => item.id !== action.payload);
        }
    }
})

export const{addCart,removeCart} = cartSlice.actions
export default cartSlice.reducer