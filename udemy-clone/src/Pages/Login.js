import React, { useRef } from 'react'
import {useNavigate, Link, useNavigate} from "react-router-dom";
import db from "../firebase";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";



function Login() {
    let navigate = useNavigate();

    //get data from input
    const emailRef = useRef();
    const passwordRef = useRef();

    function SignInUser() {
        
        const email= emailRef.currentValue;
        const password = passwordRef.currentValue;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            setDoc(doc(db, "users", user.uid), {
                userEmail: email,
                userId: user.uid
            }).then(()=>{
                console.log("Login Successfully")
                navigate("/Profile")
            })
    
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    }

  return (
    <div>
        <h1>Register</h1>
        <input type="email" ref={emailRef} placeholder='Enter your Email' />
        <input type="email" ref={passwordRef} placeholder='Enter your Password'></input>
        <button onClick={SignInUser}>Submit</button>

        <p>Dont have an Account? <Link to  = "/register"></Link> </p>
    </div>
  )
}

export default Login
