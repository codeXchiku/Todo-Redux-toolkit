import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counter/CountSlice";
import themeReducer from "../features/them/themSlice";
import cartReducer from "../features/cart/cartSlice"


const store = configureStore({
    reducer:{
        todo:todoReducer,
        count:countReducer,
        theme:themeReducer,
        cart:cartReducer
    }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todo.todos));
  localStorage.setItem("theme", state.theme);
  localStorage.setItem("cart",JSON.stringify(state.cart))
});

export default store