import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'
import { Navigate } from 'react-router-dom'

const ThankYouPage = () => {

    const [loading, setLoading] = useState(true)

    const { updateDeposit, getUserDetails } = userContextHook()

    useEffect( () => {

        const fetchId = async () => {
            
            try{

                const response = await getUserDetails()
                const data = await response[0].id

                await updateDeposit(data)
            
            } catch(err) {
                console.log(err.message)
            }
            
        }
        
        setTimeout(async() => {

            await fetchId()
            setLoading(false)

        },5000)

    },[])

  return (
    <Layout>
        <div className='container mx-auto h-[51vh] gap-10 flex items-center justify-center flex-col'>
            <h1 className='font-bold text-4xl'>Please Be Patient until we confirm your deposit</h1>
            {
                loading ? <InfinitySpin width='200' color="#D71468" /> : <Navigate to="/" />
            }
        </div>
    </Layout>
  )
}

export default ThankYouPage