import { createSlice } from "@reduxjs/toolkit";

// create reducer createSlice
const counterSlice = createSlice( {
    name: 'counterSl',
    initialState: {count: 0},
    reducers: {
        increment: (state) => {
            state.count= state.count + 1 ;
        },
        reset: (state) => {
            state.count= 0 ;
        },
        decrement: (state) => {
            state.count= state.count - 1 ;
        },
    },
});

// increment and decrement is an actions 
// when create sliceneed to export
// 1- reducer= that handle the logics and update the store
// 2- actions

export const {increment ,reset ,decrement} = counterSlice.actions;//actions
export default counterSlice.reducer;//reducer