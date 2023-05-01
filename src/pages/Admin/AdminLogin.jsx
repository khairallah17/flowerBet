import React, { useState } from 'react'
import adminContextHook from '../../hooks/adminContextHook'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {


    const { AdminLogin } = adminContextHook()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleAdminLogin = async () => {

        try{

            await AdminLogin(email, password)
            navigate("/admin/dashboard")

        } catch (err) {
            console.log(err.message)
        }

    }

  return (
    <div className='bg-slate-200 w-screen h-screen text-black flex items-center justify-center'>
        
        <div className="login-form flex flex-col gap-5 shadow-lg p-5 rounded-xl">
            <h1 className='text-3xl font-bold text-center'>Admin Login</h1>
            <form className='flex flex-col gap-4'>
                
                <div className="email flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className='bg-gray-300 outline-none p-2 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} id="" />
                </div>

                <div className="password flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className='bg-gray-300 outline-none p-2 rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} id="" />
                </div>

                <button type="button" onClick={handleAdminLogin} className='bg-secondary p-2 rounded-lg text-white'>Login</button>

            </form>
        </div>

    </div>
  )
}

export default AdminLogin