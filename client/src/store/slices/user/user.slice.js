import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from './user.thunk.js'

const initialState = {
    isAuthenticated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {

        // Login user
        builder.addCase(loginUserThunk.pending, (state) => {
            state.isAuthenticated = false;
            console.log("pending status");
        })
        builder.addCase(loginUserThunk.fulfilled, (state) => {
            state.isAuthenticated = true
            console.log("fullfilled");
        })
        builder.addCase(loginUserThunk.rejected, (state) => {
            state.isAuthenticated = false
            console.log("rejected");
        })

    }
})

export const { setAuthUser } = userSlice.actions
const userReducer = userSlice.reducer;
export { userReducer }