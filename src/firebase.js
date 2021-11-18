import firebase from "firebase";


const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCTd8ttMb7mbeFWwpeYlQo0o_8oKwXuySk",

  authDomain: "clone-25d60.firebaseapp.com",

  projectId: "clone-25d60",

  storageBucket: "clone-25d60.appspot.com",

  messagingSenderId: "449199594452",

  appId: "1:449199594452:web:8a3d89b52d1a18798cd441",

  measurementId: "G-8RQ2T1MQ5S"

  });

// Initialize Firebase
const auth = firebase.auth();

export {auth} ; 