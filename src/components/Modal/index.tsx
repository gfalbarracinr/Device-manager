import React from 'react'
import { Input } from './Input'
import { SelectInput } from './SelectInput'
import Device, { DeviceType } from '../../types/Device'
interface Props {
  onClose: () => void,
  onSubmit: (device: Omit<Device, 'id'> ) => void,
  value?: Device
}
export const Modal = ({onClose, onSubmit, value}: Props) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      system_name: {value: string},
      type: {value: DeviceType},
      hdd_capacity: {value: number}
    }
    const device = {
      system_name: target.system_name.value,
      type: target.type.value,
      hdd_capacity: target.hdd_capacity.value
    }
    onSubmit(device);
    onClose();
  }
  console.log(value);
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Device</h1>
      <button type='button' onClick={() => onClose()}>X</button>
      <Input 
        id='system_name'
        name='System Name'
        type='text'  
        value={value?.system_name }
      />
      <SelectInput 
        id='type'
        name='Type'
        value={value?.type }
      />
      <Input 
        id='hdd_capacity'
        name='HDD Capacity'
        type='number'
        value={value?.hdd_capacity } 
      />
      <button type='submit'>Submit </button>
    </form>
  )
}
