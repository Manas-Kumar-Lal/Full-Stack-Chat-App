import { asyncHandler, errorHandler } from "../utilities/utilityIndex.js";
import Conversation from '../models/conversationModel.js'
import Message from '../models/message.model.js'
import { getSocketId, io } from "../socket/socket.js";

export const sendMessage = asyncHandler(async (req, res) => {
    const senderId = req.user._id;
    const receiverId = req.params.receiverId;
    const message = req.body.message;

    let conversation = await Conversation.findOne({
        participants: {
            $all: [senderId, receiverId]
        }
    })

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId]
        })
    }

    const newMessage = await Message.create({
        senderId: senderId,
        receiverId,
        message,
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id);
        await conversation.save();
    }

    // socket
    const receiverSocketId = getSocketId(receiverId);
    if (receiverSocketId) {
        io.to(receiverSocketId).emit('newMessage', newMessage)
    }

    res.status(201).json({
        success: true,
        message: "Message sent successfully",
        newMessage,
    })
})

export const getMessages = asyncHandler(async (req, res, next) => {
    const senderId = req.user._id;
    const receiverId = req.params.receiverId;
    const conversation = await Conversation.findOne({
        participants: {
            $all: [senderId, receiverId]
        }
    }).populate('messages')

    res.status(200).json({
        success: true,
        responseData: conversation,
    })
})