import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: {}
}

export const cartItemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {quantity, breedObj} = action.payload
      // action.payload will be a full item object
      //state.cart.push(action.payload)
      if (state.cart.hasOwnProperty(breedObj.breed_id)) {
        state.cart[breedObj.breed_id].quantity += quantity
        //pass in entire breed object every time you click the button and pass in quantity that can be negative or positive
      } else {
        state.cart[breedObj.breed_id] = {...breedObj, quantity: 1}
        
      }
    },
  
    deleteFromCart: (state, action) => {
      // console.log('state', state)
      // // action.payload will by my item id to remove
      // state.cart = state.cart.filter(item => {
      //   return !item.id == action.payload
      // })
    },

    changeQuantity: (state, action) => {
      // action.payload - I will pass it an object with id and quantity later
      // state.cart = state.cart.map(item => {
      //   if (item.id === action.payload.id) {
      //     item.quantity += action.payload.quantity
      //   }
      //   return item
      // })
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


