import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isPending] = useAdmin()

    const location = useLocation()
    if(loading ||isPending){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate state={{from:location}} to={'/login'}>
       
    </Navigate> 
};

export default AdminRoutes;