import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/slices/cartItemSlice'
import displayModalReducer from '../redux/slices/modalSlice'
import displayLoaderReducer from '../redux/slices/isLoadingSlice'
import contactReducer from '../redux/slices/contactSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    displayModal: displayModalReducer,
    displayLoader: displayLoaderReducer,
    contact: contactReducer
  }
})

