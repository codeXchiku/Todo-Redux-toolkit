import { createSlice } from "@reduxjs/toolkit";

const themSlice = createSlice({
    name:"theme",
    initialState: localStorage.getItem("theme") || "light",
    reducers:{
        toggle:(state,action)=>{
            const newTheme = state ==="dark"?"light":"dark"

           // Update the HTML class for Tailwind dark mode
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            } 
            return newTheme;
        }
    }
    
})

export const { toggle } = themSlice.actions;
export default themSlice.reducer;