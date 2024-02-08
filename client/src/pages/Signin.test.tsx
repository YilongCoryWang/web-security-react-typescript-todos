import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';

describe('TodoItem', () => {
  const setups = () => {
    const { getByText, ...utils } = render(
      <SignIn />
    );
    const buttonSignIn = getByText('Sign In')

    return {
      buttonSignIn,
      ...utils,
    };
  }

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

  it('should have no side effect when clicking button "Sign In"', async () => {
    const {buttonSignIn} = setups()
    fireEvent.click(buttonSignIn)
  })
});