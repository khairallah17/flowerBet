import React from 'react'
import { Link } from 'react-router-dom'
import Whatsapp from "../../assets/whatsapp.png"

const ChatIcon = () => {
  return (
    <Link to="https://www.whatsapp.com" target="_blank" className='fixed right-4 bottom-24 md:right-10 md:bottom-10'>
        <img className='w-20 relative' src={Whatsapp} alt="" />
        <div className='absolute top-[25%] right-[120%] w-[150px] animated-contact bg-green-600 p-2 rounded-xl'>Contact Us Now !!</div>
    </Link>
  )
}

export default ChatIcon