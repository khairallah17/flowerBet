import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase'
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [payDeposite, setPaydeposit] = useState(0)

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const getUserDetails = async (email) => {
    const usersCollection = collection(db, 'users')
    
    try {
      const q = query(usersCollection, where('email','==',email))
      let users = await getDocs(q)
      users = users.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      return users
    } catch (error) {
      console.log(error.message)
    }
  }

  // const UpdateDeposit = async () => {
  //   const docRef = doc(db, 'users', currentUser.email)

  //   try{

      // await setDoc(docRef,)

  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }

  const newBet = async (email) => {
    const docRef = doc(db, 'users', email)
    
    try{

      await setDoc(docRef, {test: true}, {merge:true})
      console.log("merged!!")

    } catch (err) {
      console.log(err.message)
    }

  }

  useEffect(() => {

    const unsbscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsbscribe

  },[])

  const value = {
    currentUser,
    register,
    logIn,
    logout,
    resetPassword,
    getUserDetails,
    newBet,
    setPaydeposit
  }

  return (
    <UserContext.Provider value={value}>
      { !loading && children }
    </UserContext.Provider>
  )
}

export default UserContext