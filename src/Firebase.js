import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwV5bF45uTNhhFs3y-IsNCrLIVHCIj79Y",
  authDomain: "woven-plane-454705-v9.firebaseapp.com",
  projectId: "woven-plane-454705-v9",
  storageBucket: "woven-plane-454705-v9.appspot.com", 
  messagingSenderId: "1059956319435",
  appId: "1:1059956319435:web:32eca822bb7f28367ae74e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
