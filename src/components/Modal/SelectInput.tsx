import React, { useState } from 'react'
import { DeviceType } from '../../types/Device';
interface Props {
  id: string,
  value?: DeviceType,
  name: string
}
export const SelectInput = ({id, value, name}: Props) => {
  const [input, setInput] = useState<typeof value>(value);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as DeviceType;
    setInput(type);
  }
  return (
    <section >
      <label htmlFor={id}>{name}</label>
      <select id={id} name={id} onChange={handleChange} defaultValue={input}>
        {
          Object.values(DeviceType).map((type) => (
            <option key={type} value={type.toUpperCase()}>{type.toUpperCase()}</option>
          ))
        }
      </select>
    </section>
  )
}
