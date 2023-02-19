// you need to import this 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  activeStatus:false,
  UserInfo:{fname:"rohit"}
}
//createSlice({name:'',intialState:'',reducers:'{actions name : (state)=>{}}')
export const counterSlice = createSlice({
  name: 'userInfo',
  initialState, // which is equal to intialState:initialState
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
  
    changeActiveStatus:(state)=>{
        state.activeStatus=true;
    },

    getUserInfo:(state,action)=>{
        state.UserInfo = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment,changeActiveStatus,getUserInfo } = counterSlice.actions

export default counterSlice.reducer