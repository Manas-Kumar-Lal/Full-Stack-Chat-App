import React, { useEffect } from 'react'
import { GoSearch } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import User from './User';
import { useDispatch, useSelector } from 'react-redux'
import { getOtherUsersThunk, logoutThunk } from '../../store/slices/user/user.thunk';

const UsersBar = () => {

    const dispatch = useDispatch();
    const { otherUsers } = useSelector(state => state.userReducer);

    const logoutUser = () => {
        dispatch(logoutThunk());
    }

    useEffect(() => {
        dispatch(getOtherUsersThunk());
    }, [])

    return (
        <div className='min-w-[20rem] h-screen border-r border-r-white/10 flex flex-col'>

            <h1 className='text-sm text-center bg-black mx-3 mt-3 font-semibold font-serif border border-[#7480FF] text-[#7480FF] rounded-md py-1 px-2'>GUP SHUP</h1>

            <label className="input input-bordered flex items-center gap-2 m-3 py-3">
                <input type="text" className="grow" placeholder="Search" />
                <GoSearch />
            </label>

            <div className='mx-3 overflow-y-auto h-full'>
                {otherUsers?.map(userDetails => {
                    return (
                        <User
                            key={userDetails?._id}
                            avatar={userDetails?.avatar}
                            name={userDetails?.fullName}
                            username={userDetails?.username}
                        />
                    )
                })}
            </div>

            <div className="p-3 flex items-center justify-between">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <button onClick={logoutUser} className="btn btn-primary btn-xs px-3">
                    Logout
                    <IoIosLogOut />
                </button>
            </div>

        </div>
    )
}

export default UsersBar