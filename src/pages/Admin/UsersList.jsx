import React, { useState, useEffect } from 'react'
import { UsersIcon } from "@heroicons/react/24/outline";
import adminContextHook from '../../hooks/adminContextHook';
import { 
    ChevronDownIcon,
    HomeIcon,
    EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

const UsersList = () => {

    const { addNewUser, getAllUsers, getUserById, updateUserInfo } = adminContextHook()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [reference, setRefernce] = useState("")
    const [uid, setUid] = useState("")
    
    const [showPassword, setShowPassword] = useState(false)

    const [users, setUsers] = useState([])

    const [edit, setEdit] = useState(false)

    const [options, setOption] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
      
        const fetchUsers = async () => {

            try {
                
                const response = await getAllUsers()
                setUsers(response)

            } catch (err) {
                console.log(err.message)
            }

        }

        fetchUsers()

    }, [])
    
    const getUserInfoById = async (id) => {

        try {
            
            const response = await getUserById(id)

            setEdit(true)
            setEmail(response.email) 
            setUsername(response.username)
            setContact(response.contact)
            setRefernce(response.reference)
            setPassword(response.password)

        } catch (err) {
            console.log(err.message)
        }

    }

    const updateUser = async () => {

    }

    const addUser = async () => {

    }

  return (
    <div className='bg-white h-screen text-black p-10'>
        
        <button className="flex items-center mb-10" onClick={() => navigate("/admin/dashboard")} >
            <ChevronDownIcon className='w-6 h-6 rotate-90'/>
            <p>Home</p>
        </button>

        <div className="breadcrumb flex gap-2 bg-slate-200 w-fit p-1 px-2 mb-10">
            <HomeIcon className='w-6 h-6 text-blue-600 ' />
            <span> / user Details</span>
        </div>


        <h1 className='capitalize text-3xl mb-10 flex items-center gap-3' >
            <UsersIcon className="h-12 w-12 text-black" />
            Users List
        </h1>

        <form onSubmit={addNewUser} className="flex flex-col gap-4">

            <div className="email flex gap-10 items-center">
                <label htmlFor="email" className='capitalize font-bold w-[200px]'>email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none w-[300px] bg-gray-200 p-2 rounded-lg' type="email" name="email" id="" />
            </div>

            <div className="password flex gap-10 items-center">
                <label htmlFor="password" className='capitalize font-bold w-[200px]'>password</label>
                <div className="flex items-center password-input bg-gray-200 rounded-lg w-[300px]">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none bg-gray-200 p-2 rounded-lg' type={showPassword ? "text" : "password"} name="password" id="" />
                    <EyeIcon onClick={() => setShowPassword(!showPassword)} className="h-6 w-6 text-gray-500 cursor-pointer" />
                </div>
            </div>

            <div className="username flex gap-10 items-center">
                <label htmlFor="username" className='capitalize font-bold w-[200px]'>username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className='outline-none w-[300px] bg-gray-200 p-2 rounded-lg' type="text" name='username' />
            </div>

            <div className="contact flex gap-10 items-center">
                <label htmlFor="contact" className='capitalize font-bold w-[200px]'>contact</label>
                <input value={contact} onChange={(e) => setContact(e.target.value)} className='outline-none w-[300px] bg-gray-200 p-2 rounded-lg' type="tel" name="contact" id="" />
            </div>

            <div className="reference flex gap-10 items-center">
                <label htmlFor="reference" className='capitalize font-bold w-[200px]'>reference</label>
                <input value={reference} onChange={(e) => setRefernce(e.target.value)} className='outline-none  w-[300px] bg-gray-200 p-2 rounded-lg' type="text" name='reference' />
            </div>

            <div className="button flex bg-gray-100 gap-5 p-5">
                <button type='submit' onClick={edit ? updateUser : addUser} className='capitalize p-2 px-3 rounded-md bg-black text-white'>{edit ? "update" : "add"}</button>
                <button type='button' className='capitalize p-2 px-3 rounded-md bg-red-500 text-white'>cancel</button>
            </div>

        </form>

        <div className="usersList mt-10">

            <table className='table-auto w-full border-2'>

                <thead className=''>
                    <tr className='border-b'>
                        <th className='border-b border-r text-left p-4 capitalize'>action</th>
                        <th className='border-b border-r text-left p-4 capitalize'>uid</th>
                        <th className='border-b border-r text-left p-4 capitalize'>username</th>
                        <th className='border-b border-r text-left p-4 capitalize'>email</th>
                        <th className='border-b border-r text-left p-4 capitalize'>password</th>
                        <th className='border-b border-r text-left p-4 capitalize'>contact</th>
                        <th className='border-b border-r text-left p-4 capitalize'>reference</th>
                        <th className='border-b border-r text-left p-4 capitalize'>date</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                        users.map(({id, data}, key) => (
                            <tr key={key}>
                                <td className='relative border-b border-r p-4 '>
                                    <div className="option flex text-white gap-2">
                                        <button onClick={() => getUserInfoById(id)} className='bg-blue-500 p-2 rounded-lg'>Edit</button>
                                        <button id={id} className='bg-red-500 p-2 rounded-lg'>Delete</button>
                                    </div>
                                </td>
                                <td className='border-b border-r p-4'>{id}</td>
                                <td className='border-b border-r p-4'>{data.username}</td>
                                <td className='border-b border-r p-4'>{data.email}</td>
                                <td className='border-b border-r p-4'>{data.password}</td>
                                <td className='border-b border-r p-4'>{data.contact}</td>
                                <td className='border-b border-r p-4'>{data.reference}</td>
                                <td className='border-b border-r p-4'>date</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

            {/* <DataTable
                columns={columns}
                data={data}
            /> */}

        </div>

    </div>
  )
}

export default UsersList