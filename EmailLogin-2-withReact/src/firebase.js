// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTp1lJpbpj9bJzFTeMZBx2t_KWCb_JaCM",
    authDomain: "reactlogin-df8e0.firebaseapp.com",
    projectId: "reactlogin-df8e0",
    storageBucket: "reactlogin-df8e0.appspot.com",
    messagingSenderId: "731036898497",
    appId: "1:731036898497:web:30ec0620b15fb0c90ab040",
    measurementId: "G-JGXVEJMCCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
