import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import B from './B';

describe('TodoItem', () => {
  const setups = () => {
    // const mockHandleClick = jest.fn()
     /* tslint:disable-next-line */
    // jest.spyOn(B, 'e')
    const { getByText, getByTestId, ...utils } = render(
      <B />
    );

    const buttonClick = getByText('click')

    return {
      buttonClick,
      getByTestId,
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

  it('calls HandleSignIn when clicking button "Click"', async () => {
    const {buttonClick, getByTestId} = setups()
    fireEvent.click(buttonClick)
    expect(getByTestId('num')).toHaveTextContent('1');
  });

  it.only('change route to /a when clicking button "change route"', async () => {
    // const {buttonChangeRoute, getByTestId} = setups()
    const history = createMemoryHistory({ initialEntries: ['/B'] })
    const {getByText} = render(<Router location={history.location} navigator={history}><B /></Router>)
    const buttonChangeRoute = getByText('change route')
    expect(history.location.pathname).toBe('/B');
    fireEvent.click(buttonChangeRoute)
    expect(history.location.pathname).toBe('/A');
  });
});