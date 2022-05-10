// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAun8CXtWrUM8oa5a7N5YYAYyww52H5Adw",
  authDomain: "warehouse-management-a-11.firebaseapp.com",
  projectId: "warehouse-management-a-11",
  storageBucket: "warehouse-management-a-11.appspot.com",
  messagingSenderId: "590143988595",
  appId: "1:590143988595:web:9137617bfe20f0dc4e9b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;