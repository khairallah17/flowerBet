import React,  { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import userContextHook from '../hooks/userContextHook'
import UserImg from "../assets/user.png"
import { Link } from 'react-router-dom'

const Profile = () => {

  const { getUserDetails, updateUserInfo, logout } = userContextHook()
  const [userData, setUserData] = useState({})
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [newPassword, setNewPassoword] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [betHistory, setBetHistory] = useState([])
  const [withdrawlHistory, setWithdrawlHistory] = useState([])
  const [id, setId] = useState()

  useEffect(() => {

    const fetchUserData = async () => {

      try {

        const response = await getUserDetails()
        const data = await response[0].data
        const id = await response[0].id

        setUserData(data)
        setUsername(data.username)
        setEmail(data.email)
        setBetHistory(data.betHistory)
        setWithdrawlHistory(data.withdrawlHistory)
        setId(id)

      } catch(err) {
        console.log(err.message)
      }

    }

    fetchUserData()

  },[])

  const inputClass = "text-black p-2 rounded-lg bg-gray-300 outline-none w-fit"

  return (
    <Layout>

      <div className="container mx-auto my-10">

        <div className="profile-heading mb-5 flex justify-between items-center">

          <div className="personal-info flex gap-5 items-center flex-grow">
            <img src={UserImg} alt="" className="w-20" />
            <h1 className='text-4xl font-bold'>Update Your information</h1>
            <button type="button" onClick={logout} >logout</button>
          </div>

          <div className="deposit-history flex-grow">
            <h1 className="text-4xl font-bold text-center w-full">withdrawl history</h1>
          </div>

        </div>

        <div className="flex gap-10">
          
          <div className="information-text-container flex flex-col gap-5">

            <div className="username flex flex-col gap-3">
              <span className='capitalize font-bold'>username: </span>
              <input type="text" name='username' value={username} className={inputClass} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="email flex flex-col gap-3">
              <span className='capitalize font-bold'>email: </span>
              <input type="text" name='email' value={email} className={inputClass} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="old-password flex flex-col gap-3">
              <span className="capitalize font-bold">old Password: </span>
              <input type={showPassword ? 'text' : 'password'} name='old password' value={oldPassword} className={inputClass} onChange={(e) => setOldPassword(e.target.value) } />
            </div>

            <div className="new-password flex flex-col gap-3">
              <span className="capitalize font-bold">new password: </span>
              <input type={showPassword ? 'text' : 'password'} name="new password" value={newPassword} className={inputClass} onChange={(e) => setNewPassoword(e.target.value)} />
            </div>

            <div className="show-password flex gap-2">
              <input type="checkbox" name="show password" id="" className='outline-none' onClick={() => setShowPassword(!showPassword)} />
              <span className='capitalize'>show password</span>
            </div>

            <button className='w-fit p-2 px-4 bg-secondary rounded-lg'>update info</button>
          </div>

          <div className="money-info flex flex-col gap-5">

            <div className="deposit flex flex-col gap-3">
              
              <span className='capitalize font-bold'>current deposit :</span>
              <div className="deposit-input flex gap-5">
                <input type="text" name='deposit' value={userData.deposit} disabled={true} className={inputClass} />
                <Link to="/deposit" className='capitalize duration-200 hover:bg-secondary-dark bg-secondary rounded-lg p-2 px-4 w-[120px] text-center'>deposit</Link>
              </div>

            </div>

            <div className="withdrawl flex flex-col gap-3">

              <span className="capitalize font-bold">current withdrawl :</span>

              <div className="withdrawl-input flex gap-5">
                <input type="text" name='deposit' className={inputClass} disabled={true} value={userData.withdrawl} />
                <Link to="/withdrawl" className='capitalize duration-200 hover:bg-secondary-dark bg-secondary rounded-lg p-2 px-4 w-[120px] text-center'>withdrawl</Link>
              </div>

            </div>

          </div>

          <div className="withdrawl-history w-full">
            <table className='w-full border-separate border-spacing-4'>
              <thead>
                <tr>
                  <td>amout</td>
                  <td>date</td>
                  <td>status</td>
                </tr>
              </thead>
              <tbody className=''>
                {
                  withdrawlHistory.map(({amount, date, status}, key) => (
                    <tr key={key} className=" border-separate">
                      <td >{amount}</td>
                      <td >{Date(date).toString().split(" ").slice(1,5).join(" ")}</td>
                      <td className='bg-yellow-600 text-center rounded-xl p-2 w-[100px]'>{status ? "accepted" : "pending"}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

        </div>

        <div className="bet-history flex flex-col gap-5">
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
                    <span className={`${win ? "bg-green-500" : "bg-red-500"} p-2`}>{win ? odd*stake-stake : stake}</span>
                  </div>
                ))
              }
            </div>
        </div>
        

      </div>



    </Layout>
  )
}

export default Profile