import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Features/CounterSlice';


export const store = configureStore({

    // intialze with empty reducer af 
    reducer: CounterReducer,
})