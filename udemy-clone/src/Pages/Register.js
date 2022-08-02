import React, { useRef } from 'react'
import {useNavigate, Link, useNavigate} from "react-router-dom";
import db from "../firebase";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function Register() {
    let navigate = useNavigate();

    //get data from input
    const emailRef = useRef();
    const userRef = useRef();
    const passwordRef = useRef();

    function SignUpUser() {
        
        const email= emailRef.currentValue;
        const username = userRef.currentValue;
        const password = passwordRef.currentValue;

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            setDoc(doc(db, "users", user.uid), {
                userName: username,
                userEmail: email,
                userId: user.uid
            }).then(()=>{
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
        <input type="text" ref={userRef} placeholder='Enter your Username'></input>
        <input type="email" ref={emailRef} placeholder='Enter your Email' />
        <input type="email" ref={passwordRef} placeholder='Enter your Password'></input>
        <button onClick={SignUpUser}>Submit</button>

        <p>Dont have an Account? <Link to  = "/login"></Link> </p>
    </div>
  )
}

export default Register
