import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import {data} from '../components/data'
import Cricket from "../assets/sports/cricket.png"
import Soccer from "../assets/sports/football.png"
import AmericanFootball from "../assets/sports/american-football.png"
import BasketBall from "../assets/sports/basketball.png"
import Tennis from "../assets/sports/tennis.png"
import { Link } from 'react-router-dom'

const sports = [{name:"soccer", image: Soccer},
                {name:"cricket", image: Cricket},
                {name:"basketball", image: BasketBall},
                {name:"american football", image: AmericanFootball},
                {name:"tennis", image: Tennis}]

const Sports = () => {

    const [activeSport, setActiveSport] = useState("soccer")
    const [activeimg, setActiveImg] = useState(Soccer)
    const [search, setSearch] = useState(data.filter(dt => dt.sport_key.includes(activeSport)))
  
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

  return (
    <Layout>
        <div className="sports-navigation my-10 bg-white text-black flex-wrap">
            <ul className='container mx-auto flex w-full items-center justify-between'>
            {
              sports.map(({name, image}, key) => (
                <li key={key} className={`${activeSport == name ? "bg-primary text-white" : ""} cursor-pointer flex gap-2 py-5 items-center w-1/5 justify-center duration-200 capitalize hover:text-white hover:bg-primary  `} onClick={(e) => setActiveSearch(e)}>
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
                  
                  <div className="bet-title flex items-center gap-3 w-full justify-between">

                    <div className="flex items-center gap-4 w-1/4">

                      <img src={ activeimg } className="w-6 h-6" alt="" />
                      
                      <div className="bet-text">
                        <h1>{ dt.home_team } vs { dt.away_team }</h1>
                        <span>
                         League: { dt.sport_title.split("- ").join(" ") }
                        </span>
                      </div> 

                    </div>

                    <div className="bet-price flex gap-4 w-1/2 flex-grow items-center justify-center">
                      <div className="bet-prices-container flex justify-between w-96">
                      {
                        dt.bookmakers[0].markets[0].outcomes.map(({ price }, key) => {
                          if (!key)
                            return (
                              <div key={key} className="bet-price w-28 text-center bg-green-500 p-2 px-4">
                                {price}
                              </div>
                            )

                          if (key == 2)
                              return (
                                <div key={key} className="bet-price w-28 text-center bg-red-500 p-2 px-4">
                                  {price}
                                </div>
                              )

                          return (
                            <div key={key} className="bet-price w-28 text-center bg-yellow-500 p-2 px-4">
                              {price}
                            </div>
                          )
                        })
                      }
                      </div>
                    </div>

                    <div className="bet-time">
                      { dt.commence_time.split("T").join(" ").split("Z").join("") }
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