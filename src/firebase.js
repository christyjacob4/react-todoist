import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAEirX4ODNdsikZ-W1ZMrdraS7T0XwHvjs",
    authDomain: "todoist-8f2fc.firebaseapp.com",
    databaseURL: "https://todoist-8f2fc.firebaseio.com",
    projectId: "todoist-8f2fc",
    storageBucket: "todoist-8f2fc.appspot.com",
    messagingSenderId: "383893565719",
    appId: "1:383893565719:web:1beced9344943dca"
 });
 export { firebaseConfig as firebase }