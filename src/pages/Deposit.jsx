import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'

const Deposit = () => {

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const {setAddDeposit, addDeposit, getUserDetails } = userContextHook()

    const handleSubmitDeposit = async () => {
        if (addDeposit < 100)
            setError("please enter a valid deposit")
        else{
            const dt = await getUserDetails()
            const depo = await dt[0].data
            setAddDeposit(addDeposit + parseInt(depo.deposit))
            navigate("/payment")
        }
    }

  return (
    <Layout>
        <div className="container mx-auto flex flex-col gap-2 my-10">
            <h1 className='text-2xl'>Deposit Amount</h1>
            <input className='text-black outline-none p-2' type="number" name="deposit" id="" value={addDeposit} onChange={(e) => setAddDeposit(parseInt(e.target.value))} />
            <p className='text-red-500 font-bold capitalize'>{error}</p>
            <p className='font-light capitalize'>Minimum deposit amount is 100</p>
            <button onClick={handleSubmitDeposit} className='p-2 px-8 bg-yellow-500 hover:bg-yellow-400 duration-200 w-fit'>Deposit</button>
        </div>
    </Layout>
  )
}

export default Deposit