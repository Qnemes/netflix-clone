import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export const useAuthListener = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};
