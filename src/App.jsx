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
          <Route path="deposit" element={<Deposit/>} />
          <Route path="ResetPassword" element={<ResetPassword/>} />
          
          <Route element={<PrivateRoute/>}>
            <Route element={<BetHistory/>} path="/betHistory" exact/>
          </Route>

        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App