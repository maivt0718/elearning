import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {authSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself