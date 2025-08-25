import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/ShopSlice'


export const store =  configureStore({
  reducer: {
    shopReducer
  },
})