import React from 'react'

const User = () => {
    return (
        <div className='flex items-center gap-3'>
            <div class="avatar online">
                <div class="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h2>Manas Kumar lal</h2>
                <p>Username</p>
            </div>
        </div>
    )
}

export default User