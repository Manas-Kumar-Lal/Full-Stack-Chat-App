import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../../components/utilities/functions/axiosInstance.utility.js'
import { toast } from 'react-hot-toast'

export const loginUserThunk = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("user/login", {
                username,
                password
            });
            return response.data
        } catch (error) {
            console.log(error);
            const outputErr = error.response.data.errMessage || "Unexpected error, Please refresh the page..!!"
            toast.error(outputErr)
            return rejectWithValue(outputErr);
        }
    },
)

export const signupUserThunk = createAsyncThunk(
    'user/signup',
    async ({ fullName, username, password, confirmPassword, gender }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("user/register", {
                fullName,
                username,
                password,
                confirmPassword,
                gender
            });
            return response.data
        } catch (error) {
            console.log(error);
            const outputErr = error.response.data.errMessage || "Unexpected error, Please refresh the page..!!"
            toast.error(outputErr)
            return rejectWithValue(outputErr);
        }
    },
)