
import { initializeApp } from "firebase/app";
import {getAuth   } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCRjDdLBLY7sCRlLG6sV2BbZSegrKSNx3M",
  authDomain: "chatapp-2629e.firebaseapp.com",
  projectId: "chatapp-2629e",
  storageBucket: "chatapp-2629e.appspot.com",
  messagingSenderId: "358548543560",
  appId: "1:358548543560:web:69a9bc9dab81f32922607d"
};


export const  app = initializeApp(firebaseConfig);
export const  auth = getAuth();
export const  storage = getStorage();
export const  db = getFirestore(app);
