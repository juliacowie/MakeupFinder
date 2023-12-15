// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export class environment{
static firebaseConfig = {
  apiKey: "AIzaSyBOAo8OdmnEf8Tnm6hFJcoKAfHhKxdC7Gw",
  authDomain: "makeupfinder-8498e.firebaseapp.com",
  projectId: "makeupfinder-8498e",
  storageBucket: "makeupfinder-8498e.appspot.com",
  messagingSenderId: "427880410752",
  appId: "1:427880410752:web:79a351e1899678cd8a0065",
  measurementId: "G-T4HFHCQHZR"
}

// Initialize Firebase
app = initializeApp(environment.firebaseConfig);
analytics = getAnalytics(this.app);
auth= getAuth(this.app);


}