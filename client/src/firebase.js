// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzAmUMlL27OOR2kTnz2ZncOGoz46kvsPM",
    authDomain: "omg-react.firebaseapp.com",
    projectId: "omg-react",
    storageBucket: "omg-react.appspot.com",
    messagingSenderId: "181701958853",
    appId: "1:181701958853:web:897715fb321855ca0824ac",
    measurementId: "G-JKVDN2KXZD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase.initializeApp(firebaseConfig));


export default firebase;