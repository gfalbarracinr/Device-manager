import React from 'react'
import { PropsWithChildren } from 'react'
import useDevice from '../../context/useDevice'
export const MenuTestingHelper = ({children}: PropsWithChildren) => {
  const {state} = useDevice();
  return (
    <div>
      <p>{state.filter}</p>
      <p>{state.sort}</p>
      {children}  
    </div>
  )
}
