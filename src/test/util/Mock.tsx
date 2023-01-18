import Device, { DeviceType } from '../../types/Device';
import fakeDevices from './devices.json';
export const getFakeDevices = (withError= false) => {
  return new Promise<Response>((resolve, reject) => {
    if (withError) {
      reject(new Error('Fake error'));
    }
    resolve(new Response(JSON.stringify(fakeDevices)));

  })
}

export const createDevice = () => {
  return new Promise<Response>((resolve, reject) => {
    const newDevice: Device = {
      hdd_capacity: 12345,
      id: 'my new device',
      system_name: 'Testing Device',
      type: DeviceType.WINDOWS_SERVER
    }
    resolve(new Response(JSON.stringify(newDevice)));

  })
}

export const deleteDevice = (id: string) => {
  return new Promise<Response>((resolve, reject) => {
    resolve(new Response('ok'));
  })
}