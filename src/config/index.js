import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBYbbSxK8wY-Jp_lq_WBK0JEYuRsdhMw-A',
  authDomain: 'aduin-56b12.firebaseapp.com',
  projectId: 'aduin-56b12',
  storageBucket: 'aduin-56b12.appspot.com',
  messagingSenderId: '591138528966',
  appId: '1:591138528966:web:4b428ed74f510c969fc1c7',
  measurementId: 'G-GJJWYFVPPR',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
