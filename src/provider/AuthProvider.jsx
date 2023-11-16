import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const Googleprovider = new GoogleAuthProvider();
    
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
            setLoading(false)
        });
        return ()=>{
            return unSubscribe()
        }
    },[])

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