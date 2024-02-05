import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import A from './A';

jest.mock('./api', () => ({ apiGetMethod: jest.fn() }))

describe('TodoItem', () => {
  const setups = () => {
    const mockHandleClick = jest.fn()
    const { getByText, ...utils } = render(
      <A f={mockHandleClick} />
    );

    const buttonClick = getByText('click')

    return {
      buttonClick,
      mockHandleClick,
      ...utils,
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders button with correct text "Click"', () => {
    const {buttonClick} = setups()
    expect(buttonClick).toBeInTheDocument();
  });

  it('calls HandleSignIn when clicking button "Click"', () => {
    const {buttonClick, mockHandleClick} = setups()
    fireEvent.click(buttonClick)
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});