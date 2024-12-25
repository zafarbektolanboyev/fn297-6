import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = 0;
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state, action) =>{
            state += action.payload
            return state
        },
        decrement:(state, action) =>{
            state -= action.payload
            return state
        },
        fiveIncrement:(state) => {
            state += 5;
            return state
        },
        fiveDecrement:(state) => {
            state -= 5 ;
            return state
        }
    }
})
export default counterSlice.reducer;
export const {increment, decrement, fiveDecrement, fiveIncrement} = counterSlice.actions;