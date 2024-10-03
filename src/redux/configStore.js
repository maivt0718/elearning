import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {authSlice, userSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself