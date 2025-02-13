import React from 'react'
import User from './User'
import { LuSend } from "react-icons/lu";
import Message from './Message'

const MessageContainer = () => {
  return (
    <div className='h-screen flex flex-col w-full'>

      <div className='w-full border-b border-b-white/10 p-3'>
        <User />
      </div>

      <div className='h-full overflow-y-auto p-3'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className='w-full flex items-center gap-2 p-3'>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full" />
        <button className="btn btn-square btn-outline btn-primary">
          <LuSend />
        </button>
      </div>

    </div>
  )
}

export default MessageContainer