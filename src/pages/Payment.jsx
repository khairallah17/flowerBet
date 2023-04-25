import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import PhonePe from "../assets/phonepay.png"
import QrCode from "../assets/qr-code.png" 
import { useNavigate } from 'react-router-dom'
import userContextHook from '../hooks/userContextHook'

const Payment = () => {

    const navigate = useNavigate()

    const[show, setShow] = useState(false)
    const [error, setError] = useState("")
    const [image, setImage] = useState(null)

    const { getReceiptsByUser, setReceiptImage, uploadReceipt } = userContextHook()

    const handleReceiptSubmit = () => {

        if (image == null)
            setError("Error image not uploaded")
        else{
            uploadReceipt(image)
            navigate("/thankyoupage")
        }
    }

    useEffect(() => {
        getReceiptsByUser()
    },[])

  return (
    <Layout>

        <div className="container mx-auto my-10 flex flex-col justify-center items-center">
            <h1 className='capitalize font-bold text-5xl mb-10'>Pay your deposit now</h1>
            <div className="flex gap-48 mb-5 items-center justify-center">
                <img src={PhonePe} onClick={() => setShow(!show)} alt="" className='cursor-pointer w-48 bg-white p-5 rounded-xl' />
            </div>
            <div className={`${show ? "flex" : "hidden"} z-10 flex-col gap-3 bg-white w-[500px] rounded-lg text-black p-5`}>
                <form onSubmit={handleReceiptSubmit}>
                    <div className="exit">
                        <p className='font-bold text-right mb-5 cursor-pointer' onClick={() => setShow(false)}>X</p>
                    </div>
                    <h1 className='text-center text-xl font-bold'>Scan & pay using PhonePe App</h1>
                    <div className="image-container flex items-center justify-center">
                        <img src={QrCode} alt="" className='cursor-pointer w-48 bg-white p-5 rounded-xl' />
                    </div>
                    <p className='font-bold mb-3'>Beneficiary Name: <span className='font-normal'>nayeem m Jamkhandi</span> </p>
                    <div className="receipt flex gap-4 mb-3">
                        <label htmlFor="upload receipt" className='font-bold'>transaction image: </label>
                        <input type="file" name="upload receipt" id="" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <p className='text-red-500 font-bold'>{error}</p>
                    <div className="button-container flex justify-center my-3">
                        <button type='button' onClick={handleReceiptSubmit} className='bg-secondary text-white p-2 px-4 rounded-lg mt-2'>submit</button>
                    </div>
                </form>
            </div>
        </div>

    </Layout>
  )
}

export default Payment