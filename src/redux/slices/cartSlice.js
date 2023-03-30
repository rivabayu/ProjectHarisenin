import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems :[],
    totalAmount: 0,
    totalQuantity:0,
}


 

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action)=>{
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            state.totalQuantity++

            if(!existingItem){
                state.cartItems.push({
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity), [])
        }, 
        deleteItem: (state, action) =>{
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            
            // if (existingItem != 0){
            //     state.totalAmount = state.cartItems.reduce((total, item) =>
            //          total + Number(item.price) * Number(item.quantity), []) 
            // }
            if(existingItem !=0){
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            } 
            console.log( existingItem, 'ini redux')
            state.totalAmount = state.cartItems.reduce((total, item) =>
                     total - Number(item.price) * Number(item.quantity), [])

        }       
    },
  
   
   
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer