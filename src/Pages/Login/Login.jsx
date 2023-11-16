import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    // const captcha = useRef(null)
    const [disAbled, setDisabled] = useState(true)
    
    const {singIn}= useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
   
    const from = location?.state?.from?.pathname || "/"
    console.log('location', location.state);
  
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handelLogin = e=>{
        e.preventDefault()
        const form = e.target 
        const email= form.email.value
        const password= form.password.value
        console.log(email, password);
        singIn(email, password)
        .then(result=>{
            const user= result.user 
            console.log(user);
            Swal.fire({
              title: "User Log in Successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate (from, {replace:true});
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handelValidateCaptha = (e)=>{
      e.preventDefault()
        const userCaptchaValue = e.target.value
        console.log(userCaptchaValue);
        if (validateCaptcha(userCaptchaValue)==true) {
           setDisabled(false)
        }
   
        else {
            setDisabled(true)
        }
    }
  return (
    <> 
    <Helmet>
    <title>Bistro boss || Log in</title>
   </Helmet>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center md:w-1/2 lg:text-left">
    <h1 className="text-5xl font-bold">Login now!</h1>
    <p className="py-6">
      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
      excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
      a id nisi.
    </p>
  </div> 
  <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handelLogin} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
       
      </div>
      <div className="form-control">
        <label className="label">
        <label className="label">
        <LoadCanvasTemplate />
        </label>
        </label>
        <input
          onBlur={handelValidateCaptha}
          type="text"
          name="captcha"
          // ref={captcha}
          placeholder="Type the above captcha"
          className="input input-bordered"
          required
        />
        {/* <button className="btn btn-xs">Validate</button> */}
      </div>
      <div className="form-control mt-6">
        <button disabled={disAbled} type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
    <p className='text-center p-3'> <small>New here ?</small> <Link to={'/register'}>
       Create A new Account
      </Link> </p>
      <SocialLogin></SocialLogin>
  </div>
  </div>
   
</div>
    
    </>
  );
};

export default Login;
