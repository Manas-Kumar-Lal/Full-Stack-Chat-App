import React from 'react'
import MessageContainer from './MessageContainer'
import UsersBar from './UsersBar'

const HomePage = () => {
  return (
    <div className='flex'>
      <UsersBar />
      <MessageContainer />
    </div>
  )
}

export default HomePage