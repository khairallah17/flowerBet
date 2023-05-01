import React, { useState, useEffect } from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { 
  Bars3Icon, 
  XMarkIcon,
 } from "@heroicons/react/24/outline";
import userContextHook from '../../hooks/userContextHook';
import Profile from "../../assets/user.png"

const navigation = ["home","sports","Roulette","casino","teen patti"]

const DefaultNavbar = () => {

  const { getUserDetails, currentUser, setId } = userContextHook()
  const [dbData, setDbData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const d = await getUserDetails(currentUser.email)
      setDbData(d[0].data)
      setId(d[0].id)
    }
  
    fetch()
  },[])

  const [openNav, setOpenNav] = useState(false)


  return (
    <div className="w-full py-4 shadow-lg bg-primary text-white relative">
      <nav className="container mx-auto flex items-center justify-between px-5">
        
        <div className="logo-container">
          <Link to="/"><img src={Logo} alt="logo flower bet" className=' w-64' /></Link>
        </div>

        <div className="nav-buttons flex items-center gap-5">
          

            {
              currentUser ? 
                <Link to="/profile" className='flex flex-col items-center gap-1'>
                  <img src={Profile} className="w-16" alt="" />
                  <p>EXP: {dbData.deposit}</p>
                </Link> :
                <div className="nav-buttons flex items-center gap-5">
                  <Link to="/login" className='capitalize p-2 px-4 bg-secondary hover:bg-secondary-light duration-200 rounded-lg'>Login</Link>
                  <Link to='/signUp' className='capitalize p-2 px-4 bg-secondary hover:bg-secondary-light duration-200 rounded-lg'>register</Link>
                </div>
            }

        </div>

      </nav>

    </div>
  )
}

export default DefaultNavbar