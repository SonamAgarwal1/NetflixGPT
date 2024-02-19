// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU9r8x2_16CIvT2uF3N8QTEB-jE5VBXbk",
  authDomain: "netflixgpt-f427b.firebaseapp.com",
  projectId: "netflixgpt-f427b",
  storageBucket: "netflixgpt-f427b.appspot.com",
  messagingSenderId: "835545647426",
  appId: "1:835545647426:web:953306f895e2b9677ca0db",
  measurementId: "G-QEJKZNZR2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
