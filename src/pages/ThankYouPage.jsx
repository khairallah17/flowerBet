import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import Layout from '../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import userContextHook from '../hooks/userContextHook'

const ThankYouPage = () => {

    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState({})

    const navigate = useNavigate()

    const { updateDeposit, currentUser, id, getUserDetails } = userContextHook()

    // const [id,  setId] = useState("")


    useEffect( () => {

        getUserDetails()

        setTimeout(async() => {

            console.log(id)
            
            updateDeposit()
            setLoading(false)

        },5000)

    },[])

  return (
    <Layout>
        <div className='container mx-auto h-[51vh] gap-10 flex items-center justify-center flex-col'>
            <h1 className='font-bold text-4xl'>Please Be Patient until we confirm your deposit</h1>
            {
                loading ? <InfinitySpin width='200' color="#D71468" /> : navigate("/")
            }
        </div>
    </Layout>
  )
}

export default ThankYouPage