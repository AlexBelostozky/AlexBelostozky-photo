import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'alexbelostozky-photo.firebaseapp.com',
  projectId: 'alexbelostozky-photo',
  storageBucket: 'alexbelostozky-photo.firebasestorage.app',
  messagingSenderId: '571708317175',
  appId: '1:571708317175:web:8e493db09b33fab62c22f2',
  measurementId: 'G-5F7RCQY9ET'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

export { firebaseApp, firebaseAnalytics };
