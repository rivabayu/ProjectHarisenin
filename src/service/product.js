import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name:'products',
    initialState:{
        products:[],
        cart:[],
        loading:false,
        erorr:null,
    },
    reducers:{
        addToCart:(state,action)=>{
            let olditems = state.cart.filter(val=> val.id !== action.payload.id)
            let newItems = state.cart.filter(val => val.id === action.payload.id)
            let newQty = newItems.length?newItems[0]?.qty+1:1
            newItems.length?newItems[0]={...action.payload, qty:newQty}:newItems=[{...action.payload,qty:newQty}]

            olditems.push(newItems[0])
            state.cart=olditems
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            state.products=action.payload
        } )
    }
  

})

export const {addToCart} = products.actions

export default products.reducer