import { asyncHandler, errorHandler } from '../utilities/utilityIndex.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = asyncHandler(async (req, res, next) => {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !confirmPassword || !gender) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return next(new errorHandler("Password and confirm password do not match!"));
    }

    const userWithUsername = await User.findOne({ username });
    if (userWithUsername) {
        return next(new errorHandler("Username already exists!"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const avatarType = gender === 'male' ? 'boy' : 'girl';
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

    const user = await User.create({
        fullName,
        username,
        password: hashedPassword,
        gender,
        avatar,
    })

    res.send({
        success: true,
        responseData: user,
    })
})

export const login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    if (username, password) {
        return res.status(200).json({ message: 'All Fields are required' });
    }
    const user = await User.findOne({ username });
    if (!user) {
        return next(new errorHandler("Invalid username or password!"));
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        return next(new errorHandler("Invalid username or password!"));
    }
    const tokenData = {
        userId: user._id,
        username: user.username,
        fullName: user.fullName,
        gender: user.gender,
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.SECRET_EXPIRATION });

    return res
        .status(200)
        .cookie("token", token, {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRATION * 1000),
            httpOnly: true,
            sameSite: 'None',
            httpOnly: true,
            secure: true,
        })
        .json({
            success: true,
            message: "Login successful",
            responseData: {
                ...user,
                token,
            }
        })
})

export const logout = asyncHandler(async (req, res, next) => {
    res.status(200)
        .cookie("token", "", { expires: new Date(0), httpOnly: true })
        .json({ success: true, message: "Logged out successfully" });
});

export const getUsersExceptMe = asyncHandler(async (req, res, next) => {
    const users = await User.find({ _id: { $ne: req.user._id } })
    res.status(200).json({
        success: true,
        responseData: users
    })
})