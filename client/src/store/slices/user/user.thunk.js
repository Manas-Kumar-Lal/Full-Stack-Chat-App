import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserThunk = createAsyncThunk(
    'users/login',
    async () => {
        try {
            console.log("user thunk");
        } catch (err) {

        }
    },
)