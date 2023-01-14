import Device from "../types/Device";
import { deleteDevice, getDevices, postDevice, putDevice } from "./RestService"
const toDevice = (data: any): Device => {
  return {
    id: data.id,
    hdd_capacity: data.hdd_capacity,
    system_name: data.system_name,
    type: data.type
  }
}
const toDevices = (data: any[]): Device[] => {
  return data.map((element) => toDevice(element))
}

export const retrieveDevices = async () => {
    const response = await getDevices();
    const data = await response.json();
    return toDevices(data);
}

export const createDevice = async (device: Omit<Device, 'id'>) => {
  const response = await postDevice(device);
  const data = await response.json();
  return toDevice(data);
}

export const updateDevice = async (device: Device) => {
  const response = await putDevice(device);
  return response.status === 200;
}

export const removeDevice = async (deviceId: string) => {
  const response = await deleteDevice(deviceId);
  return response.status === 200;
}