import { useEffect } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getUserProfileThunk } from './store/slices/user/user.thunk';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileThunk());
  }, [])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
