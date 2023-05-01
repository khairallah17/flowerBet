import React, { useState } from 'react'
import { createContext } from 'react'
import { db, auth } from '../config/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDoc, doc, collection, getDocs, deleteDoc, updateDoc } from 'firebase/firestore'

const AdminContext = createContext({})

export const AdminProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [route, setRoute] = useState([])

    const dbRef = collection(db, "users")

    const addNewUser = async () => {

    }

    const getAllUsers = async () => {

        try{

            const users = await getDocs(dbRef)
            const usersData = users.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))

            return usersData
        } catch (err) {
            console.log(err.message)
        }

    }

    const removeUser = async () => {

    }

    const updateUserInfo = async (id, userInfo) => {

        const userRef = doc(db, "users", id)
 
        try {
            
            await updateDoc(userRef, userInfo)

        } catch (err) {
            console.log(err.message)
        }

    }

    const getUserById = async (id) => {

        const userRef = doc(db, 'users', id)

        try {
            
            const user = await getDoc(userRef)

            return user.data()

        } catch (err) {
            console.log(err.message)
        }

    }

    const AdminLogin = (email, password) => {
        console.log(email)
        console.log(password)
        console.log("AdminLogin ==> Here")
        return signInWithEmailAndPassword(auth, email, password)
    }

    const adminLogout = () => {
        return signOut(auth)
    }
    

    const value ={
        addNewUser,
        getAllUsers,
        removeUser,
        updateUserInfo,
        getUserById,
        AdminLogin,
        adminLogout
    }

  return (
    <AdminContext.Provider value={value}>
      { !loading && children }
    </AdminContext.Provider>
  )
}

export default AdminContext