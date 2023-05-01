import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from 'react-hot-toast'
import userContextHook from '../../hooks/userContextHook'

const SportsBet = () => {

  const { id } = useParams()

  
  const prices1 = ["1000","5000","50000","100000"]
  const prices2 = ["10000","25000","200000","500000"]

  const { oddsData ,setOddsData, activeOdd, setActiveOdd } = userContextHook()
  
  // const [activeOdd, setactiveOdd] = useState([])
  const filtred = oddsData.filter(dt => dt.id == id)


  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [price, setPrice] = useState("")
  const [deposit, setDeposit] = useState("")
  const [odd, setOdd] = useState(0)
  const [error, seterror] = useState(false)
  const [team, setTeam] = useState("")

  const { getUserDetails, updateBetHistory } = userContextHook()

  const handleBetClick = (e) => {
    if (e.target.localName == "li")
      setPrice(e.target.innerText)
    else
      setPrice(e.target.firstChild.nodeValue)
    setShow(true)
    if (show2 || show1)
    {
      setShow1(false)
      setShow2(false)
    }
  }

  const handleBetClick2 = (e) => {
    if (e.target.localName == "li")
      setPrice(e.target.innerText)
    else
      setPrice(e.target.firstChild.nodeValue)
    setShow2(true)
    if (show || show1)
    {
      setShow(false)
      setShow1(false)
    }
  }

  const calculateOdd = (e, prc) => {

    setDeposit(e)

    const result = (parseFloat(prc) * parseInt(e)) - e

    setOdd(result)

  }

  const calculateOdd1 = (e, prc) => {

    setDeposit(e)

    const result = (parseFloat(prc) * parseInt(e)) - e

    setOdd(result)

  }

  useEffect(() => {

    calculateOdd(deposit, price)
    calculateOdd1(deposit, price)

  },[deposit])

  const handleBetClick1 = (e) => {
    if (e.target.localName == "li")
      setPrice(e.target.innerText)
    else
      setPrice(e.target.firstChild.nodeValue)
    setShow1(true)
    if (show || show2)
    {
      setShow2(false)
      setShow(false)
    }
  } 

  const handlePlaceBet = async (e) => {

    try {
      
      
      const data = await getUserDetails()
      const response = await data[0].data
      const id = await data[0].id
      
      if (response.deposit < deposit)
        toast.error("you do not have much stake to bet :(")

      else {


        const dataObj = {
          title: `${filtred[0].home_team} vs ${filtred[0].away_team}`,
          odd: parseFloat(price),
          team: e.target.getAttribute("team"),
          stake: parseInt(deposit),
          win: false
        }

        await updateBetHistoryAndDeposit(id, dataObj)
      }

    } catch (err) {
      console.log("EOROROROR ==> ",err)
    }

  }

  return (
    <Layout>
    
      <div className="h-full">
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div className="bet-content-title bg-white text-black ">
          <h1 className='container mx-auto py-5 font-bold text-2xl md:text-4xl px-3'>{ filtred[0].home_team } vs { filtred[0].away_team }</h1>
          <div className="content-links bg-primary text-white my-3">
            <ul className='flex justify-around flex-wrap'>
              <li className='border flex-grow text-center py-4 bg-slate-800'>
                <Link to="/sports" className="uppercase">market</Link>
              </li>
              <li className='border flex-grow text-center py-4 bg-slate-800'>
                <Link to="/betHistory" className="uppercase">my bet</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto my-5 px-5">
          
          <div className='capitalize flex items-center gap-3 text-xl w-full mb-5 justify-between'>
            <div className="match-odds flex gap-3 items-center">
              <ChartBarSquareIcon className="h-8 w-8 text-white" />
              match odds
            </div>
            <div className="map flex gap-3">
              <div className="bg-green-500 text-center p-2 w-[70px]">Back</div>
              <div className="bg-red-500 text-center p-2 w-[50px]">Lay</div>
            </div>
          </div>

          <div className="bet-details flex flex-col gap-3 mb-4">

            <div className="bet-home flex sm:flex-row flex-col w-full items-center justify-center md:justify-between gap-3">
              <p className="home-name flex-grow min-w-fit">
                {
                  filtred[0].home_team
                }
              </p>
              <h1 className="odd">To win: <span className='text-green-500 font-bold'>{!odd ? 0 : odd}</span></h1>

              <div className="bet-home-prices flex flex-wrap flex-grow justify-end">
                <ul className='flex items-center gap-3 flex-wrap justify-center'>
                {
                    filtred[0].bookmakers.map(({ markets }, key) => 
                      markets.map(({ outcomes }) => 
                        outcomes.map(({name, price}) => {
                          if (name == filtred[0].home_team)
                          {
                            if (key >= 2)
                              return;
                            return (
                              <li key={key} onClick={handleBetClick} className={`${key == 1? "bg-pink-500" : "bg-green-500"} cursor-pointer w-12 h-12 flex justify-center items-center `}>
                                <Link>{price}</Link>
                              </li>
                            )
                          }
                        })
                      )
                    )
                  }
                </ul>
              </div>

            </div>

            <div className={`place-bet md:flex-row items-center gap-3 flex-col w-full justify-between bg-slate-800 p-5 duration-200 ${show ? "flex" : "hidden"}`}>
                  <h1 className='w-1/3'>{ filtred[0].home_team }</h1>
                  <div className="home-bet flex-1 flex flex-col gap-4 justify-center">

                    <div className="bet-details flex-wrap flex gap-4 justify-around">
                      <div className="home-bet-left flex flex-col gap-4">
                        <input className='bg-white p-2 text-black' type="text" name="price" disabled={true} id="" value={price} />
                        <div className="prices-box flex gap-4 flex-wrap text-center">
                          {

                            prices1.map(prc => (
                              <div onClick={(e) => calculateOdd(e.target.innerText, price)} className="cursor-pointer w-full p-2 bg-secondary price">
                                  {prc}
                              </div>
                            ))

                          }
                        </div>
                      </div>

                      <div className="home-bet-right flex flex-col gap-4">
                      <input className='bg-white p-2 outline-none text-black' type="text" name="price" disabled={false} id="" onChange={(e) => setDeposit(e.target.value)
                      } value={deposit} onClick={(e) => calculateOdd(e)} />
                        <div className="flex-wrap text-center prices-box flex gap-4">
                          {

                            prices2.map(prc => (
                              <div onClick={(e) => calculateOdd(e.target.innerText, price)} className="cursor-pointer w-full p-2 bg-secondary price">
                                  {prc}
                              </div>
                            ))

                          }
                        </div>
                      </div>
                    </div>

                    <div className="bet-buttons justify-around flex gap-4">
                      <Link onClick={() => setShow(false)} className='uppercase bg-yellow-500 p-2 px-8'>cancel bet</Link>
                      <button onClick={handlePlaceBet} team={filtred[0].home_team} className='uppercase bg-blue-500 p-2 px-8'>place bet</button>
                    </div>

                  </div>

                </div>

          </div>

          <div className="bet-details flex flex-col gap-3 mb-4">

            <div className="bet-home flex sm:flex-row flex-col w-full items-center justify-center md:justify-between gap-3">
              <p className="home-name flex-grow min-w-fit">
                {
                  filtred[0].away_team
                }
              </p>

              <p>To Win: <span className='font-bold text-green-500'>{!odd ? 0 : odd}</span></p>

              <div className="bet-home-prices flex flex-wrap flex-grow justify-end">
                <ul className='flex items-center gap-3 flex-wrap justify-center'>
                  {
                    filtred[0].bookmakers.map(({ markets }, key) => 
                      markets.map(({ outcomes }) => 
                        outcomes.map(({name, price}) => {
                          if (name == filtred[0].away_team)
                          {
                            if (key >= 2)
                              return;
                            return (
                              <li key={key} onClick={handleBetClick} className={`${key == 1? "bg-pink-500" : "bg-green-500"} cursor-pointer w-12 h-12 flex justify-center items-center `}>
                                <Link>{price}</Link>
                              </li>
                            )
                          }
                        })
                      )
                    )
                  }
                </ul>
              </div>

            </div>

            <div className={`place-bet md:flex-row items-center gap-3 flex-col w-full justify-between bg-slate-800 p-5 duration-200 ${show2 ? "flex" : "hidden"}`}>
                  <h1 className='w-1/3'>{ filtred[0].away_team }</h1>

                  <div className="home-bet flex-1 flex flex-col gap-4 justify-center">

                    <div className="bet-details flex-wrap flex gap-4 justify-around">
                      <div className="home-bet-left flex flex-col gap-4">
                        <input className='bg-white p-2 text-black' type="text" name="price" disabled={true} id="" value={price} />
                        <div className="prices-box flex gap-4 flex-wrap text-center">
                          {

                            prices1.map((prc, key) => (
                              <div onClick={(e) => calculateOdd1(e.target.innerText, price)} key={key} className="cursor-pointer w-full p-2 bg-secondary price">
                                  {prc}
                              </div>
                            ))

                          }
                        </div>
                      </div>

                      <div className="home-bet-right flex flex-col gap-4">
                      <input className='bg-white p-2 outline-none text-black' type="text" name="price" disabled={false} id="" onChange={(e) => setDeposit(e.target.value)
                      } value={deposit} />
                        <div className="flex-wrap text-center prices-box flex gap-4">
                          {

                            prices1.map((prc, key) => (
                              <div key={key} onClick={(e) => calculateOdd1(e.target.innerText, price)} className="cursor-pointer w-full p-2 bg-secondary price">
                                  {prc}
                              </div>
                            ))

                          }
                        </div>
                      </div>
                    </div>

                    <div className="bet-buttons justify-around flex gap-4">
                      <button onClick={() => setShow2(false)} className='uppercase bg-yellow-500 p-2 px-8'>cancel bet</button>
                      <button onClick={(e) => handlePlaceBet(e)} team={filtred[0].away_team} className='uppercase bg-blue-500 p-2 px-8'>place bet</button>
                    </div>

                  </div>

                </div>

          </div>

          <div className="bet-details flex flex-col gap-3 mb-4">

            <div className="bet-home flex sm:flex-row flex-col w-full items-center justify-center md:justify-between gap-3">
              <p className="home-name flex-grow min-w-fit">
                Draw
              </p>

              <p>To Win: <span className='font-bold text-green-500'>{!odd ? 0 : odd}</span></p>

              <div className="bet-home-prices flex flex-wrap flex-grow justify-end">
                <ul className='flex items-center gap-3 flex-wrap justify-center'>
                  {
                    filtred[0].bookmakers.map(({ markets }, key) => 
                      markets.map(({ outcomes }) => 
                        outcomes.map(({name, price}) => {
                          if (name == "Draw")
                          {
                            if (key >= 2)
                              return;
                            return (
                              <li key={key} onClick={handleBetClick1} className={`${key == 1? "bg-pink-500" : "bg-green-500"} cursor-pointer w-12 h-12 flex justify-center items-center `}>
                                <Link>{price}</Link>
                              </li>
                            )
                          }
                        })
                      )
                    )
                  }
                </ul>
              </div>

            </div>

            <div className={`place-bet md:flex-row items-center gap-3 flex-col w-full justify-between bg-slate-800 p-5 duration-200 ${show1 ? "flex" : "hidden"}`}>
              <h1 className='w-1/3'>{ filtred[0].away_team }</h1>

              <div className="home-bet flex-1 flex flex-col gap-4 justify-center">

                <div className="bet-details flex-wrap flex gap-4 justify-around">
                  <div className="home-bet-left flex flex-col gap-4">
                    <input className='bg-white p-2 text-black' type="text" name="price" disabled={true} id="" value={price} />
                    <div className="prices-box flex gap-4 flex-wrap text-center">
                      {

                        prices1.map((prc, key) => (
                          <div onClick={(e) => calculateOdd1(e.target.innerText, price)} key={key} className="cursor-pointer w-full p-2 bg-secondary price">
                              {prc}
                          </div>
                        ))

                      }
                    </div>
                  </div>

                  <div className="home-bet-right flex flex-col gap-4">
                  <input className='bg-white p-2 outline-none text-black' type="text" name="price" disabled={false} id="" onChange={(e) => setDeposit(e.target.value)
                  } value={deposit} />
                    <div className="flex-wrap text-center prices-box flex gap-4">
                      {

                        prices1.map((prc, key) => (
                          <div key={key} onClick={(e) => calculateOdd1(e.target.innerText, price)} className="cursor-pointer w-full p-2 bg-secondary price">
                              {prc}
                          </div>
                        ))

                      }
                    </div>
                  </div>
                </div>

                <div className="bet-buttons justify-around flex gap-4">
                  <button onClick={() => setShow1(false)} className='uppercase bg-yellow-500 p-2 px-8'>cancel bet</button>
                  <button onClick={() => handlePlaceBet()} team="Draw" className='uppercase bg-blue-500 p-2 px-8'>place bet</button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </Layout>
  )
}

export default SportsBet