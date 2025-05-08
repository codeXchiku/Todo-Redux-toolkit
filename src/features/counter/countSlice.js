import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "counterApp",
    initialState: 0,
    reducers: {
        add: (state,action) => state + 1,
        subtract: (state,action) => state - 1
    }
})

export const { add, subtract } = countSlice.actions

export default countSlice.reducer
