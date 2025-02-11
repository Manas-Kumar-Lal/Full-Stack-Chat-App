import React, { useState } from 'react'
import { TbLockPassword } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signupUserThunk } from '../store/slices/user/user.thunk';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
  })

  const handleInputChange = (e) => {
    setSignupData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async () => {
    const response = await dispatch(signupUserThunk(signupData))
    if (response?.payload?.success) {
      navigate('/');
    }
  }

  return (
    <div className='h-full min-h-screen w-full flex items-center'>
      <div className='w-full max-w-[35rem] m-auto flex flex-col gap-5 bg-base-200 p-10 rounded-md'>

        <h1 className='text-2xl font-bold'>Please Signup..!!</h1>

        <label className="input input-bordered flex items-center gap-2">
          <FaRegUser />
          <input type="text" className="grow" placeholder="Full Name" name='fullName' onChange={handleInputChange} />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FaRegUser />
          <input type="text" className="grow" placeholder="Username" name='username' onChange={handleInputChange} />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <TbLockPassword />
          <input type="text" className="grow" placeholder="Password" name='password' onChange={handleInputChange} />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <TbLockPassword />
          <input type="text" className="grow" placeholder="Confirm Password" name='confirmPassword' onChange={handleInputChange} />
        </label>

        <div className="input input-bordered flex items-center gap-5">
          <label htmlFor="male" className='flex items-center gap-2'>
            <input id='male' type="radio" name="gender" className="radio radio-secondary" value='male' defaultChecked onChange={handleInputChange} />
            Male
          </label>
          <label htmlFor="female" className='flex items-center gap-2'>
            <input id='female' type="radio" name="gender" className="radio radio-secondary" value='female' onChange={handleInputChange} />
            Female
          </label>
        </div>

        <p>
          Already have an account? &nbsp;
          <Link to={'/login'} className='text-blue-400 underline'>Login</Link>
        </p>

        <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}

export default Signup