// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCefDbuwbnlyCoRxnMHB2cUpX0x_cLsadE",
  authDomain: "wellnestx.firebaseapp.com",
  projectId: "wellnestx",
  storageBucket: "wellnestx.appspot.com",
  messagingSenderId: "184295424049",
  appId: "1:184295424049:web:a7d4672a4a77e7b42e5510",
  measurementId: "G-P2RD9DLMY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;