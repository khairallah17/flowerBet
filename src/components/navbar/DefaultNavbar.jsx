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
      <nav className="container mx-auto flex items-center">
        
        <div className="logo-container">
          <Link to="/"><img src={Logo} alt="logo flower bet" className=' w-64' /></Link>
        </div>

        <div className="nav-links flex-grow md:block hidden">
          <ul className='flex gap-5 justify-center'>

            {
              navigation.map((nav, key) => (
                <li key={key} className='capitalize duration-200 hover:text-secondary'>
                  <Link to={nav == "home" ? "/" : `/${nav.split(" ").join("")}`}>{nav}</Link>
                </li>
              ))
            }

          </ul>
        </div>

        <div className="mobile-menu md:hidden flex flex-grow items-center justify-center">
          <Bars3Icon className="h-10 w-10 text-white cursor-pointer" onClick={() => setOpenNav(true)} />

            <div className={`mobile-menu-overlay fixed z-20 h-screen ${openNav ? "top-0" : "top-[-1000px]"} left-0 w-full bg-primary duration-300`}>
              <ul className='flex flex-col items-center justify-around text-3xl h-full'>
                <li className='border-b pb-10 w-full text-center flex justify-between items-center mx-auto px-10 md:px-24'>
                  Navigation Menu
                  <XMarkIcon className="h-10 w-10 text-white cursor-pointer" onClick={() => setOpenNav(false)} />
                </li>
                {
                  navigation.map((nav, key) => (
                    <li key={key} className='capitalize duration-200 hover:text-secondary pb-3 border-b-2 border-transparent hover:border-secondary'>
                      <Link to={`/${nav}`}>{nav}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>

        </div>

        <div className="nav-buttons flex items-center gap-5">
            
            {/* <div className="deposit--login flex flex-col items-center gap-1">
              
              <p className={`${currentUser ? "block" : "hidden"} text-center line-clamp-1 font-light max-w-[100px]`}>BAL: {dbData.deposit}</p>
            </div>

            <div className="withdrawl--signup flex flex-col items-center gap-1">
              
              <p className={`${currentUser ? "block" : "hidden"} font-light line-clamp-1 text-center max-w-[100px]`}>EXP: {dbData.withdrawl}</p>
            </div> */}

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