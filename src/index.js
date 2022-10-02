import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from "firebase/app";
// import 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAgSgZcvVVhhIkHR05MQbd_h-jMoEwLn8k",
  authDomain: "cart-7ca5a.firebaseapp.com",
  projectId: "cart-7ca5a",
  storageBucket: "cart-7ca5a.appspot.com",
  messagingSenderId: "328417350864",
  appId: "1:328417350864:web:6a11ce608750d5a05a3ad5"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

