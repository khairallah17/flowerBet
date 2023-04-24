import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const Deposit = () => {

    const [deposit, setDeposit] = useState(0)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmitDeposit = () => {
        if (deposit < 100)
            setError("please enter a valid deposit")
        else{
            console.log("here")
            navigate("/payment")
        }
    }

  return (
    <Layout>
        <div className="container mx-auto flex flex-col gap-2 my-10">
            <h1 className='text-2xl'>Deposit Amount</h1>
            <input className='text-black outline-none p-2' type="number" name="deposit" id="" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
            <p className='text-red-500 font-bold capitalize'>{error}</p>
            <p className='font-light capitalize'>Minimum deposit amount is 100</p>
            <button onClick={handleSubmitDeposit} className='p-2 px-8 bg-yellow-500 hover:bg-yellow-400 duration-200 w-fit'>Deposit</button>
        </div>
    </Layout>
  )
}

export default Deposit