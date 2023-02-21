// This creates a Redux store
import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './UserInfo/UserDetailSlice'

// configureStore
export const store = configureStore({
  reducer: {userInfo:counterReducer},
})

