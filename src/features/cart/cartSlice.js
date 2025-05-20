import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addCart:(state,action)=>{
            const{id,name,price} = action.payload
            state.push({id,name,price})
        },
        removeCart:(state,action)=>{}
    }
})

export const{addCart,removeCart} = cartSlice.actions
export default cartSlice.reducer