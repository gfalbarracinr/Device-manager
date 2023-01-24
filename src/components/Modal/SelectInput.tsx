import React, { useState } from 'react'
import { DeviceType } from '../../types/Device';
import { InputLabel, InputSection, Select } from './style';
interface Props {
  id: string,
  value?: DeviceType,
  name: string,
}
export const SelectInput = ({id, value, name}: Props) => {
  const [input, setInput] = useState<typeof value>(value);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as DeviceType;
    setInput(type);
  }
  return (
    <InputSection>
      <InputLabel htmlFor={id}>{id.toUpperCase()}</InputLabel>
      <Select id={id} name={id} onChange={handleChange} defaultValue={input} placeholder='Type'>
        {
          Object.values(DeviceType).map((type) => (
            <option key={type} value={type.toUpperCase()}>{type.toUpperCase()}</option>
          ))
        }
      </Select>
    </InputSection>
  )
}
