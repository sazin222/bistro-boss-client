import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {singInGoogle}= useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate= useNavigate()
    const handelSingInWithGoogle= ()=>{
        singInGoogle()
        .then(result=>{
            console.log(result.user);
            const userInfo= {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
    }
  return (
    <div>
      <div className="text-center ">
      <div className="divider">or</div>
        <button onClick={handelSingInWithGoogle} className="btn w-full">
         <FaGoogle className="text-green-500"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
