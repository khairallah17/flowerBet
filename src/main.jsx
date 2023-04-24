import React from 'react'
import ReactDOM from 'react-dom/client'
// import SignUp from './components/SignUp.jsx'
import Home from './pages/Home.jsx'
import Roulette from './pages/Roulette.jsx'
import Sports from './pages/Sports.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Casino from './pages/Casino.jsx'
import TeenPatti from './pages/TeenPatti.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  // {
  //   path: "/signup",
  //   element: <SignUp/>
  // },
  {
    path: "/roulette",
    element: <Roulette/>
  },
  {
    path: "/sports",
    element: <Sports/>
  },
  {
    path: "/login",
    element: <App/>
  },
  // {
  //   path: "signup",
  //   element: <SignUp/>
  // },
  {
    path: "casino",
    element: <Casino/>
  },
  {
    path: "teenpatti",
    element: <TeenPatti/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
