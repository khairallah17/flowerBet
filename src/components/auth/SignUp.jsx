import React, { useState } from 'react'
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
    const [confPass, setConfPass] = useState("")
    const [contact, setContact] = useState("")
    const [reference, setReference] = useState("a")
    const [error, setError] = useState("")

    const [showPass, setShowPass] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (!email || !password || !username)
          setError("empty fields required")

        else if (password.length < 6)
          setError("password length should be more than 6")

          
        else if (password != confPass)
          setError("Password Does not matche :(")

        else {
          try {
            await register(email, password)
            const userCollection = collection(db, 'users')
            addDoc(userCollection,{
              username, 
              email, 
              password,
              contact, 
              reference, 
              deposit:0,
              depositHistory: [{}],
              withdrawlHistory:[{}],
              betHistory:[{}]
            })
            navigate("/")
          } catch (err) {
            setError("Unable to signUp")
          }
        }
    }

  return (
      <div className="container mx-auto w-screen my-10 flex items-center justify-center flex-col gap-5">
        <h1 className='text-3xl font-bold'>Register</h1>
        <form onSubmit={handleSignUp} className='flex flex-col gap-5'>
            <input type="text" name="username" className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='Username'  value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" name="email" className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name='contact' className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='+00 00 00 00 00' value={contact} onChange={(e) => setContact(e.target.value)} />
            <input type={showPass ? "text" : "password"} name='password' className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type={showPass ? "text" : "password"} name='confirm password' className='bg-gray-200 text-black p-2 rounded-lg outline-none' placeholder='confirm Password'  value={confPass} onChange={(e) => setConfPass(e.target.value)} />
            <div className="show-password flex items-center gap-2">
              <input type="checkbox" name="show password" onClick={() => setShowPass(!showPass)} id="" />
              <label htmlFor="show password" className='capitalize'>show password</label>
            </div>
            <p className='text-red-500 font-bold'>{error}</p>
            <button type="submit" className='p-2 px-4 bg-secondary rounded-lg text-white'>submit</button>
            <p className='text-center capitalize'>already have an account ? <Link to="/login" className='text-blue-400'> login</Link></p>
        </form>
      </div>
  )
}

export default SignUp