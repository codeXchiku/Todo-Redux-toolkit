import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counter/CountSlice";
import themeReducer from "../features/them/themSlice";


export const store = configureStore({
    reducer:{
        todo:todoReducer,
        count:countReducer,
        theme:themeReducer
    }
});