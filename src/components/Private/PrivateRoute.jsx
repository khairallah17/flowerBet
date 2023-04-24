import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import userContextHook from '../../hooks/userContextHook'
import Login from '../../pages/Login'

const PrivateRoute = () => {

    const { currentUser } = userContextHook()

  return (
    currentUser ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute