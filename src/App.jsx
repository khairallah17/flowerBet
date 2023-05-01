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
import Profile from './pages/Profile'
import Dashboard from './pages/Admin/Dashboard'
import { AdminProvider } from './context/AdminContext'
import UsersList from './pages/Admin/UsersList'
import Ledger from './pages/Admin/Ledger'
import Settings from './pages/Admin/Settings'
import MatchNotification from './pages/Admin/MatchNotification'

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
            <Route path="signUp" element={<Register/>}  />
            <Route path="login" element={<Login/>} />
            <Route path="ResetPassword" element={<ResetPassword/>} />
            <Route path="ThankYouPage" element={<ThankYouPage/>} />
            
            <Route element={<PrivateRoute/>}>
              <Route path='profile' element={<Profile/>} />
              <Route path="deposit" element={<Deposit/>} /> 
              <Route element={<BetHistory/>} path="/betHistory" exact/>
              <Route path="withdrawl" element={<Withdrawl/>} />
              <Route path="Payment" element={<Payment/>} />
            </Route>

        </Routes>
          </UserProvider>

          <AdminProvider>
            <Routes>
              <Route path='/admin'>
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path='userdetails' element={<UsersList/>} />
                <Route path="ledger" element={<Ledger />} />
                <Route path="settings" element={<Settings/>} />
                <Route path='matchnotification' element={<MatchNotification/>} />
              </Route>
            </Routes>
          </AdminProvider>
          
    </BrowserRouter>
  )
}

export default App
