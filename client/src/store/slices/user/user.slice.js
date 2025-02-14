import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, signupUserThunk, getUserProfileThunk, logoutThunk, getOtherUsersThunk } from './user.thunk.js'


const initialState = {
    isAuthenticated: false,
    screenLoading: true,
    profileData: null,
    otherUsers: null,
    selectedUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: (builder) => {

        // Login user
        builder.addCase(loginUserThunk.pending, (state) => {
            state.isAuthenticated = false;
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.profileData = action.payload?.responseData.user;
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
            state.profileData = action.payload?.responseData.user;
        })
        builder.addCase(signupUserThunk.rejected, (state, action) => {
            state.isAuthenticated = false
        })

        // logout user
        builder.addCase(logoutThunk.pending, (state) => {
            // nothing to do
        })
        builder.addCase(logoutThunk.fulfilled, (state, action) => {
            state.isAuthenticated = false;
            state.otherUsers = null;
            state.profileData = null;
            state.selectedUser = null;
        })
        builder.addCase(logoutThunk.rejected, (state, action) => {
            // nothing to do
        })

        // get user profile
        builder.addCase(getUserProfileThunk.pending, (state) => {
            state.isAuthenticated = false;
        })
        builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.screenLoading = false;
            state.profileData = action.payload.responseData;
        })
        builder.addCase(getUserProfileThunk.rejected, (state, action) => {
            state.isAuthenticated = false
            state.screenLoading = false;
        })

        // get other users
        builder.addCase(getOtherUsersThunk.pending, (state) => {
            //    do nothing
        })
        builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
            state.screenLoading = false;
            state.otherUsers = action.payload.responseData;
        })
        builder.addCase(getOtherUsersThunk.rejected, (state, action) => {
            state.screenLoading = false;
        })

    }
})

export const { setSelectedUser } = userSlice.actions
const userReducer = userSlice.reducer;
export { userReducer }