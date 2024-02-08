import { renderHook, waitFor } from '@testing-library/react'
import useRequest from './useRequest';
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TodoItem', () => {
  const setups = () => {
    const { result } = renderHook(() => useRequest());
    return result
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return correct inititial values', () => {
    const result = setups()
    expect(result.current.isLoading).toEqual(true)
    expect(result.current.errorStatus).toEqual('')
    expect(result.current.data).toBeUndefined()
    expect(typeof result.current.request).toBe('function')
  });

  it('should have no side effect when clicking button "Sign In"', async () => {
    const result = setups()

    const mock_signInResp = {'authToken': 'mock_authToken'}
    mockedAxios.get.mockResolvedValue({ data: mock_signInResp});
    await result.current.request('', {method: 'GET'})
    await waitFor(()=>{
      expect(result.current.data).toBe(mock_signInResp)
    })
  })
});