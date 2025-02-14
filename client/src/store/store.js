import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user/user.slice.js'
import { messageReducer } from './slices/message/message.slice.js';

const store = configureStore({
    reducer: {
        userReducer,
        messageReducer
    },
    devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools in development mode
})

export default store;