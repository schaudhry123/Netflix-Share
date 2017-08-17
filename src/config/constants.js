import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCpokG7LGfY9kdAhP3TprjQGev5Uk_Pr8Y",
  authDomain: "netflix-share.firebaseapp.com",
  databaseURL: "https://netflix-share.firebaseio.com",
  projectId: "netflix-share",
  storageBucket: "netflix-share.appspot.com",
  messagingSenderId: "28476399485"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth