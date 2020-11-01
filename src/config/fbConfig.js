import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBfsIZIK1MZYrazQfAK06O2nZDGmL9w2F8",
    authDomain: "environment-monitoring-dd607.firebaseapp.com",
    databaseURL: "https://environment-monitoring-dd607.firebaseio.com",
    projectId: "environment-monitoring-dd607",
    storageBucket: "environment-monitoring-dd607.appspot.com",
    messagingSenderId: "47939475722",
    appId: "1:47939475722:web:7b250b84e3ab0e6c8842f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;