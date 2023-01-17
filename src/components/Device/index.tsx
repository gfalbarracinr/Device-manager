import React, { Fragment, useState } from 'react'
import Device from '../../types/Device'
import { Modal } from '../Modal';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { DeviceComponentContainer, DeviceTitle, DeviceText, Button, ButtonContainer } from './style';

interface Props {
  device: Device,
  onDelete: (deviceId: string) => void
  onEdit: (device: Device) => void
}
const DeviceComponent = ({device, onDelete, onEdit}: Props) => {
  const [modal, setModal] = useState(false);
  const handleSubmit = (updatedDevice: Omit<Device, 'id'>) => {
    const editedDevice: Device = {...updatedDevice, id: device.id};
    onEdit(editedDevice);
    setModal(false);
  }
  return (
    <Fragment>
      { modal && <Modal onClose={() => setModal(false)} onSubmit={handleSubmit} value={device} modalType='Edit' />}
      { !modal && (
      <DeviceComponentContainer>
        <DeviceTitle>{device.system_name}</DeviceTitle> 
        <DeviceText>{device.type}</DeviceText>
        <DeviceText>Capacity: {device.hdd_capacity}</DeviceText>
        <ButtonContainer>
          <Button type='button' onClick={() => onDelete(device.id)}><AiOutlineDelete/></Button>
          <Button type='button' onClick={() => setModal(true)}><AiOutlineEdit/></Button>
        </ButtonContainer>
      </DeviceComponentContainer>
      )}
    </Fragment>
  )
}

export default DeviceComponent