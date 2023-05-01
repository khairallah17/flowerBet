import React from 'react'
import DefaultNavbar from '../navbar/DefaultNavbar'
import Footer from '../Footer/Footer'
import ChatIcon from '../navgation/ChatIcon'
import { MdOutlineSportsFootball, MdOutlineCasino } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai"
import { SiGamedeveloper } from "react-icons/si"
import { FaCircleNotch } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import userContextHook from '../../hooks/userContextHook'
import FixedNavigation from '../navgation/FixedNavigation'
import AuthenticatedNavbar from '../navbar/AuthenticatedNavbar'

const Layout = ({ children }) => {

  return (
    <div className="w-screen h-screen">
        <div className="md:flex xl:items-center justify-center xl:justify-around relative">
          <div className='md:w-[500px] md:h-[700px] md:overflow-scroll md:m-20 md:bg-primary md:rounded-3xl md:items-center md:scrollbar-hide relative'>
            <DefaultNavbar/>
            {children}
            <Footer/>
            <div className="bar w-full sticky bottom-0 bg-slate-800 rounded-t-[40px] h-20 flex justify-between ">
            
            <Link to="/" className="homeicon flex flex-col rounded-t-full bg-slate-800 w-1/5 h-full items-center justify-center">
              <AiOutlineHome className='text-white w-6 md:w-12 h-6 md:h-12' />
              <p className=''>Home</p>
            </Link>

            <Link to="/sports" className="homeicon flex flex-col rounded-b-full bg-slate-600  w-1/5 h-full items-center justify-center">
              <MdOutlineSportsFootball className='text-white w-6 md:w-12 h-6 md:h-12' />
              <p className=''>Sports</p>
            </Link>

            <Link to="/roulette" className="homeicon flex flex-col rounded-t-full bg-slate-800 w-1/5 h-full items-center justify-center">
              <MdOutlineSportsFootball className='text-white w-6 md:w-12 h-6 md:h-12' />
              <p className=''>Roulette</p>
            </Link>

            <Link to="/casino" className="homeicon flex flex-col rounded-b-full bg-slate-600  w-1/5 h-full items-center justify-center">
              <MdOutlineCasino className='text-white w-6 md:w-12 h-6 md:h-12' />
              <p className=''>Casino</p>
            </Link>

            <Link to="/teenpatti" className="homeicon flex flex-col rounded-t-full bg-slate-800 w-1/5 h-full items-center justify-center">
              <SiGamedeveloper className='text-white w-6 md:w-12 h-6 md:h-12' />
              <p className=''>Teen Patti</p>
            </Link>
            </div>
          </div>
          <img src={Logo} alt="" className='hidden xl:block' />
        </div>
        <ChatIcon/>
    </div>
  )
}

export default Layout