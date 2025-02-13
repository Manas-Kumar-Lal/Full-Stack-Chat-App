import React from 'react'
import { GoSearch } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import User from './User';

const UsersBar = () => {
    return (
        <div className='min-w-[20rem] h-screen border-r border-r-white/10 flex flex-col'>

            <label class="input input-bordered flex items-center gap-2 m-3 py-3">
                <input type="text" class="grow" placeholder="Search" />
                <GoSearch />
            </label>

            <div className='mx-3 overflow-y-auto h-full'>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>

            <div class="p-3 flex items-center justify-between">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <button class="btn btn-primary btn-xs px-3">
                    Logout
                    <IoIosLogOut />
                </button>
            </div>

        </div>
    )
}

export default UsersBar