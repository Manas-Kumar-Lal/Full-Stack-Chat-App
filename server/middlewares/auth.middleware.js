import { asyncHandler, errorHandler } from '../utilities/utilityIndex.js'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.token || req.header("authorization")?.replace("Bearer ", "");
    if (!token) {
        return next(new errorHandler("Invalid authentication token", 401))
    }
    const tokenData = jwt.verify(token, process.env.JWT_SECRET)
    if(!tokenData){
        return next(new errorHandler("Invalid authentication token",401))
    }
    req.user = await User.findById(tokenData.userId);
    next();
})