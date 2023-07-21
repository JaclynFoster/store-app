import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    contact_name: '',
    contact_email: '',
    contact_message: ''
  }
}

export const contact = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    contactStateHandler: (state, action) => {
      const { objectKeyName, value } = action.payload
      console.log({ action })
      const newObj = { ...state.value, ...{ [objectKeyName]: value } }
      console.log('new obj: ', newObj)
      state.value = newObj
    },
    contactResetHandler: state => {
      state.value = {
        contact_name: '',
        contact_email: '',
        contact_message: ''
      }
    }
  }
})

export const { contactStateHandler, contactResetHandler } = contact.actions
export const contactOptions = state => state.contact.value
export default contact.reducer
