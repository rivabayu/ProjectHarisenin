import { configureStore } from "@reduxjs/toolkit";
import product from "./product";

export default configureStore({
    reducer:{
        products:product 
    }
})