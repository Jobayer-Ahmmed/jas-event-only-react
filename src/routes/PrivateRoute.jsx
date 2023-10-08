import { useContext } from "react"
import { MyAuthContext } from "../contextApi/MyAuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {myUser, loading} = useContext(MyAuthContext)
    const location = useLocation()
    console.log(location)

    if(loading)
    return <span className="loading loading-bars loading-lg"></span>

    if(myUser)
        return children


  return <Navigate state={location.pathname} to="/login"></Navigate>
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute