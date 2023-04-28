import React from 'react'
import { 
    UserIcon,
    GlobeAltIcon,
    EyeIcon,
    Cog6ToothIcon,
    TrophyIcon,
    ChatBubbleOvalLeftIcon,
    HomeIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

    const classCircles = " w-72 h-72 border-[16px] border-white rounded-full flex items-center justify-center"

    const elements =[   { text: "user details", icon:<UserIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#17A2B8]`  },
                        { text: "sport's betting", icon: <GlobeAltIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#DC3545]` },
                        { text: "ledger", icon: <EyeIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#E83E8C]` },
                        { text: "settings", icon: <Cog6ToothIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#007BFF]` },
                        { text: "match notification", icon: <TrophyIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#28A745]` },
                        { text: "logout", icon:<ChatBubbleOvalLeftIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#6C757D]`  }]

const Dashboard = () => {
  return (
    <div className=' bg-slate-200 h-screen text-black p-10'>

        <h1 className='capitalize text-3xl mb-10' >dahsboard</h1>

        <div className="breadcrumb flex gap-2 bg-white w-fit p-1 px-2 mb-10">
            <HomeIcon className='w-6 h-6 text-blue-600 ' />
            <span> / Dashboard</span>
        </div>

        <div className="menu flex gap-10 flex-wrap">

            {

                elements.map(ele => (
                    <Link to={`/admin/${ele.text.split(" ").join("")}`} className="userDetails flex items-center flex-col w-fit gap-4">
                        <div className={ele.color}>
                            {ele.icon}
                        </div>
                        <p className='capitalize text-2xl text-blue-500'>{ele.text}</p>
                    </Link>
                ))

            }

        </div>

    </div>
  )
}

export default Dashboard