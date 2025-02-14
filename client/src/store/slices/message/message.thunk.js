import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../../components/utilities/functions/axiosInstance.utility.js'
import { toast } from 'react-hot-toast'

export const getMessagesThunk = createAsyncThunk(
    'message/getMessages',
    async ({ recieverId }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`message/get-messages/${recieverId}`);
            return response.data
        } catch (error) {
            console.log(error);
            const outputErr = error.response.data.errMessage || "Unexpected error, Please refresh the page..!!"
            toast.error(outputErr)
            return rejectWithValue(outputErr);
        }
    },
)

export const sendMessageThunk = createAsyncThunk(
    'message/sendMessage',
    async ({ receiverId, message }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(`message/send/${receiverId}`, {
                message,
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