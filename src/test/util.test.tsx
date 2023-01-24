import Device, { DeviceSortBy, DeviceType } from "../types/Device";
import { sortDevicesByAttr } from "../util"

const createDevice = (name: string, capacity: number) => {
  const newDevice: Device = {
    hdd_capacity: capacity,
    id: 'my new device',
    system_name: name,
    type: DeviceType.WINDOWS_SERVER
  }
  return newDevice;
}

describe('testing sorting function', () => {
  it('sort by name is working', () => {
    const devices = [createDevice('abc test', 123), createDevice('zbc test', 13), createDevice('mbc test', 1230)]
    const result = sortDevicesByAttr(devices, DeviceSortBy.system_name);
    expect(result.length).toBe(3);
    expect(result[0].system_name).toBe('abc test');
    expect(result[2].system_name).toBe('zbc test');
  });

  it('sort by capacity is working', () => {
    const devices = [createDevice('abc test', 123), createDevice('zbc test', 13), createDevice('mbc test', 1230)]
    const result = sortDevicesByAttr(devices, DeviceSortBy.hdd_capacity);
    expect(result.length).toBe(3);
    expect(result[0].hdd_capacity).toBe(13);
    expect(result[2].hdd_capacity).toBe(1230);
  });
});