import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db, storage } from '../config/firebase'
import { collection, doc, Firestore, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [payDeposit, setPaydeposit] = useState(0)
  const [addDeposit, setAddDeposit] = useState(0)
  const [id, setId] = useState("")

  const register = async (email, password) => {

    const userRef = doc(`users/${currentUser.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exist){

      try {
        
        userRef.set({
          email,
          deposit: 0,
          withdrawl: 0,
          betHistory: [],
        })

      } catch (err) {
        console.log("ERROR ==> ",err.message)
      }

    }

    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const resetPassword = () => {
    return sendPasswordResetEmail(auth, currentUser.email)
  }

  const getUserDetails = async () => {
    const usersCollection = collection(db, 'users')

    try {
      const q = query(usersCollection, where('email','==',currentUser.email))
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

  const updateDeposit = async (id) => {
    const docRef = doc(db, 'users', id)

    console.log("here ==> ",id)

      updateDoc(docRef, {deposit: addDeposit}).then(response => console.log(response)).catch(err => console.log(err.message))

  }

  const newBet = async (email) => {
    const docRef = doc(db, 'users', email)
    
    try{

      await setDoc(docRef, {test: true}, {merge:true})
      console.log("merged!!")

    } catch (err) {
      console.log(err.message)
    }

  }

  const updatebetHistory = async () => {

    const userCollectionRef = collection(db, "users")
    const userDoc = doc(db, "users", id)

    await updateDoc(userDoc, {test: "test"})

    // const docRef = doc(db, 'users', currentUser.email)

    // getDoc(docRef).then(response => console.log(response)).catch(err => console.log(err.message))

  }

  const getReceiptsByUser = async () => {

    const imagesRef = ref(storage, 'images/')

    const response = await listAll(imagesRef)

    let images =  []

    response.items.forEach(item => getDownloadURL(item).then(url => images.push(url)))

    console.log(images)
        
    // return images

  }

  const uploadReceipt = async (image) => {

    const imageRef = ref(storage, `images/${currentUser.email +"_"+ image.name }`)

    uploadBytes(imageRef, image)
        .then(response => console.log("success"))
        .catch(err => console.log(err.message))

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
    setPaydeposit,
    updateDeposit,
    payDeposit,
    setAddDeposit,
    addDeposit,
    uploadReceipt,
    getReceiptsByUser,
    setId,
    updatebetHistory
  }

  return (
    <UserContext.Provider value={value}>
      { !loading && children }
    </UserContext.Provider>
  )
}

export default UserContext