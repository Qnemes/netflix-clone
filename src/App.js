import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks/useAuthListener';

const App = () => {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOMEPAGE}>
        <Home />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </BrowserRouter>
  );
};

export default App;
