import React, { useState } from 'react'
import { InputSection, InputElement, InputLabel } from './style';
interface Props {
  name: string;
  id: string;
  type: 'text' | 'number';
  value: string | number;

}
export const Input = ({name, id, value, type}: Props) => {
  const [input, setInput] = useState<typeof value>(value);
  return (
    <InputSection>
      <InputLabel htmlFor={id}>{id.toUpperCase()}</InputLabel>
      <InputElement id={id} name={id} type={type} placeholder={name} value={input} onChange={(e) => {setInput(e.target.value)}} required autoComplete='off'/>
    </InputSection>
  )
}
