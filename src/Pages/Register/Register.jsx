import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Register = () => {
  const axiosPublic = useAxiosPublic()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm()
     const {createUser, updateUserProfile}= useContext(AuthContext)
     const navigate = useNavigate()
       
      const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
          const LoggedUser= result.user
          console.log(LoggedUser.email);
          updateUserProfile(data.name, data.photoURL)
          .then(()=>{
            // create user add on database 
            const userInfo={
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
              if(res.data.insertedId){
                console.log('user added the database ');
                reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500
                }); 
                navigate('/')
              }
            })
          
          })
          .catch(error=>{
            console.log(error);
          })
        })
      } 
     
      
    return (
       <>
       <Helmet>
        <title>Bistro boss || Sing Up</title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Sing Up</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name"
                 {...register("name" ,{ required: true })} className="input input-bordered" />
                 {errors.name && <span className="text-red-600"> Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL"
                 {...register("PhotoURL" ,{ required: true })} className="input input-bordered" />
                 {errors.photoURL && <span className="text-red-600"> PhotoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} placeholder="email"
                name="email" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true,
                 minLength:6,
                 maxLength: 20,
                 pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                 })} 
                 placeholder="password"
                name="password" className="input input-bordered" />
                 {errors.password?.type === "required" && (
                <p className="text-red-500"> password is required</p>
                 )}
                 {errors.password?.type === "minLength" && (
                <p className="text-red-500"> password must be 6 characters</p>
                 )}
                 {errors.password?.type === "maxLength" && (
                <p className="text-red-500"> password must be less than 20 characters</p>
                 )}
                 {errors.password?.type === "pattern" && (
                <p className="text-red-500"> Password must have one uppercase one lowercase one a number and a spacial character</p>
                 )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Sing Up</button>
              </div>
            </form>
            <p className="text-center py-3">
              <small>Already have an account ? <Link to={'/login'}> Go Log in</Link></small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
       
       </>
    );
};

export default Register;