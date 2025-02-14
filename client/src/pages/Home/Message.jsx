import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const Message = ({ message, createdAt, senderId }) => {

    const messageRef = useRef();
    const { profileData, selectedUser } = useSelector(state => state.userReducer);

    useEffect(() => {
        messageRef.current.scrollIntoView({ behavior: "smooth" });
    }, [message])

    return (
        <>
            <div ref={messageRef} className={`chat ${profileData?._id === senderId ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profileData?._id === senderId ? profileData?.avatar : selectedUser?.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">{message}</div>
            </div>
        </>
    )
}

export default Message