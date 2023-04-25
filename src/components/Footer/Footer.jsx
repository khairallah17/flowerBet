import React from 'react'
import Logo from "../../assets/logo.png"
import Support from "../../assets/footer/SUPPORT.png"
import Legal from "../../assets/footer/LEGAL.png"
import SupportIcon from "../../assets/footer/support.svg"
import Bonuses from "../../assets/footer/bonuses.svg"
import LiveStream from "../../assets/footer/liveStream.svg"
import Deposit from "../../assets/footer/deposit.svg"
import { Link } from 'react-router-dom'

const content = [ { icon: SupportIcon, text: "24/7 customer Service" },
                  { icon: Bonuses, text: "Referral Bonuses" },
                  { icon: LiveStream, text: "Live Stream of Events" },
                  { icon: Deposit, text: "Instant Withdrawals & Deposit" },]

const footerNav = ["privacy policy","rules and regulations","terms and conditions","KYC","about us"]

const Footer = () => {
  return (
    <div className='flex flex-wrap p-10 text-center md:text-left bg-primary-light border-t-2 mt-auto'>

        <div className="footer1 flex flex-col gap-5 w-full md:w-1/3">

            <Link to="/" ><img src={Logo} alt="" className='w-48' /></Link>
            
            <div className="footer-features flex items-center gap-5">
                <img src={Legal} alt="" className='w-24' />
                <img src={Support} alt="" className=' w-24' />
            </div>

            <p className='font-light text-xs w-10/12'>
                FlowerBet  is a trusted casino and offers fast deposits and withdrawals with round the clock support on email and live chat. All new players at  FlowerBet  are offered a generous welcome bonus on their first deposit! Welcome to the The King of Online Betting & Casino,  FlowerBet !
            </p>

        </div>

        <div className="footer2 w-full md:w-1/3">
            
            <h1 className='text-2xl mt-3 font-bold mb-12'>Features</h1>

            <ul className="flex flex-col gap-5 w-full">
                {
                    content.map(({ icon, text }, key) => (
                        <li key={key} className='flex gap-2 items-center'>
                            <img src={icon} alt="" />
                            {text}
                        </li>
                    ))
                }
            </ul>

        </div>

        <div className="footer3 w-full md:w-1/3">
            
            <h1 className='text-2xl mt-3 font-bold mb-12'>Features</h1>

            <ul className='flex gap-5 flex-col w-full'>
                {
                    footerNav.map((link, key) => (
                        <li key={key}>
                            <Link to={`/${link.split(" ").join("")}`} className="capitalize duration-200 border-b border-transparent hover:border-secondary hover:text-secondary" >{ link }</Link>
                        </li>
                    ))
                }
            </ul>
        
        </div>

    </div>
  )
}

export default Footer