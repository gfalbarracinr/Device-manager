import React, { Fragment, useState } from 'react'
import Device from '../../types/Device'
import { Modal } from '../Modal';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { DeviceRow, DeviceTitle, DeviceText, Button, ButtonContainer, TableData } from './style';

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
      <DeviceRow>
        <TableData>
          <DeviceTitle>{device.system_name}</DeviceTitle>
        </TableData>
        <TableData>
          <DeviceText>{device.type}</DeviceText>
        </TableData>
        <TableData>
          <DeviceText>{device.hdd_capacity}</DeviceText>
        </TableData>
        <TableData>
          <ButtonContainer>
            <Button type='button' title='Edit Device' onClick={() => setModal(true)}><AiOutlineEdit/></Button>
            <Button type='button' title='Remove Device' onClick={() => onDelete(device.id)}><AiOutlineDelete/></Button>
          </ButtonContainer>
        </TableData>
      </DeviceRow>
      )}
    </Fragment>
  )
}

export default DeviceComponent