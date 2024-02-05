import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';

describe('TodoItem', () => {
  const setups = () => {
    const mockHandleSignIn = jest.fn()
    const { getByText, getByPlaceholderText, ...utils } = render(
      <SignIn handleSignIn={mockHandleSignIn} />
    );

    const buttonSignIn = getByText('Sign In')

    return {
      buttonSignIn,
      mockHandleSignIn,
      ...utils,
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders button with correct text "Sign In"', () => {
    const {buttonSignIn} = setups()
    expect(buttonSignIn).toBeInTheDocument();
  });

  it('calls HandleSignIn when clicking button "Sign In"', () => {
    const {buttonSignIn, mockHandleSignIn} = setups()
    fireEvent.click(buttonSignIn)
    expect(mockHandleSignIn).toHaveBeenCalled();
  });
});