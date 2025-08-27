import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/ShopSlice'
import cartReducer from './slices/CartSlice'

export const store =  configureStore({
  reducer: {
    shopReducer,
    cartReducer
  },
})