// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJYBbnYS-4Kh2LbZ6Bdr4I0kxWRhxtakY",
  authDomain: "projectharisenin-f853b.firebaseapp.com",
  projectId: "projectharisenin-f853b",
  storageBucket: "projectharisenin-f853b.appspot.com",
  messagingSenderId: "123344252664",
  appId: "1:123344252664:web:353e22eab455f67f31550d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app