import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "./reducers/ProductSlice";

export const store = configureStore({
    reducer:{
        product:productSlice
    }
})