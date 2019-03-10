import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCImxvE47mfzGo0BM2UI7RJdnPfjcD_hq8',
  authDomain: 'infantito-reactibook.firebaseapp.com',
  databaseURL: 'https://infantito-reactibook.firebaseio.com',
  projectId: 'infantito-reactibook',
  storageBucket: 'infantito-reactibook.appspot.com',
  messagingSenderId: 700627233602,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;