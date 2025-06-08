import { initializeApp, getApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA_xsnsmH7uMrH5RIdpT1evJQfMhQerjo8',
  authDomain: 'muk-app-22a15.firebaseapp.com',
  databaseURL: 'https://muk-app-22a15-default-rtdb.firebaseio.com/',
  projectId: 'muk-app-22a15',
  storageBucket: 'muk-app-22a15.firebasestorage.app',
  messagingSenderId: '141513607923',
  appId: '1:141513607923:web:88faad0a05477b49cdc586',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { app, auth, db };