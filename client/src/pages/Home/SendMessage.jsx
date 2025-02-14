import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../../store/slices/message/message.thunk';
import { LuSend } from "react-icons/lu";

const SendMessage = () => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(state => state.userReducer);

    const handleSendMessage = () => {
        if (!selectedUser?._id) return;
        dispatch(sendMessageThunk({
            receiverId: selectedUser?._id,
            message
        }))
        setMessage('');
    }

    return (
        <div className='w-full flex items-center gap-2 p-3'>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage} className="btn btn-square btn-outline btn-primary">
                <LuSend />
            </button>
        </div>
    )
}

export default SendMessage