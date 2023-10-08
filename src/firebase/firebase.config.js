
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQ7JUoXwTjHwDfL5fpNESOY-7zGgtJHbI",
  authDomain: "event-management-da31e.firebaseapp.com",
  projectId: "event-management-da31e",
  storageBucket: "event-management-da31e.appspot.com",
  messagingSenderId: "605556555314",
  appId: "1:605556555314:web:1b947ed5c1aaf10ebb062b"
};


const app = initializeApp(firebaseConfig);

const myAuth = getAuth(app)
export default myAuth