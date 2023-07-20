import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';
import { Signup } from '../../pages';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
    ),
  })),
};

describe('<Signup />', () => {
  it('renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <BrowserRouter>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </BrowserRouter>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Qnemes' }
      });
      await fireEvent.change(getByPlaceholderText('E-mail'), {
        target: { value: 'ace@gmail.com' }
      });
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'aceaceace' }
      });
      fireEvent.click(getByTestId('sign-up'));

      expect(getByPlaceholderText('Name').value).toBe('Qnemes');
      expect(getByPlaceholderText('E-mail').value).toBe('ace@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('aceaceace');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});