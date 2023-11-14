import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCarts = () => {
// use tranStack query 
const {user}= useAuth()
console.log('user', user);

const axiosSecure = useAxiosSecure()
  const { refetch, data: cart=[]}= useQuery({
  queryKey:['cart', user?.email],
  queryFn: async () => {
    const res = await axiosSecure.get(`/carts?email=${user.email}`)
    return res.data
   
  },
  })
  return [cart, refetch]
};

export default useCarts;