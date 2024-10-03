import { createSlice } from '@reduxjs/toolkit'
import { getLS } from '../utils/utils';

const initialState = {
    userInfo: getLS("user")
}


const authSlice = createSlice({
  name: "Auth Slice",
  initialState,
  reducers: {
    setInfo: (state, actions) => {
        state.userInfo = actions.payload
    }
  }
});

export const {setInfo} = authSlice.actions

export default authSlice.reducer