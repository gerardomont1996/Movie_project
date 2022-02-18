
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3HLWfwTuDNN7ecipvPedyK3JiwBpyg9Y",
  authDomain: "movies-5eaba.firebaseapp.com",
  projectId: "movies-5eaba",
  storageBucket: "movies-5eaba.appspot.com",
  messagingSenderId: "913217461509",
  appId: "1:913217461509:web:df9da1b3fb3aac9bee2b6c"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;