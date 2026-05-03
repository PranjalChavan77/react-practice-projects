import { createSlice } from "@reduxjs/toolkit";

// createSlice automatically creates: reducers + actions + initial state
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 5
    },
    reducers: {

        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        // increase counter by the amount sent from component
        incrementByAmount: (state,actions) => {
            state.value += actions.payload                //payload = data you send with the action
        },

    }
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer