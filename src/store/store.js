import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counter/CountSlice";


export const store = configureStore({
    reducer:{
        todo:todoReducer,
        count:countReducer
    }
});