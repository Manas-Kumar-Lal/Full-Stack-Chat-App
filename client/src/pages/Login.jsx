import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loginUserThunk } from '../store/slices/user/user.thunk';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setLoginData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async () => {
    const response = await dispatch(loginUserThunk(loginData));
    if (response?.payload?.success) {
      navigate('/');
    }
  }

  return (
    <div className='h-full min-h-screen w-full flex items-center'>
      <div className='w-full max-w-[35rem] m-auto flex flex-col gap-5 bg-base-200 p-10 rounded-md'>

        <h1 className='text-2xl font-bold'>Please Login..!!</h1>

        <label className="input input-bordered flex items-center gap-2">
          <FaRegUser />
          <input type="text" className="grow" placeholder="Username" name='username' onChange={handleInputChange} />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <TbLockPassword />
          <input type="text" className="grow" placeholder="Password" name='password' onChange={handleInputChange} />
        </label>

        <p>
          Don't have an account? &nbsp;
          <Link to={'/signup'} className='text-blue-400 underline'>Signup</Link>
        </p>

        <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}

export default Login