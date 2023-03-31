// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfVE0wPehdwQxXvmwzznURYhwO_KaQWE0",
  authDomain: "project01-b173f.firebaseapp.com",
  projectId: "project01-b173f",
  storageBucket: "project01-b173f.appspot.com",
  messagingSenderId: "312684906361",
  appId: "1:312684906361:web:c4dad15ad1066c80c311a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db = getFirestore(app)
// export const storage = getStorage(app)

export default app