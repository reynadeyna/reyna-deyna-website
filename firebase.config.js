import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAKROc2FNxtDcAHP0zUdGNEh1h2_PhOt-o",
  authDomain: "angelware-dcc7e.firebaseapp.com",
  projectId: "angelware-dcc7e",
  storageBucket: "angelware-dcc7e.appspot.com",
  messagingSenderId: "884029936812",
  appId: "1:884029936812:web:9dfebb781e73a6bd867b09"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db