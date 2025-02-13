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
            toast.success("Loggin Successfull..!!")
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

export const logoutThunk = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("user/logout");
            toast.success("Logout Sucessfully..!!")
            return response.data
        } catch (error) {
            console.log(error);
            const outputErr = error.response.data.errMessage || "Unexpected error, Please refresh the page..!!"
            toast.error(outputErr)
            return rejectWithValue(outputErr);
        }
    },
)

export const getUserProfileThunk = createAsyncThunk(
    'user/profile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("user/profile");
            return response.data
        } catch (error) {
            console.log(error);
            const outputErr = error.response.data.errMessage || "Unexpected error, Please refresh the page..!!"
            toast.error(outputErr)
            return rejectWithValue(outputErr);
        }
    },
)

export const getOtherUsersThunk = createAsyncThunk(
    'user/getOtherUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("user/get-other-users");
            return response.data
        } catch (error) {
            console.log(error);
            const outputErr = error.response.data.errMessage || "Unexpected error, Please refresh the page..!!"
            toast.error(outputErr)
            return rejectWithValue(outputErr);
        }
    },
)