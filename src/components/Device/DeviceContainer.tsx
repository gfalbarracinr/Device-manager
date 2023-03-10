import React, { useEffect, useMemo, useState } from 'react'
import Device, { DeviceSortBy, DeviceWithoutId } from '../../types/Device';
import DeviceComponent from './index';
import { Error } from '../Error';
import { Loading } from '../Loading';
import { Modal } from '../Modal';
import { useFetch } from '../hooks/useFetch';
import useDevice from '../../context/useDevice';
import { sortDevicesByAttr } from '../../util';
import { DeviceTable, FloatButton, TableDeviceSection, TableHeader, TableHeaderRow } from './style';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const DeviceContainer = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const {error, loading, fetchData} = useFetch();
  const [modal, setModal] = useState<boolean>(false);
  const {state} = useDevice();
  const getDevices = (devices: Device[], input: any) => {
    setDevices(devices);
  }

  const removeDevice = (response: any, deviceId: string) => {
    setDevices((prevState) => {
      return prevState.filter(device => device.id !== deviceId);
    });
  }

  const createDevice = (device: Device, input: any) => {
    setDevices([...devices, device]);
  }

  const editDevice = (response: any, device: Device) => {
    setDevices((prevState) => {
      return prevState.map((element) => {
        if (element.id === device.id) {
          return device;
        }
        return element;
      })
    });
  }
  useEffect( () => {
      fetchData('get', getDevices, undefined);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = (deviceId: string) => {
    fetchData('delete', removeDevice, deviceId);
  }

  const changeModal = (status: boolean) => {
    setModal(status);
  }

  const addDevice = (device: DeviceWithoutId) => {
    fetchData('post', createDevice, device);
  }

  const handleEdit = (device: Device) => {
    fetchData('put', editDevice, device);
  }

  const filteredDevices = useMemo(() => {
    if (state.filter === 'ALL') {
      return devices;
    } else {
      return devices.filter((device) => device.type === state.filter)
    }
  }, [devices, state.filter])

  const sortDevices = useMemo(() => {
    if (state.sort === 'ALL') {
      return filteredDevices;
    } else {
      return sortDevicesByAttr(filteredDevices, state.sort.toLowerCase() as DeviceSortBy);
    }
  }, [filteredDevices, state.sort])
  return (
    <main>
      <FloatButton type='button' title='Add Device' onClick={() => { changeModal(true)}}><AiOutlinePlusCircle/></FloatButton>
      { error !== null && <Error message={error} /> }
      { loading && <Loading /> }
      <TableDeviceSection>
      <DeviceTable>
        <thead>
          <TableHeaderRow>
            <TableHeader>SYSTEM NAME</TableHeader>
            <TableHeader>TYPE</TableHeader>
            <TableHeader>HDD CAPACITY</TableHeader>
            <TableHeader>OPTIONS</TableHeader>
          </TableHeaderRow>
        </thead>
        <tbody>
          {
            sortDevices.map((device: Device) => (
              <DeviceComponent 
                key={device.id}
                device={device}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          }
        </tbody>
        { modal && <Modal onClose={() => changeModal(false)} onSubmit={addDevice} modalType='Add'/>}
      </DeviceTable>
      </TableDeviceSection>
    </main>
  )
}

export default DeviceContainer