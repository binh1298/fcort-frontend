import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCsE_URH7OI6_du0hUTi0K4b2hfIYuZZ5o',
  authDomain: 'fcort-7e22f.firebaseapp.com',
  databaseURL: 'https://fcort-7e22f.firebaseio.com',
  projectId: 'fcort-7e22f',
  storageBucket: 'fcort-7e22f.appspot.com',
  messagingSenderId: '410020630686',
  appId: '1:410020630686:web:66ba21599b0a3599a0eb8f',
  measurementId: 'G-FD1B59GVGT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const storage = firebase.storage();
export {storage, firebase as default};
