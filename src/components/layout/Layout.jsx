import React from 'react'
import DefaultNavbar from '../navbar/DefaultNavbar'
import Footer from '../Footer/Footer'
import userContextHook from '../../hooks/userContextHook'
import FixedNavigation from '../navgation/FixedNavigation'
import AuthenticatedNavbar from '../navbar/AuthenticatedNavbar'

const Layout = ({ children }) => {

  return (
    <div className="w-screen h-full">
        <DefaultNavbar/>
        {children}
        {/* <FixedNavigation/> */}
        <Footer/>
    </div>
  )
}

export default Layout