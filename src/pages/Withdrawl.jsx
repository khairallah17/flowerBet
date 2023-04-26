import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'

const Withdrawl = () => {

    const { getUsersDetail } = userContextHook()

    const [withdrawl, setWithdrawl] = useState(0)
    const [error, setError] = useState("")

  const handleSubmitWithdrawl = async () => {
    
    try {
      
      const response = await getUsersDetail()
      const dt = response[0].data.withdrawl

      if (withdrawl < dt)
        setError("You have Insufficient Balance.")

    } catch (err) {
      console.log(err.message)
    }

  }

  return (
    <Layout>
        
        <div className="container mx-auto flex flex-col gap-2 my-10">
            <h1 className='text-2xl'>Withdrawl Amount</h1>
            <input className='text-black outline-none p-2' type="number" name="deposit" id="" value={withdrawl} onChange={(e) => setWithdrawl(parseInt(e.target.value))} />
            <p className='text-red-500 font-bold capitalize'>{error}</p>
            <p className='font-light capitalize'>Minimum withdrawl amount is 100</p>
            <button onClick={handleSubmitWithdrawl} className='p-2 px-8 bg-yellow-500 hover:bg-yellow-400 duration-200 w-fit'>Withdrawl</button>
        </div>

    </Layout>
  )
}

export default Withdrawl