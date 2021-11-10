import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/FirebaseInitialize";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";




initializeFirebase()

const useFirebase=()=>{

  const [error,setError]=useState('')
  const[isLoading,setIsLoadng]=useState(false)

    const [user,setUser]=useState({})
    const auth=getAuth()



    // create User ////
   const register=(email,password)=>{
     setIsLoadng(true)
       createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // ..
      }).finally(()=>setIsLoadng(false));


}

// LogOUt User //

const LogOUt=()=>{

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        setError(error.message)
        // An error happened.
      });
}

 
// Sign IN user ///
const Login=(email,password)=>{
  setIsLoadng(true)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(()=>setIsLoadng(false));
}

 

// Observer ///
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user)
          // ...
        } else {
            setUser({})
          // User is signed out
          // ...
        }
      });
      return ()=>unSubscribe;
},[])






    return {user,register,LogOUt,Login,error,setError,isLoading}
}


export default useFirebase;