import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZ4VFQ310K7lbxOBcsagqjUn2pmdJCYrY",
  authDomain: "coffee-dukan.firebaseapp.com",
  projectId: "coffee-dukan",
  storageBucket: "coffee-dukan.appspot.com",
  messagingSenderId: "256956918120",
  appId: "1:256956918120:web:6db408d7d2788a08924edd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
