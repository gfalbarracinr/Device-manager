import Device from "../types/Device";

const setUpURL = (url: string) => {
  if (process.env.REACT_APP_API_URL) {
    return new URL(url, process.env.REACT_APP_API_URL)
  }
     throw new ReferenceError('API URL not defined')
}

export const getDevices = () => {
  const url  = setUpURL('devices');
  return fetch(url.toString());
}

export const postDevice = (device: Omit<Device, 'id'>) => {
  const url  = setUpURL('devices');
  return fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify(device),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const deleteDevice  = (deviceId: string) => {
  const url = setUpURL(`devices/${deviceId}`);
  return fetch(url.toString(), {
    method: 'DELETE'
  })
}

export const putDevice = (device: Device) => {
  const {id, ...updatedDevice} = device;
  const url = setUpURL(`devices/${id}`);
  return fetch(url.toString(), {
    method: 'PUT',
    body: JSON.stringify(updatedDevice),
    headers: {
      'Content-Type': 'application/json'
    }
  })
} 

