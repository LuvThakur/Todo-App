import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    value: [{ id: 0, text: 'Welcome to Todo List' }]
}

//  counterSlice created 
export const CounterSlice = createSlice({

    name: 'counter',
    initialState,


    reducers: {
        // action - creators 

        increment: (state, action) => {
            state.value += 1;
        },


        decrement: (state, action) => {
            state.value -= 1;
        }
        ,


        add_todo: (state, action) => {

            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.value.push(todo);
        },

        rmv_todo: (state, action) => {
            state.value = state.value.filter((value) => value.id !== action.payload.id);
        }


    }

})

// exports action-creators  
export const { increment, decrement, add_todo, rmv_todo } = CounterSlice.actions;

//  export default reducers

export default CounterSlice.reducer; 
