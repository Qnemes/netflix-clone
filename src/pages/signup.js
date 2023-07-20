import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = name === '' || password === '' || email === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => history.push(ROUTES.BROWSE));
      })
      .catch((error) => {
        setName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error ? <Form.Error data-testid="error">{error}</Form.Error> : null}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
            <Form.Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
            <Form.Submit data-testid="sign-up" disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a User? <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
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
