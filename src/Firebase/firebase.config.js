// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhcvrGug6W3Fsxhgvyqsw9TWolh7Kgnxg",
  authDomain: "auth-mohamilon-177b0.firebaseapp.com",
  projectId: "auth-mohamilon-177b0",
  storageBucket: "auth-mohamilon-177b0.appspot.com",
  messagingSenderId: "979079955654",
  appId: "1:979079955654:web:89f333e4c86386b12883c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;