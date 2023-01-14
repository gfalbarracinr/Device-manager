import React, { useState } from 'react'
interface Props {
  name: string;
  id: string;
  type: 'text' | 'number';
  value?: string | number;

}
export const Input = ({name, id, value, type}: Props) => {
  const [input, setInput] = useState<typeof value>(value);
  return (
    <section>
      <label htmlFor={id}>{name}</label>
      <input id={id} name={id} type={type} placeholder={name} value={input} onChange={(e) => {setInput(e.target.value)}} />
    </section>
  )
}
