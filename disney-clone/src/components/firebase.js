import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `AIzaSyDXwcLvif6hyBH666GrS6r_Wdl1OyGQ16o`,
  authDomain: "disney-clone-bc86c.firebaseapp.com",
  projectId: "disney-clone-bc86c",
  storageBucket: "disney-clone-bc86c.appspot.com",
  messagingSenderId: "304989422989",
  appId: "1:304989422989:web:ab9f54cea28f343568a9c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { storage, provider, auth };
export default db;
