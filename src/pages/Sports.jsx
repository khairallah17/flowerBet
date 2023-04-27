import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Cricket from "../assets/sports/cricket.png"
import Soccer from "../assets/sports/football.png"
import AmericanFootball from "../assets/sports/american-football.png"
import BasketBall from "../assets/sports/basketball.png"
import Tennis from "../assets/sports/tennis.png"
import { Link } from 'react-router-dom'
import userContextHook from '../hooks/userContextHook'

const sports = [{name:"soccer", image: Soccer},
                {name:"cricket", image: Cricket},
                {name:"basketball", image: BasketBall},
                {name:"american football", image: AmericanFootball},
                {name:"tennis", image: Tennis}]

const Sports = () => {

    const [activeSport, setActiveSport] = useState("soccer")
    const [activeimg, setActiveImg] = useState(Soccer)
    const [data, setData] = useState([])
    const [search, setSearch] = useState(data)

    const { oddsData, setOddsData, setActiveOdd } = userContextHook()


    useEffect(() => {
      
      const fetchOdds = async () => {
          const response = await fetch(`https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=1e28c75f0701eddc5f1aba2e9e5db50c`)
    
        const dt = await response.json()

        setData(dt)
        setSearch(dt)
        setOddsData(dt)
      }

      fetchOdds()
 
    }, [])
    
    
  
    const setActiveSearch = (e) => {

      setActiveSport(e.target.lastChild.nodeValue)
      const img = sports.filter(sp => {
        if (sp.name == activeSport)
        {
          console.log("here")
          return sp.image
        }
      })
      
      setActiveImg(img[0].image)
      
      const filtredData = data.filter(dt => dt.sport_key.includes(activeSport))
  
      setSearch(filtredData)
  
    }

    function tConvert (time) {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    }

  return (
    <Layout>
        <div className="sports-navigation my-10 bg-white text-black flex-wrap">
            <ul className='container mx-auto flex w-full items-center justify-between flex-wrap'>
            {
              sports.map(({name, image}, key) => (
                <li key={key} className={`${activeSport == name ? "bg-primary text-white" : ""} cursor-pointer flex gap-2 py-5 w-full md:w-1/5 items-center justify-center duration-200 capitalize hover:text-white hover:bg-primary  `} onClick={(e) => setActiveSearch(e)}>
                  <img src={image} alt="" className='w-6 h-6' />
                  {name}
                </li>   
              ))
            }
            </ul>
        </div>

      <div className="container mx-auto my-10">

          
          <div className="bettings flex flex-col gap-5 h-96 overflow-scroll">

            {
              search.map((dt, key) => (

                <Link to={`/sports/${dt.id}`} key={dt.id} className="bet flex w-full justify-between">
                  
                  <div className="bet-title flex items-center gap-3 w-full justify-between flex-wrap">

                    <div className="flex items-center gap-4 md:w-1/4 w-full">

                      <img src={ activeimg } className="w-6 h-6" alt="" />
                      
                      <div className="bet-text">
                        <h1 className='text-center md:text-left'>{ dt.home_team } vs { dt.away_team }</h1>
                        <span className=''>
                         League: { dt.sport_title.split("- ").join(" ") }
                        </span>
                      </div> 

                    </div>

                    <div className="odd-time-container flex items-center gap-4 md:w-[500px] w-full">
                      <div className="bet-price flex flex-grow items-center justify-center w-fit">
                        <div className="bet-prices-container flex justify-center gap-4  flex-wrap items-center">
                        {
                          dt.bookmakers.slice(0,2).map(book => {
                            return book.markets[0].outcomes.map(({name, price}, key) => {
                              if (dt.home_team == name)
                                return (
                                  <div key={key} className="bet-price justify-center w-16 h-16 flex items-center text-center bg-green-500 p-2 px-4">
                                    {price}
                                  </div>
                                )
                            })
                          })
                        }
                        </div>
                      </div>

                      <div className="bet-time">
                        { tConvert(dt.commence_time.split("T")[1].split("Z").join("")) }
                      </div>

                      <div className="bet-price flex flex-grow items-center justify-center w-fit">
                        <div className="bet-prices-container flex justify-center gap-4  flex-wrap items-center">
                        {
                          dt.bookmakers.slice(0,2).map(book => {
                            return book.markets[0].outcomes.map(({ price, name }, key) => {
                              if (dt.away_team == name)
                                return (
                                  <div key={key} className="bet-price w-16 h-16 justify-center flex items-center text-center bg-pink-500 p-2 px-4">
                                    {price}
                                  </div>
                                )
                            })
                          })
                        }
                        </div>
                      </div>
                    </div>

                  </div>

                </Link>
              ))
            }

          </div>

      </div>
    </Layout>
  )
}

export default Sports