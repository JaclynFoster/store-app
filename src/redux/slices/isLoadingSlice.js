import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const displayLoader = createSlice({
  name: 'displayLoader',
  initialState,
  reducers: {
    setLoadingTrue: state => {
      state.value = true
    },
    setLoadingFalse: state => {
      state.value = false
    },
    setLoadToggle: state => {
      state.value = !state.value
    }
  }
})

export const {
  setLoadingTrue,
  setLoadingFalse,
  setLoadToggle
} = displayLoader.actions
export const selectLoading = state => state.displayLoader.value
export default displayLoader.reducer
