//Sdks needed for the imort functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmI4OnnmMlqllJ5dFMRB-A6ZBt-wrdKZQ",
    authDomain: "udemy-clone-f1467.firebaseapp.com",
    projectId: "udemy-clone-f1467",
    storageBucket: "udemy-clone-f1467.appspot.com",
    messagingSenderId: "456597769814",
    appId: "1:456597769814:web:78f617ccb2af17f149f5f7",
    measurementId: "G-GBZ0WBT0GE"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();


export {app};
export {analytics}
export {db}