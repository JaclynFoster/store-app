import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: {}
}

export const cartItemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { quantity, breedObj } = action.payload
      // action.payload will be a full item object
      // state.cart.push(action.payload)
      if (state.cart.hasOwnProperty(breedObj.breed_id)) {
        state.cart[breedObj.breed_id].quantity += quantity
        // pass in entire breed object every time you click the button and pass in quantity that can be negative or positive
      } else {
        state.cart[breedObj.breed_id] = { ...breedObj, quantity: 1 }
      }
      if (state.cart[breedObj.breed_id].quantity < 0) {
        state.cart[breedObj.breed_id].quantity = 0
      }
    },

    deleteFromCart: (state, action) => {
      const { breed_id } = action.payload

      delete state.cart[breed_id]
    }
  }
})

export const {
  addToCart,
  deleteFromCart,
  changeQuantity
} = cartItemSlice.actions

export const cartOptions = state => state.cart.cart

export default cartItemSlice.reducer





