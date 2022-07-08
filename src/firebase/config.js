import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVsmdYaTy95Xj9GuPteOtqgmm5CstO8JA",
  authDomain: "olxp-fcca4.firebaseapp.com",
  projectId: "olxp-fcca4",
  storageBucket: "olxp-fcca4.appspot.com",
  messagingSenderId: "500901211820",
  appId: "1:500901211820:web:64084043d066435631b909",
  measurementId: "G-GPV0RXZ3SS"
};

export default firebase.initializeApp(firebaseConfig)
