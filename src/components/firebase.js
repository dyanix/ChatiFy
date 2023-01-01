import firebase from "firebase/app";
import  "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth =firebase.initializeApp ( {
    apiKey: "AIzaSyDkasOKtXXv1pktFPxfom324kB1xqGX1l8",
    authDomain: "chatify-714d4.firebaseapp.com",
    projectId: "chatify-714d4",
    storageBucket: "chatify-714d4.appspot.com",
    messagingSenderId: "163592320418",
    appId: "1:163592320418:web:fcbe0bab806462fb1f2efb",
    measurementId: "G-D4S4GWPL5S"
  }).auth();