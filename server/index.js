import dotenv from 'dotenv'
dotenv.config();

import { app, server } from './socket/socket.js';
import cookieParser from 'cookie-parser';
import { connectDb } from './databases/Cluster1.db.js'
const PORT = process.env.PORT || 5000;

connectDb();

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute)

server.listen(PORT, () => {
    console.log(`Server Listen at port http://localhost:${PORT}`);
})