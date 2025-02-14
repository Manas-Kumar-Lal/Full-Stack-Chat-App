import { createSlice } from "@reduxjs/toolkit";
import { getMessagesThunk, sendMessageThunk } from "./message.thunk.js";


const initialState = {
    screenLoading: true,
    messages: [],
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        // get messages
        builder.addCase(getMessagesThunk.pending, (state) => {
            state.screenLoading = true;
        })
        builder.addCase(getMessagesThunk.fulfilled, (state, action) => {
            state.screenLoading = false;
            state.messages = action.payload.responseData?.messages;
        })
        builder.addCase(getMessagesThunk.rejected, (state, action) => {
            state.screenLoading = false;
        })

        // send message
        builder.addCase(sendMessageThunk.pending, (state) => {

        })
        builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            const prevMessage = state.messages ?? [];
            state.messages = [...prevMessage, action.payload.newMessage];
        })
        builder.addCase(sendMessageThunk.rejected, (state, action) => {
        })
    }
})

export const { setAuthUser } = messageSlice.actions
const messageReducer = messageSlice.reducer;
export { messageReducer }