import React from 'react'
import Layout from '../components/layout/Layout'
import Slide1 from "../assets/slider/1.jpg"
import Slide2 from "../assets/slider/2.jpg"
import Slide3 from "../assets/slider/3.jpg"
import Slide4 from "../assets/slider/4.jpg"
import Slide5 from "../assets/slider/5.jpg"
import Slide6 from "../assets/slider/6.jpg"
import Slide7 from "../assets/slider/7.jpg" 
import { Swiper, SwiperSlide } from "swiper/react";
import LiveSports from "../assets/Home/live.jpg"
import tennis from "../assets/Home/tennis.jpg"
import soccer from "../assets/Home/soccer.jpg"
import LiveCasino from "../assets/Home/LiveCasino.jpg"
import Cricket from "../assets/Home/cricket.jpg"
import Roulette from "../assets/Home/roulette.jpg"
import { Link } from 'react-router-dom'

import "swiper/css"

const Home = () => {



  return (
    <Layout>

          <Swiper className="mySwiper">
            <SwiperSlide className=' w-full '>
              <img src={Slide1} alt="" className=' w-full' />
            </SwiperSlide>
            <SwiperSlide className=''>
              <img src={Slide2} alt="" className=' w-full' />
            </SwiperSlide>
            <SwiperSlide className=''>
              <img src={Slide3} alt="" className='w-full' />
            </SwiperSlide>
            <SwiperSlide className=''>
              <img src={Slide4} alt="" className='w-full' />
            </SwiperSlide>
            <SwiperSlide className=''>
              <img src={Slide5} alt="" className='w-full' />
            </SwiperSlide>
            <SwiperSlide className=''>
              <img src={Slide6} alt="" className='w-full' />
            </SwiperSlide>
            <SwiperSlide className=''>
              <img src={Slide7} alt="" className='w-full' />
            </SwiperSlide>
          </Swiper>

          <h1 className=' text-3xl md:text-4xl mt-10 container mx-auto text-center font-bold uppercase'> choose your <span className='text-secondary'>game</span> <br /> & start now !!!</h1>

          <div className="container mx-auto my-10"> 
            
            <div className="card relative w-full border-b-4 border-yellow-500 mb-5">
              <img src={LiveSports} alt="" className='w-full' />
              <Link to="/sports" className="absolute bottom-0 p-3 px-5 bg-gradient-to-r h-full flex items-center justify-center text-3xl font-bold from-black to-[rgba(0,0,0,.3)] w-full duration-200 hover:text-yellow-500">Live Sports</Link>
              <Link to="/sports" className="absolute bottom-0 p-3 px-5 right-0 shape bg-yellow-500 w-40 text-center">Play Now</Link>
            </div>

            <div className="card-wrapper flex gap-5 mb-5">

              <div className="card relative border-b-4 border-yellow-500 w-1/2">
                <img src={tennis} alt="" className=' w-full' />
                <Link to="/sports" className="absolute bottom-0 p-3 px-5 bg-gradient-to-r h-full flex items-center justify-center text-3xl font-bold from-black to-[rgba(0,0,0,.3)] w-full duration-200 hover:text-yellow-500">Tennis</Link>
                <Link to="/sports" className="absolute bottom-0 p-3 px-5 right-0 shape bg-yellow-500 w-40 text-center">Play Now</Link>
              </div>

              <div className="card relative border-b-4 border-yellow-500 w-1/2">
                <img src={soccer} alt="" className=' w-full' />
                <Link to="/sports" className="absolute bottom-0 p-3 px-5 bg-gradient-to-r h-full flex items-center justify-center text-3xl font-bold from-black to-[rgba(0,0,0,.3)] w-full duration-200 hover:text-yellow-500">Soccer</Link>
                <Link to="/sports" className="absolute bottom-0 p-3 px-5 right-0 shape bg-yellow-500 w-40 text-center">Play Now</Link>
              </div>

            </div>

            <div className="card relative w-full border-b-4 border-yellow-500 mb-5">
              <img src={LiveCasino} alt="" className='w-full' />
              <Link to="/casino" className="absolute bottom-0 p-3 px-5 bg-gradient-to-r h-full flex items-center justify-center text-3xl font-bold from-black to-[rgba(0,0,0,.3)] w-full duration-200 hover:text-yellow-500">Live Casino</Link>
              <Link to="/casino" className="absolute bottom-0 p-3 px-5 right-0 shape bg-yellow-500 w-40 text-center">Play Now</Link>
            </div>

            <div className="card-wrapper flex gap-5 mb-5">

              <div className="card relative border-b-4 border-yellow-500 w-1/2">
                <img src={Cricket} alt="" className=' w-full' />
                <Link to="/sports" className="absolute bottom-0 p-3 px-5 bg-gradient-to-r h-full flex items-center justify-center text-3xl font-bold from-black to-[rgba(0,0,0,.3)] w-full duration-200 hover:text-yellow-500">Cricket</Link>
                <Link to="/sports" className="absolute bottom-0 p-3 px-5 right-0 shape bg-yellow-500 w-40 text-center">Play Now</Link>
              </div>

              <div className="card relative border-b-4 border-yellow-500 w-1/2">
                <img src={Roulette} alt="" className=' w-full' />
                <Link to="/roulette" className="absolute bottom-0 p-3 px-5 bg-gradient-to-r h-full flex items-center justify-center text-3xl font-bold from-black to-[rgba(0,0,0,.3)] w-full duration-200 hover:text-yellow-500">Roulette</Link>
                <Link to="/roulette" className="absolute bottom-0 p-3 px-5 right-0 shape bg-yellow-500 w-40 text-center">Play Now</Link>
              </div>

            </div>

          </div>


    </Layout>
  )
}

export default Home