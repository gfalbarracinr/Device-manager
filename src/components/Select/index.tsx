import React from 'react'
import { DeviceSortBy, DeviceType } from '../../types/Device'
import useDevice from '../../context/useDevice';
import { ActionTypes } from '../../context/actionType';
import './select.css';

interface OptionSelectionProps {
  actionType: ActionTypes,
  options: typeof DeviceType | typeof DeviceSortBy,
  label: string,
  id: string
}
export const OptionSelection = ({options, actionType, label, id}: OptionSelectionProps) => {
  const {dispatch} = useDevice();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: actionType, payload: e.target.value})
  }
  return (
    <section className='select-container'>
      <label className='select-label' htmlFor={id}>{label}</label>
      <select className='select-input' id={id} name={id} onChange={handleChange}>
        <option value='ALL'>ALL</option>
        {
          Object.values(options).map((type) => (
            <option key={type} value={type}>{type.toUpperCase()}</option>
          ))
        }
      </select>
    </section>
  )
}
