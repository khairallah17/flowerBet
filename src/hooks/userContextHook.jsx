import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const userContextHook = () => {

    return useContext(UserContext)

}

export default userContextHook