import { asyncHandler, errorHandler } from "../utilities/utilityIndex.js";
import Conversation from '../models/conversationModel.js'
import Message from '../models/message.model.js'

export const sendMessage = asyncHandler(async (req, res) => {
    const senderId = req.user._id;
    const recieverId = req.params.id;
    const message = req.body.message;

    let conversation = await Conversation.findOne({
        participants: {
            $all: [senderId, recieverId]
        }
    })

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, recieverId]
        })
    }

    const newMessage = await Message.create({
        sender: senderId,
        recieverId,
        message,
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id);
        await conversation.save();
    }

    // socket

    res.status(201).json({
        success: true,
        message: "Message sent successfully",
        conversation,
        newMessage,
    })
})

export const getMessages = asyncHandler(async (req, res, next) => {
    const senderId = req.user._id;
    const recieverId = req.params.recieverId;
    const conversation = await Conversation.findOne({
        participants: {
            $all: [senderId, recieverId]
        }
    }).populate('messages')

    res.status(200).json({
        success: true,
        responseData: conversation,
    })
})