import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import myAuth from "../firebase/firebase.config.js"
import PropTypes from 'prop-types';

const MyAuthContext = createContext()

const MyAuthProvider = ({children}) => {
    const [myUser, setMyUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const myCreateUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(myAuth, email, password)
    }
    const myLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(myAuth, email, password)
    }
    const myLogOut=()=>{
        setLoading(true)
        return signOut(myAuth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(myAuth, (myCurrentUser)=>{
            setLoading(false)
            setMyUser(myCurrentUser)
        })
        return ()=>unSubscribe()
    },[])

    const myAuthInfo ={
        myUser,
        myCreateUser,
        myLogin,
        myLogOut,
        loading,

    }

  return (
    <>
        <MyAuthContext.Provider value={myAuthInfo}>
            {children}
        </MyAuthContext.Provider>
    </>
  )
}

MyAuthProvider.propTypes = {
    children: PropTypes.node
}

export default MyAuthProvider
export {MyAuthContext}