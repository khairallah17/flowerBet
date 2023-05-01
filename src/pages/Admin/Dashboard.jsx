import React from 'react'
import { 
    UserIcon,
    Cog6ToothIcon,
    HomeIcon } from "@heroicons/react/24/outline";
import { BiMoneyWithdraw } from "react-icons/bi"
import { RiLuggageDepositLine } from "react-icons/ri"
import { MdOutlineLogout } from "react-icons/md"
import { Link } from 'react-router-dom';
import adminContextHook from '../../hooks/adminContextHook';
import { useNavigate } from 'react-router-dom';

    const classCircles = " w-72 h-72 border-[16px] border-white rounded-full flex items-center justify-center"

    
const Dashboard = () => {
        
    const { adminLogout } = adminContextHook()

    const navigate = useNavigate()

    const logout = async () => {

        try{

            await adminLogout()
            navigate("/admin")

        } catch (error) {
            console.log(err.message)
        }

    }
    
    const elements =[   { text: "user details", icon:<UserIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#17A2B8]`, onClick: ""  },
                            { text: "Withdrawls", icon: <BiMoneyWithdraw className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#DC3545]`, onClick: "" },
                            { text: "Deposits", icon: <RiLuggageDepositLine className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#E83E8C]`, onClick: "" },
                            { text: "settings", icon: <Cog6ToothIcon className='w-44 h-44 text-white '/>, color: `${classCircles} bg-[#007BFF]`, onClick: "" }]

  return (
    <div className=' bg-slate-200 h-screen text-black p-10'>

        <h1 className='capitalize text-3xl mb-10' >dahsboard</h1>

        <div className="breadcrumb flex gap-2 bg-white w-fit p-1 px-2 mb-10">
            <HomeIcon className='w-6 h-6 text-blue-600 ' />
            <span> / Dashboard</span>
        </div>

        <div className="menu flex gap-10 flex-wrap">

            {

                elements.map((ele, key) => (
                    <Link key={key} to={`/admin/${ele.text.split(" ").join("")}`} className="userDetails flex items-center flex-col w-fit gap-4">
                        <div className={ele.color}>
                            {ele.icon}
                        </div>
                        <p className='capitalize text-2xl text-blue-500'>{ele.text}</p>
                    </Link>
                ))

            }

            <Link onClick={logout} className="userDetails flex items-center flex-col w-fit gap-4">
                <div className={` ${classCircles} bg-[#6C757D]`}>
                    <MdOutlineLogout className='w-44 h-44 text-white '/>
                </div>
                <p className='capitalize text-2xl text-blue-500'>logout</p>
            </Link>

        </div>

    </div>
  )
}

export default Dashboard