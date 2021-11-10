import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/FirebaseInitialize";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";




initializeFirebase()

const useFirebase=()=>{

    const [user,setUser]=useState({})
    const auth=getAuth()



    // create User ////
   const register=(email,password)=>{
       createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


}

// LogOUt User //

const LogOUt=()=>{

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

 
// Sign IN user ///
const Login=(email,password)=>{

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
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






    return {user,register,LogOUt,Login}
}


export default useFirebase;