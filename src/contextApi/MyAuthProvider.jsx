import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import myAuth from "../firebase/firebase.config.js"
import PropTypes from 'prop-types';


const MyAuthContext = createContext()

const MyAuthProvider = ({children}) => {
    const [myUser, setMyUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const myGoogleProvider = new GoogleAuthProvider() 
    const myGithubProvider = new GithubAuthProvider()


    const myCreateUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(myAuth, email, password)
    }
    const myLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(myAuth, email, password)
    }
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(myAuth, myGoogleProvider)
      }
    const githubLogin =()=>{
        setLoading(true)
        return signInWithPopup(myAuth, myGithubProvider)
      }
    const myLogOut=()=>{
        setLoading(true)
        return signOut(myAuth)
    }
    const loginToast={isBoolean: false}

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
        googleLogin,
        githubLogin,
        loginToast
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







