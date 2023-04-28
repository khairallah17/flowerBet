import React, { useContext } from 'react'
import AdminContext from '../context/AdminContext'

const adminContextHook = () => {
  return (
    useContext(AdminContext)
  )
}

export default adminContextHook