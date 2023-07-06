import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/slices/cartItemSlice'
import displayModalReducer from '../redux/slices/modalSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    displayModal: displayModalReducer,
  }
})
