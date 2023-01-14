import React, { Fragment, useState } from 'react'
import Device from '../../types/Device'
import { Modal } from '../Modal';
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
      { modal && <Modal onClose={() => setModal(false)} onSubmit={handleSubmit} value={device} />}
      <article>
        <h1>{device.system_name}</h1> 
        <p>{device.type} {device.hdd_capacity}</p>
        <section>
          <button type='button' onClick={() => onDelete(device.id)}>Remove</button>
          <button type='button' onClick={() => setModal(true)}>Edit</button>
        </section>
      </article>
    </Fragment>
  )
}

export default DeviceComponent