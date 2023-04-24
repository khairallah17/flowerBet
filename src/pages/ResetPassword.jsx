import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'
import { Link } from 'react-router-dom'

const ResetPassword = () => {

    const { resetPassword } = userContextHook()

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleReset = async (e) => {
        e.preventDefault()
        if (!email)
            setError("empty fields required")
        else{
            try {
                await resetPassword(email)
                setMessage("check you inbox to reset your password")
            } catch (err) {
                console.log("error to reset Password")
            }
        }
    }

    return (
        <Layout>
            
            <div className="container mx-auto w-full h-[51vh] flex items-center justify-center">
                <div className="form-container flex flex-col gap-5 text-center shadow-lg p-5 rounded-xl">
                    <h1 className='text-3xl font-bold capitalize'>reset password</h1>
                    <form onSubmit={handleReset} className='flex flex-col gap-3 text-black'>
                        <input type="email" name="email" className='bg-gray-200 p-2 rounded-lg outline-none' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" className='p-2 px-4 bg-secondary hover:bg-primary-light duration-200 rounded-lg text-white' >submit</button>
                        <p className="text-red-500">{error}</p>
                        <p className="text-green-500">{message}</p>
                        <Link to="/login" className='text-center text-blue-400 capitalize'>login</Link>
                    </form>
                </div>
            </div>

        </Layout>
  )
}

export default ResetPassword