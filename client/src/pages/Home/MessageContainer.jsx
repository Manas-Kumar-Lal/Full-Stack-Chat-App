import React, { useEffect } from 'react'
import User from './User'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesThunk } from '../../store/slices/message/message.thunk';
import SendMessage from './SendMessage';

const MessageContainer = () => {

  const dispatch = useDispatch();
  const { selectedUser } = useSelector(state => state.userReducer);
  const { messages } = useSelector(state => state.messageReducer);

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessagesThunk({ recieverId: selectedUser?._id }))
    }
  }, [selectedUser?._id])

  return (
    <>
      {!selectedUser ? (
        <div className='h-screen flex flex-col items-center justify-center w-full'>
          <h2 className='text-2xl font-semibold'>
            Welcome to <span className='text-[#7480FF]'>GUP SHUP</span>
          </h2>
          <p>Please select a person..!!</p>
        </div>
      ) : (
        <div className='h-screen flex flex-col w-full'>

          <div className='w-full border-b border-b-white/10 p-3'>
            <User
              username={selectedUser?.username}
              name={selectedUser?.fullName}
              avatar={selectedUser?.avatar}
            />
          </div >

          <div className='h-full overflow-y-auto p-3'>
            {messages?.map(message => {
              return (
                <Message
                  key={message?._id}
                  message={message?.message}
                  senderId={message?.senderId}
                  createdAt={message?.createdAt}
                />
              )
            })}
          </div>

          <SendMessage />

        </div >
      )}

    </>
  )
}

export default MessageContainer