import React from 'react'
import { HomeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

const MatchNotification = () => {

    const navigate = useNavigate()

  return (
    <div className=' bg-slate-200 h-screen text-black p-10'>
    
        <button className="flex items-center mb-10" onClick={() => navigate("/admin/dashboard")} >
                <ChevronDownIcon className='w-6 h-6 rotate-90'/>
                <p>Home</p>
            </button>

        <h1 className='capitalize text-3xl mb-10' >Match Notification</h1>

        <div className="breadcrumb flex gap-2 bg-white w-fit p-1 px-2 mb-10">
            <HomeIcon className='w-6 h-6 text-blue-600 ' />
            <span> / Match Notification</span>
        </div>


    </div>
  )
}

export default MatchNotification