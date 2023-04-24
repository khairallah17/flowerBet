import React from 'react'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'

const Withdrawl = () => {

    const { getUsersDetail } = userContextHook()

  return (
    <Layout>
        
        <div className="container mx-auto my-10">
            withdrawl
        </div>

    </Layout>
  )
}

export default Withdrawl