import React from 'react'
import {
    SignalIcon,
    ArchiveBoxIcon,
    ForwardIcon
   } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const FixedNavigation = () => {

    const fixedNav = [{ text: "history", icon: <ArchiveBoxIcon className="h-6 w-6 text-white" /> },
                  { text: "live", icon: <SignalIcon className="h-6 w-6 text-white" /> },
                  { text: "upcoming", icon: <ForwardIcon className="h-6 w-6 text-white" /> }]

  return (
    <div className='fixed bottom-4 left-[40%] bg-secondary rounded-full'>
        <div className="fixed-navigation flex gap-5 justify-between">
            
            {
              fixedNav.map(({ icon, text }, key) => (
                <Link key={key} className='flex flex-col items-center justify-center gap-2 hover:bg-primary duration-200 w-28 h-28 rounded-full'>
                  <span className="icon">
                    { icon }
                  </span>
                  <span className='text-white'>
                    { text }
                  </span>
                </Link>
              ))
            }
  
        </div>
    </div>
  )
}

export default FixedNavigation