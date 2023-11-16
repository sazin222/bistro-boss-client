import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
    const {singInGoogle}= useAuth()
    const handelSingInWithGoogle= ()=>{
        singInGoogle()
        .then(result=>{
            console.log(result.user);
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
