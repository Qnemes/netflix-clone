import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Signin } from '../../pages';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!')),
  })),
};

describe('<Signin />', () => {
  it('renders the sign in page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <BrowserRouter>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signin />
        </FirebaseContext.Provider>
      </BrowserRouter>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('me@example.com'), {
        target: { value: 'ace@gmail.com' }
      });
      await fireEvent.change(getByPlaceholderText('********'), {
        target: { value: 'aceaceace' }
      });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('me@example.com').value).toBe('ace@gmail.com');
      expect(getByPlaceholderText('********').value).toBe('aceaceace');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});