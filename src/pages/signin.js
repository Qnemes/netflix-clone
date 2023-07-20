import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';

  const handleSigIn = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error ? <Form.Error data-testid="error">{error}</Form.Error> : null}
          <Form.Base onSubmit={handleSigIn} method="POST">
            <Form.Input
              type="email"
              placeholder="me@example.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="********"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
            <Form.Submit data-testid="sign-in" disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now!</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you`re not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </Fragment>
  );
}
