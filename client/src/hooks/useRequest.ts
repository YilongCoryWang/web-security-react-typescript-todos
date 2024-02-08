import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { SignInResponseType } from '../pages/SignIn'

type RequestMethodType = 'POST' | 'GET'
type RequestOptionalParamsType = {method: RequestMethodType, body?: Object}

export default function useRequest() {
  const [data, setData] = useState<any>();
  const [errorStatus, setErrorStatus] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const request = async (url: string, {method, body}: RequestOptionalParamsType) => {
    let resp: AxiosResponse
    try{
      if(method === 'POST'){
        resp = await axios.post<SignInResponseType>(url, body)
      } else if(method === 'GET') {
        resp = await axios.get<SignInResponseType>(url)
      } else {
        throw new Error(`HTTP request method not suppported: ${method}`)
      }
      setData(resp.data)
    } catch (error) {
      if (axios.isAxiosError(error) || error instanceof Error) {
        setErrorStatus(error.message)
        return
      }
      setErrorStatus(JSON.stringify(error))
    } finally {
      setIsLoading(false)
    }
  }
  return {request, data, isLoading, errorStatus}
}