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
                const {product, quantity, size} = action.payload
                const productInCart= state.cartItems.find(item => item.id===product.id && item.size === size)
                if(!productInCart){
                    state.cartItems.push({...product,quantity, size})
                }else{
                    productInCart.quantity+=1
                }
                state,updateAt = new Date (). toLocaleString();
                state.total= state.cartItems. reduce((acc, item)=> acc + item.price*item.quantity,0)
            
            },
            removeItems : (state,action)=>{
             state.cartItems= state.cartItems.filter(
                item => !(item.id === action.payload.id && item.size === action.payload.size))
             state.total = state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
             state.updatedAt = new Date().toLocaleString();
        },
        clearCart : (state,action)=>{
            state.cartItems = []
            state.updatedAt = new Date().toLocaleString();
            state.total=0
        },
    }
})

export const {addItemTocart, removeItems, clearCart} = cartSlice.actions


export default cartSlice.reducer