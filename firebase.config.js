import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDkrp0uhWcQGNLOZFe6sxbPJBWlaGM8W3o",
  authDomain: "reya-proxy-queries.firebaseapp.com",
  databaseURL: "https://reya-proxy-queries-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reya-proxy-queries",
  storageBucket: "reya-proxy-queries.firebasestorage.app",
  messagingSenderId: "884875553612",
  appId: "1:884875553612:web:9e095f6a4d5d9fe6283de9"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
