import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import userContextHook from "../../hooks/userContextHook"

const SignIn = () => {

    const { logIn, test } = userContextHook()

    const navigate = useNavigate()
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSignIn = (e) => {
        e.preventDefault()
        logIn(email, password)
        navigate("/")
    }

  return (
    <div className="container mx-auto w-full h-[51vh] flex items-center justify-center flex-col gap-5">
        <h1 className='text-3xl font-bold'>Login In</h1>
        <form onSubmit={handleSignIn} className='flex flex-col gap-3 text-black'>
            <input type="email" name="email" className='bg-gray-200 p-2 rounded-lg outline-none' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="password flex flex-col">
              <input type="password" name='password' className='mb-2 bg-gray-200 p-2 rounded-lg outline-none' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
              <Link to="/resetpassword" className='text-white underline cursor-pointer'>forget password !</Link>
            </div>
            <button type="submit" className='p-2 px-4 bg-secondary hover:bg-primary-light duration-200 rounded-lg text-white' >submit</button>
            <p className='text-white text-center'>Need Account ? <Link to="/signup" className='text-blue-400'>Register</Link></p>
        </form>
    </div>
  )
}

export default SignIn