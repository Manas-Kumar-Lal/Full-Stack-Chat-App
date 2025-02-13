import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, signupUserThunk, getUserProfileThunk } from './user.thunk.js'


const initialState = {
    isAuthenticated: false,
    screenLoading: true,
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
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.isAuthenticated = true
            console.log(action.payload);
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.isAuthenticated = false
        })

        // signup user
        builder.addCase(signupUserThunk.pending, (state) => {
            state.isAuthenticated = false;
        })
        builder.addCase(signupUserThunk.fulfilled, (state, action) => {
            state.isAuthenticated = true
            console.log(action.payload);
        })
        builder.addCase(signupUserThunk.rejected, (state, action) => {
            state.isAuthenticated = false
        })

        // sget user profile
        builder.addCase(getUserProfileThunk.pending, (state) => {
            state.isAuthenticated = false;
        })
        builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.screenLoading = false;
            console.log(action.payload);
        })
        builder.addCase(getUserProfileThunk.rejected, (state, action) => {
            state.isAuthenticated = false
            state.screenLoading = false;
        })

    }
})

export const { setAuthUser } = userSlice.actions
const userReducer = userSlice.reducer;
export { userReducer }