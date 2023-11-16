import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const Googleprovider = new GoogleAuthProvider();

    const axiosPublic = useAxiosPublic()
    
    const createUser = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password)=>{
       setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }

    const singInGoogle = ()=>{
      return signInWithPopup(auth, Googleprovider)
    }

    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    const updateUserProfile =(name, photo)=>{
        
      return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }


    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            if(currentUser){
              const userInfo ={email: currentUser.email}
              axiosPublic.post('/jwt', userInfo)
              .then(res=>{
                console.log(res.data.token);
                if(res.data.token){
                  localStorage.setItem('access-token', res.data.token)
                }
              })
            }
            else{
              localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return ()=>{
            return unSubscribe()
        }
    },[axiosPublic])

    const authInfo ={
       user,
       loading,
       createUser,
       singIn,
       singInGoogle,
       logOut,
       updateUserProfile,

    }

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;