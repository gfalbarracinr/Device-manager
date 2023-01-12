export enum filter {
  ALL = 'ALL' 
}


export enum DeviceType {
  WINDOWS_SERVER = 'WINDOWS_SERVER',
  MAC = 'MAC',
  WINDOWS_WORKSTATION = 'WINDOWS_WORKSTATION'
}

export default interface Device {
  id: string,
  system_name: string,
  type: DeviceType,
  hdd_capacity: number
}

export enum DeviceSortBy {
  hdd_capacity = 'hdd_capacity',
  system_name = 'system_name'
}

export type DeviceSort = DeviceSortBy | filter;

export type DeviceFilter = DeviceType | filter;

