import React from 'react'
import { Input } from './Input'
import { SelectInput } from './SelectInput'
import Device, { DeviceType } from '../../types/Device'
import { ModalFormContainer, ModalHeaderSection, ModalTitle, Button, SubmitButton, ButtonSection } from './style'
import { AiOutlineCloseCircle } from 'react-icons/ai';
interface Props {
  onClose: () => void,
  onSubmit: (device: Omit<Device, 'id'> ) => void,
  value?: Device,
  modalType: 'Edit' | 'Add'
}
export const Modal = ({onClose, onSubmit, value, modalType}: Props) => {
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

  return (
    <ModalFormContainer onSubmit={handleSubmit}>
      <ModalHeaderSection>
        <ModalTitle>{`${modalType} Device`}</ModalTitle>
        <Button type='button' onClick={() => onClose()}><AiOutlineCloseCircle/></Button>
      </ModalHeaderSection>
      <Input
        id='system_name'
        name='System Name'
        type='text'  
        value={value?.system_name ?? '' }
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
        value={value?.hdd_capacity ?? '' } 
      />
      <ButtonSection>
          <SubmitButton type='submit' title='Create Device'>{modalType}</SubmitButton>
      </ButtonSection>
    </ModalFormContainer>
  )
}
