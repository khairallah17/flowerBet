import React from 'react'
import DefaultNavbar from '../navbar/DefaultNavbar'
import Footer from '../Footer/Footer'
import ChatIcon from '../navgation/ChatIcon'
import userContextHook from '../../hooks/userContextHook'
import FixedNavigation from '../navgation/FixedNavigation'
import AuthenticatedNavbar from '../navbar/AuthenticatedNavbar'

const Layout = ({ children }) => {

  return (
    <div className="w-screen h-full">
        <DefaultNavbar/>
        {children}
        <ChatIcon/>
        {/* <FixedNavigation/> */}
        <Footer/>
    </div>
  )
}

export default Layout