import { createSlice } from "@reduxjs/toolkit";

const initialCounterState={counter:0,isShown:true}
export const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment:(state)=>{
            state.counter++
        },
        decrement:(state)=>{
            state.counter--
        },
        incrementByValue(state,action){
            state.counter=state.counter+action.payload
        },
        toggleCounter(state){
            state.isShown=!state.isShown
        }
    }
})
export const { increment, decrement, incrementByValue,toggleCounter } = counterSlice.actions;

export default counterSlice.reducer