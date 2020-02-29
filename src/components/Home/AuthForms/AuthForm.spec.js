import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthForm from './AuthForm';

describe('AuthForm', () => {
  it('should render accordingly', () => {
    const { asFragment } = render(<AuthForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should only show the Sign Up form by default', () => {
    const { getByText, queryByTestId } = render(<AuthForm />);

    expect(getByText('Create an account')).toBeInTheDocument();
    expect(queryByTestId('login-form')).not.toBeInTheDocument();
  });

  describe('when clicking on the Log in button in the Sign Up Form', () => {
    it('should show the Login Form', () => {
      const { getByText, queryByTestId } = render(<AuthForm />);
      fireEvent.click(getByText('Log in'));

      expect(queryByTestId('login-form')).toBeInTheDocument();
      expect(queryByTestId('signup-form')).not.toBeInTheDocument();
    });
  });

  describe('when clicking on the Sign up button in the Log In Form', () => {
    it('should show the Sign Up form', () => {
      const { getByText, queryByTestId } = render(<AuthForm />);
      fireEvent.click(getByText('Log in'));
      fireEvent.click(getByText('Sign up'));

      expect(queryByTestId('login-form')).not.toBeInTheDocument();
      expect(queryByTestId('signup-form')).toBeInTheDocument();
    });
  });
});
