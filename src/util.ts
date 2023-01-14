import Device, { DeviceSortBy } from "./types/Device";

export const sortDevicesByAttr = (devices: Device[], sortby: DeviceSortBy): Device[] => {
  switch(sortby) {
    case DeviceSortBy.hdd_capacity:
      return devices.sort((d1, d2) => d1.hdd_capacity - d2.hdd_capacity);
    case DeviceSortBy.system_name: 
      return devices.sort((d1, d2) => (d1.system_name > d2.system_name) ? 1 : (d1.system_name < d2.system_name) ? -1 : 0);
    default:
      throw new ReferenceError('Sort Option not valid');
  }
}