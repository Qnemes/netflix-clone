import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'netflix-clone-15a85.firebaseapp.com',
  projectId: 'netflix-clone-15a85',
  storageBucket: 'netflix-clone-15a85.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const firebase = Firebase.initializeApp(config);

export { firebase };
