import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../../store/slices/user/user.slice';

const User = ({ avatar = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", name = "name", username = "username", completeUserDetails, selection }) => {
    const dispatch = useDispatch();
    const {selectedUser} = useSelector(state=>state.userReducer);

    return (
        <div onClick={() => dispatch(setSelectedUser(completeUserDetails))} className={`flex items-center gap-3 hover:bg-gray-600 rounded-lg cursor-pointer p-3 ${(selection &&selectedUser?._id === completeUserDetails?._id) && 'bg-gray-600'}`}>
            <div className="avatar online">
                <div className="w-10 rounded-full line-clamp-1">
                    <img src={avatar} />
                </div>
            </div>
            <div>
                <h2>{name}</h2>
                <p className='text-xs'>{username}</p>
            </div>
        </div>
    )
}

export default User