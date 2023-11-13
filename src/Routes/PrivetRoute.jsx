import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to={'/login'}>
       
    </Navigate> 
};

export default PrivetRoute;