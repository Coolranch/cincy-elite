import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBHbY16yJjFnwy1-4DuTYnz1Iupln7wWAQ",
    authDomain: "cincy-elite.firebaseapp.com",
    databaseURL: "https://cincy-elite.firebaseio.com",
    projectId: "cincy-elite",
    storageBucket: "cincy-elite.appspot.com",
    messagingSenderId: "749832175932",
    appId: "1:749832175932:web:b9c3976225cee9b7fa9e39"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;