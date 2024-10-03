import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { user } from '../services/user.service';

export const getValueUserByAPI = createAsyncThunk(`user/getValueUserByAPI`, async (_,thunkAPI) => {
    const res = await user.getListUser()
    console.log(res)
    return res.data.content
})

const initialState = {
    listUser: []
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(getValueUserByAPI.fulfilled, (state, action) => {
        state.listUser = action.payload
    })
    // builder.addCase(getValueUserByAPI.rejected, (state, action) => {
    //     console.log(action)
    // })
    // builder.addCase(getValueUserByAPI.fulfilled, (state, action) => {
    //     console.log(action)
    // })
  }
});

export const { } = userSlice.actions

export default userSlice.reducer