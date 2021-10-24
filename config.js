import * as firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDNjzMuGdaxhkZHgA8j-rOLvfogPVPe4SI",
  authDomain: "attendance-17cf5.firebaseapp.com",
  databaseURL: "https://attendance-17cf5-default-rtdb.firebaseio.com",
  projectId: "attendance-17cf5",
  storageBucket: "attendance-17cf5.appspot.com",
  messagingSenderId: "746006721670",
  appId: "1:746006721670:web:8ed45e0e2834a549a14d07",
  measurementId: "G-87N6E4R3ZT"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
 

