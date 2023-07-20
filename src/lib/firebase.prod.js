import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDehwte4aWteEvMEe07jwAo7itcOGi3WKU',
  authDomain: 'netflix-clone-15a85.firebaseapp.com',
  projectId: 'netflix-clone-15a85',
  storageBucket: 'netflix-clone-15a85.appspot.com',
  messagingSenderId: '988691633482',
  appId: '1:988691633482:web:b9b25af4ffa0ce172fddb3',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
