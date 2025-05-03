import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Loing from './components/header/Loing.jsx'
import Register from './components/header/Register.jsx'
import AuthProvider from './components/context/AuthProvider.jsx'
import Orders from './components/header/Orders.jsx'
import Profile from './components/header/Profile.jsx'
import PrivateRoute from './components/Route/PrivateRoute.jsx'
import Dashboard from './components/header/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Loing },
      { path: 'register', Component: Register },
      {path:'orders',
        // Component:Orders,
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {path:"profile",
        //  Component:Profile,
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
