import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        user:"Demo",
        updateAt: new Date().toLocaleString(),
        cartItems:[],
        total:0
    },
    reducers:{
            addItemTocart: (state, action)=>{
                const {product, quantity} = action.payload
                const productInCart= state.cartItems.find(item => item.id===product.id)
                if(!productInCart){
                    state.cartItems.push({...product,quantity})
                }else{
                    productInCart.quantity+=1
                }
            }
    }
})

export const {addItemTocart} = cartSlice.actions


export default cartSlice.reducer