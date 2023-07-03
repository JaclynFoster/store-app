import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/slices/cartItemSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
