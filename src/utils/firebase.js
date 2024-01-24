// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEadtomCVXCAEWtv_1ahnAo1OqAKitOXU",
  authDomain: "netflixgpt-1e992.firebaseapp.com",
  projectId: "netflixgpt-1e992",
  storageBucket: "netflixgpt-1e992.appspot.com",
  messagingSenderId: "648637165937",
  appId: "1:648637165937:web:2d9bf5ce3c40cfb3c5c6d0",
  measurementId: "G-0L6Q2JC7C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();