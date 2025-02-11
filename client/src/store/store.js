import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user/user.slice.js'

const store = configureStore({
    reducer: {
        userReducer
    },
    devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools in development mode
})

export default store;