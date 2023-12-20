// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKAllZY847khl1cWR2_AQ40SGh_XBVTVU",
  authDomain: "stay-vista-d4e3f.firebaseapp.com",
  projectId: "stay-vista-d4e3f",
  storageBucket: "stay-vista-d4e3f.appspot.com",
  messagingSenderId: "411539710027",
  appId: "1:411539710027:web:0ad55f9fdadef1c9f82dce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth