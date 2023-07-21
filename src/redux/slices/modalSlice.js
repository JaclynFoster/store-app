import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    // examples:
    // breed-12: true
    // breed-4: false
    // email: true
    // signup: false
  }
}

export const displayModal = createSlice({
  name: 'displayModal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.value = { [action.payload]: true }
    },
    closeModal: state => {
      state.value = {}
    }
  }
})

export const { showModal, closeModal } = displayModal.actions
export const modalOptions = state => state.displayModal.value
export default displayModal.reducer
