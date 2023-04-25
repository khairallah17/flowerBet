import './App.css'
import Layout from './components/layout/Layout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Sports from './pages/Sports'
import TeenPatti from './pages/TeenPatti'
import Roulette from './pages/Roulette'
import Casino from './pages/Casino'
import SportsBet from './pages/Sports/SportsBet'
import Register from './pages/Register'
import Login from './pages/Login'
import CommingSoon from './pages/CommingSoon'
import { UserProvider } from './context/userContext'
import Deposit from './pages/Deposit'
import PrivateRoute from './components/Private/PrivateRoute'
import BetHistory from './pages/BetHistory'
import ResetPassword from './pages/ResetPassword'
import Withdrawl from './pages/Withdrawl'
import Payment from './pages/Payment'
import ThankYouPage from './pages/ThankYouPage'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/sports' element={<Sports/>} />
          <Route path='/sports/:id' element={<SportsBet/>} />
          <Route path='teenpatti' element={<CommingSoon/>} />
          <Route path='roulette' element={<CommingSoon/>} />
          <Route path='casino' element={<CommingSoon/>} />
          <Route path="signup" element={<Register/>}  />
          <Route path="login" element={<Login/>} />
          <Route path="ResetPassword" element={<ResetPassword/>} />
          <Route path="ThankYouPage" element={<ThankYouPage/>} />
          
          <Route element={<PrivateRoute/>}>
            <Route path="deposit" element={<Deposit/>} /> 
            <Route element={<BetHistory/>} path="/betHistory" exact/>
            <Route path="withdrawl" element={<Withdrawl/>} />
            <Route path="Payment" element={<Payment/>} />
          </Route>

        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
