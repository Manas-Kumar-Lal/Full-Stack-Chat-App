import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
    },
    {
        path: '/login',
        element:
            <Login />
    },
    {
        path: '/signup',
        element:
            <Signup />
    },
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        <RouterProvider router={router} />
    </Provider>
)
