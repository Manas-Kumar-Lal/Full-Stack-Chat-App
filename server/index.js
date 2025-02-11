import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import { app, server } from './socket/socket.js';
import cookieParser from 'cookie-parser';
import { connectDb } from './databases/Cluster1.db.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000;

connectDb();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());

// routes
import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute)

// middlewares
import { errorMiddleware } from './middlewares/error.middleware.js';
app.use(errorMiddleware);

server.listen(PORT, () => {
    console.log(`Server Listen at port http://localhost:${PORT}`);
})