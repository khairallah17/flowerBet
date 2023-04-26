import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useContextHook from "../../hooks/userContextHook"
import { db } from '../../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

const SignUp = () => {

    const navigate = useNavigate()

    const { register } = useContextHook()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (!email || !password)
          setError("empty fields required")

        else {
          try {
            await register(email, password)
            const userCollection = collection(db, 'users')
            addDoc(userCollection,{username, email,deposit:0,withdrawl:0,betHistory:[{}]})
            navigate("/")
          } catch (err) {
            setError("Unable to signUp")
          }
        }
    }

  return (
      <div className="container mx-auto w-screen h-[51vh] flex items-center justify-center flex-col gap-5">
        <h1 className='text-3xl font-bold'>Register</h1>
        <form onSubmit={handleSignUp} className='flex flex-col gap-5'>
            <input type="text" name="username" className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='Email'  value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" name="email" className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name='password' className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className='p-2 px-4 bg-secondary rounded-lg text-white'>submit</button>
            <p className='text-center capitalize'>already have an account ? <Link to="/login" className='text-blue-400'> login</Link></p>
        </form>
      </div>
  )
}

export default SignUp