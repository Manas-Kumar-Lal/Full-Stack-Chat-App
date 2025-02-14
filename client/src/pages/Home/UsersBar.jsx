import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import User from './User';
import { useDispatch, useSelector } from 'react-redux'
import { getOtherUsersThunk, logoutThunk } from '../../store/slices/user/user.thunk';

const UsersBar = () => {

    const dispatch = useDispatch();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [Users, setUsers] = useState([]);
    const { otherUsers, profileData } = useSelector(state => state.userReducer);

    const logoutUser = () => {
        dispatch(logoutThunk());
    }

    useEffect(() => {
        dispatch(getOtherUsersThunk());
    }, [])

    useEffect(() => {
        if (searchKeyword) {
            const searchedUsers = otherUsers?.filter(user => user.fullName.toLowerCase().includes(searchKeyword))
            setUsers(searchedUsers);
        } else {
            setUsers(otherUsers)
        }
    }, [searchKeyword])

    return (
        <div className='min-w-[20rem] h-screen border-r border-r-white/10 flex flex-col'>

            <h1 className='text-sm text-center bg-black mx-3 mt-3 font-semibold font-serif border border-[#7480FF] text-[#7480FF] rounded-md py-1 px-2'>GUP SHUP</h1>

            <label className="input input-bordered flex items-center gap-2 m-3 py-3">
                <input onChange={(e) => setSearchKeyword(e.target.value)} type="text" className="grow" placeholder="Search" />
                <GoSearch />
            </label>

            <div className='mx-3 overflow-y-auto h-full flex flex-col gap-1'>
                {Users?.map(userDetails => {
                    return (
                        <User
                            key={userDetails?._id}
                            avatar={userDetails?.avatar}
                            name={userDetails?.fullName}
                            username={userDetails?.username}
                            completeUserDetails={userDetails}
                            selection={true}
                        />
                    )
                })}
            </div>

            <div className="p-3 flex items-center justify-between">
                <div className='flex items-center gap-3'>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                            <img src={profileData?.avatar} />
                        </div>
                    </div>
                    <h2 className='line-clamp-1'>{profileData?.fullName}</h2>
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