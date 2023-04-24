import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import BankTransfer from "../assets/banknew.png"
import PhonePe from "../assets/phonepay.png"
import Paytm from "../assets/paytm.png" 
import { useNavigate } from 'react-router-dom'

const Payment = () => {

    const navigate = useNavigate()

    const[show, setShow] = useState(false)
    const[image, setImage] = useState()

    const handleReceiptSubmit = () => {
        navigate("/")
    }

  return (
    <Layout>

        <div className="container mx-auto my-10 flex flex-col justify-center items-center">
            <div className="flex gap-48 h-[42.5vh] items-center justify-center">
                <img src={BankTransfer} onClick={() => setShow(true)} alt="" className='cursor-pointer w-48 bg-white p-5 rounded-xl' />
                <img src={PhonePe} onClick={() => setShow(true)} alt="" className='cursor-pointer w-48 bg-white p-5 rounded-xl' />
                <img src={Paytm} onClick={() => setShow(true)} alt="" className='cursor-pointer w-48 bg-white p-5 rounded-xl' />
            </div>
            <div className={`${show ? "flex" : "hidden"} flex-col gap-3 bg-white w-[500px] rounded-lg text-black p-5`}>
                <form onSubmit={handleReceiptSubmit}>
                    <div className="exit">
                        <p className='font-bold text-right mb-5 cursor-pointer' onClick={() => setShow(false)}>X</p>
                    </div>
                    <h1 className='text-center text-xl font-bold'>Make your payment on the details below:</h1>
                    <p className='font-bold'>paytm: </p>
                    <p className='font-bold'>paytm Number: </p>
                    <div className="receipt flex gap-4">
                        <label htmlFor="upload receipt" className='font-bold'>transaction image: </label>
                        <input type="file" name="upload receipt" id="" />
                    </div>
                    <button className='bg-secondary text-white p-2 px-4 rounded-lg mt-2'>submit</button>
                </form>
            </div>
        </div>

    </Layout>
  )
}

export default Payment