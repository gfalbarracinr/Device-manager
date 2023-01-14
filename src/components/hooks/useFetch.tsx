import { useState } from 'react'
import { createDevice, removeDevice, retrieveDevices, updateDevice } from '../../services/DeviceService';

const requestOptions = {
  'get': retrieveDevices,
  'post': createDevice,
  'put': updateDevice,
  'delete': removeDevice
}
type callbackType = (response:any, input:any) => void;
export function useFetch() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchData = (method: keyof typeof requestOptions, callback: callbackType, input: any ) => {
    setLoading(true);
    setError(null);
    requestOptions[method](input)
    .then(response => {
      callback(response, input);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      setError(error.message)})
  }

  return {error, loading, fetchData}
}
