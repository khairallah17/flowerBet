import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'

const BetHistory = () => {

    const { newBet, getUserDetails, currentUser } = userContextHook()

    const [betHistory, setBetHistory] = useState([])

    useEffect(() => {

        const fetch = async () => {
            const dt = await getUserDetails(currentUser.email)
            setBetHistory(dt[0].data.betHistory)
        }

        newBet(currentUser.email)

        fetch()

    },[])

  return (
    <Layout>
      <div className="container mx-auto my-10">
        <h1 className='capitalize text-center text-5xl font-bold mb-10'>Your Bets History</h1>
        <div className="bets-history-container flex flex-col gap-5 shadow-xl p-5 rounded-xl">
          <div className="bets-titlees flex justify-between">
            <p className='w-[330px]'>Match</p>
            <p>Choosed Team</p>
            <p>Odd</p>
            <p>win / lose</p>
          </div>
          {
            betHistory.map(({title, odd, stake, win, team} ,key) => (
              <div key={key} className='flex justify-between items-center'>
                <h1 className='text-xl max-w-xs w-[320px] line-clamp-1'>{title}</h1>
                <span className='w-[100px] line-clamp-1'>{team}</span>
                <span>{odd}</span>
                <span className={`${win ? "bg-green-500" : "bg-red-500"} p-2`}>{win ? odd*stake : stake}</span>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default BetHistory