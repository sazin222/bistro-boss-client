import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut}= useAuth()
    // request interceptors add for the every axiosSecure api
    axiosSecure.interceptors.request.use(function(config){
        console.log('request stop by the interceptors');
        const token = localStorage.getItem('access-token')
        config.headers.authorization= `Bearer ${token}`
        return config
    },
    function(error){
        return Promise.reject(error)
    }
    
    )

    // intercepts for 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response

    }, async (error)=>{
        const status = error.response.status
        console.log('status code in the interceptors', status);
        if(status === 401 || status === 403){
          await logOut()
           navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;